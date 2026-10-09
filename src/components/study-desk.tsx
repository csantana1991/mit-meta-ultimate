import { useMemo, useState } from "react";
import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Circle,
  Download,
  ExternalLink,
  Library,
  RotateCcw,
  Search,
} from "lucide-react";
import {
  SCHOOLS,
  catalogStats,
  programHours,
  programs,
  type Course,
  type Program,
  type School,
} from "@/data/catalog";
import { diagramKind, filmFor, hasFilm } from "@/data/films";
import { checkpoint, lectureCount, ocwHref } from "@/lib/study";
import { useProgress } from "@/lib/use-progress";
import { SubjectDiagram } from "@/components/diagrams";

const PAGE = 12;

type Pane = "programs" | "path" | "theater";

function Roadmap({ program }: { program: Program }) {
  const cards =
    program.id === "cs-foundation"
      ? [
          ["Year 1 — Calc + physics", "18.01 → 18.02 → 8.01 → 6.100A"],
          ["Year 2 — Math core", "18.03, 18.06, 18.065, 8.02, 8.03"],
          ["Year 3 — CS core + quantum", "6.1200, 6.1220, 8.04, 8.05"],
          ["Year 4 — Einstein + ML", "8.033 special, 8.962 GR, 6.3900"],
        ]
      : program.school === "HST / Residency"
        ? [
            ["Year 1 — Preclinical HST", "Human systems, molecular bio, biostats"],
            ["Year 2 — Pathology + clerkships", "HST.021, HST.090, clerkships from April"],
            ["Years 3–4 — Clinical + research", "Medicine, surgery, pediatrics, research year"],
            ["Optional year 5", "Labs at Harvard, MIT, and the hospitals"],
          ]
        : [
            ["Year 1 — Foundations", program.courses.slice(0, 2).map((c) => c.code).join(", ") || "Core"],
            ["Year 2 — Depth + thesis", program.courses.slice(2).map((c) => c.code).join(", ") || "Thesis"],
          ];

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {cards.map(([title, body], index) => (
        <div
          key={title}
          className={
            "border p-3 " +
            (program.id === "cs-foundation" && index === 3
              ? "border-cardinal bg-cardinal/10"
              : "border-line bg-inset")
          }
        >
          <div className="font-mono text-xs font-semibold tracking-wide text-cardinal uppercase">{title}</div>
          <p className="mt-1 font-mono text-xs leading-relaxed text-muted">{body}</p>
        </div>
      ))}
    </div>
  );
}

export function StudyDesk() {
  const [school, setSchool] = useState<School>("EECS / Einstein Track");
  const [query, setQuery] = useState("");
  const [programId, setProgramId] = useState("cs-foundation");
  const [courseIndex, setCourseIndex] = useState(0);
  const [mode, setMode] = useState<"main" | "clip">("main");
  const [page, setPage] = useState(0);
  const [focus, setFocus] = useState(0);
  const [pane, setPane] = useState<Pane>("path");
  const progress = useProgress();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs.filter((program) => {
      if (school !== "All" && program.school !== school) return false;
      if (!q) return true;
      return (
        program.name.toLowerCase().includes(q) ||
        program.degree.toLowerCase().includes(q) ||
        program.courses.some(
          (course) =>
            course.code.toLowerCase().includes(q) || course.name.toLowerCase().includes(q),
        )
      );
    });
  }, [school, query]);

  const program = programs.find((item) => item.id === programId) ?? programs[0];
  const course = program.courses[courseIndex] ?? program.courses[0];

  const overall = useMemo(() => {
    let lectures = 0;
    let done = 0;
    for (const item of programs) {
      for (const row of item.courses) {
        const total = lectureCount(row.hours);
        lectures += total;
        done += Math.min(total, progress.count(row.code));
      }
    }
    return checkpoint(done, lectures);
  }, [progress]);

  function openProgram(next: Program) {
    setProgramId(next.id);
    setCourseIndex(0);
    setPage(0);
    setFocus(0);
    if (window.innerWidth < 1024) setPane("path");
  }

  function openCourse(index: number) {
    setCourseIndex(index);
    setPage(0);
    setFocus(0);
    setMode("main");
    if (window.innerWidth < 1024) setPane("theater");
  }

  function downloadBundle(current: Program) {
    const lines = [
      `MIT META ULTIMATE — problem-set bundle`,
      `${current.name} (${current.degree})`,
      `Generated in the browser. Educational preview — no credential is issued.`,
      ``,
    ];
    for (const row of current.courses) {
      const href = ocwHref(row.code, row.ocw);
      const lectures = lectureCount(row.hours);
      lines.push(`${row.code}  ${row.name}  —  ${row.hours}h  —  ${lectures} × 90 min`);
      lines.push(`Source: ${href}`);
      lines.push(`Problem sets live on that OpenCourseWare (or hospital) page, not as separate files here.`);
      lines.push(``);
    }
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${current.id}-pset-bundle.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid size-11 shrink-0 place-items-center bg-cardinal font-mono text-xs leading-tight font-semibold text-cream">
                MIT
                <br />
                META
              </div>
              <div>
                <h1 className="text-xl leading-none font-semibold tracking-tight sm:text-2xl">
                  MIT Meta Ultimate
                </h1>
                <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">
                  Masters · HST · Einstein track
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <Stat label="Programs" value={String(catalogStats.programs)} />
              <Stat label="Courses" value={String(catalogStats.courses)} />
              <Stat label="Catalog h" value={`${Math.round(catalogStats.hours / 100) * 100}`} hot />
            </div>
          </div>

          <div className="flex w-full flex-nowrap gap-2 overflow-x-auto pb-1">
            {SCHOOLS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSchool(item);
                  if (window.innerWidth < 1024) setPane("programs");
                }}
                className={
                  "min-h-11 shrink-0 border px-3 font-mono text-xs whitespace-nowrap " +
                  (school === item
                    ? "border-cardinal bg-cardinal text-cream"
                    : "border-line bg-surface text-muted")
                }
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="flex min-h-11 flex-1 items-center gap-2 border border-line bg-surface px-3">
              <Search className="size-4 shrink-0 text-faint" aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => {
                setQuery(event.target.value);
                if (window.innerWidth < 1024 && event.target.value.trim()) setPane("programs");
              }}
                placeholder="Search 18.01, HST.021, 8.962…"
                className="w-full bg-transparent font-mono text-sm text-fg outline-none placeholder:text-faint"
                aria-label="Search programs and course codes"
              />
            </label>
            <div className="flex min-h-11 min-w-40 items-center gap-3 border border-line bg-surface px-3">
              <div className="min-w-0 flex-1">
                <div className="font-mono text-xs tracking-widest text-faint uppercase">Checkpoint</div>
                <div className="mt-1 h-1.5 bg-line">
                  <div className="h-full bg-cardinal" style={{ width: `${overall.pct}%` }} />
                </div>
              </div>
              <div className="font-mono text-sm text-fg">{overall.pct}%</div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-1 px-4 pt-3 lg:hidden">
        {(
          [
            ["programs", "Programs"],
            ["path", "Path"],
            ["theater", "Theater"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setPane(id)}
            className={
              "min-h-11 flex-1 border font-mono text-xs tracking-wide uppercase " +
              (pane === id ? "border-cardinal bg-cardinal text-cream" : "border-line bg-surface text-muted")
            }
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 lg:grid-cols-12">
        <aside className={`${pane === "programs" ? "block" : "hidden"} lg:col-span-3 lg:block`}>
          <div className="mb-2 font-mono text-xs tracking-widest text-muted uppercase">
            Programs {filtered.length} / {programs.length}
          </div>
          <div className="flex max-h-[70vh] flex-col gap-2 overflow-auto lg:sticky lg:top-44 lg:max-h-[calc(100vh-12rem)]">
            {filtered.length === 0 && (
              <p className="border border-dashed border-line p-4 text-sm text-muted">
                Nothing matches that code. Try 18.06, HST, or Einstein.
              </p>
            )}
            {filtered.map((item) => (
              <ProgramCard
                key={item.id}
                program={item}
                active={item.id === program.id}
                progress={averageProgress(item, progress.count)}
                onOpen={() => openProgram(item)}
              />
            ))}
          </div>
        </aside>

        <main className={`${pane === "path" ? "block" : "hidden"} lg:col-span-5 lg:block`}>
          <section className="border border-line bg-surface p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-cardinal px-2 py-1 font-mono text-xs text-cream">{program.school}</span>
                  <span className="border border-line px-2 py-1 font-mono text-xs text-muted">
                    {program.degree}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl leading-tight font-semibold">{program.name}</h2>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">{program.desc}</p>
                <p className="mt-2 font-mono text-xs text-faint">
                  {program.duration} · {programHours(program)}h · {program.courses.length} courses ·{" "}
                  {program.courses.reduce((n, row) => n + lectureCount(row.hours), 0)} lectures
                </p>
              </div>
              <button
                type="button"
                onClick={() => downloadBundle(program)}
                className="inline-flex min-h-11 items-center gap-2 bg-cream px-3 font-mono text-xs font-semibold text-bg"
              >
                <Download className="size-4" aria-hidden="true" />
                PSet bundle
              </button>
            </div>
            <div className="mt-5">
              <div className="mb-2 font-mono text-xs tracking-widest text-muted uppercase">
                Semester roadmap
              </div>
              <Roadmap program={program} />
            </div>
          </section>

          <section className="mt-4 border border-line">
            <div className="flex items-center justify-between border-b border-line bg-surface px-3 py-2">
              <div className="font-mono text-xs tracking-widest text-muted uppercase">
                {program.courses.length} courses · 90 min blocks
              </div>
              <div className="font-mono text-xs text-faint">Tap a row</div>
            </div>
            <ul>
              {program.courses.map((row, index) => {
                const lectures = lectureCount(row.hours);
                const state = checkpoint(Math.min(lectures, progress.count(row.code)), lectures);
                const active = index === courseIndex;
                const href = ocwHref(row.code, row.ocw);
                return (
                  <li key={`${row.code}-${index}`} className={active ? "bg-cardinal text-cream" : "bg-inset"}>
                    <div className="border-b border-line/80 p-3">
                      <button type="button" onClick={() => openCourse(index)} className="w-full text-left">
                        <div className="flex items-start gap-3">
                          <span
                            className={
                              "grid size-8 shrink-0 place-items-center border font-mono text-xs " +
                              (active ? "border-cream/40" : "border-line text-muted")
                            }
                          >
                            {index + 1}
                          </span>
                          <span className="min-w-0">
                            <span className="block font-mono text-sm font-semibold">{row.code}</span>
                            <span className="block text-sm leading-snug font-medium">{row.name}</span>
                          </span>
                        </div>
                      </button>
                      <div className={"mt-2 flex flex-wrap gap-2 font-mono text-xs " + (active ? "text-cream/80" : "text-muted")}>
                        <span>
                          {row.hours}h · {lectures} lec
                        </span>
                        {row.prereq ? <span>Prereq {row.prereq}</span> : null}
                        {row.note ? (
                          <span className={active ? "bg-cream/15 px-1" : "bg-cardinal/15 px-1 text-cardinal"}>
                            {row.note}
                          </span>
                        ) : null}
                        {hasFilm(row) ? <span>Open film</span> : <span>Self-report</span>}
                      </div>
                      <div className="mt-2 h-1.5 bg-bg/40">
                        <div className={"h-full " + (active ? "bg-cream" : "bg-cardinal")} style={{ width: `${state.pct}%` }} />
                      </div>
                      <div className={"mt-1 font-mono text-xs " + (active ? "text-cream/80" : "text-faint")}>
                        {state.label} · {state.done}/{state.lectures}
                        {state.spot ? " · You are at certificate-equivalent spot" : ""}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const marked = progress.markNext(row.code, lectures);
                            openCourse(index);
                            if (marked >= 0) {
                              setFocus(marked);
                              setPage(Math.floor(marked / PAGE));
                            }
                          }}
                          className={
                            "min-h-11 border px-3 font-mono text-xs " +
                            (active ? "border-cream/40 text-cream" : "border-line text-fg")
                          }
                        >
                          + lecture
                        </button>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            "inline-flex min-h-11 items-center gap-1 px-3 font-mono text-xs " +
                            (active ? "bg-cream text-bg" : "bg-cream text-bg")
                          }
                        >
                          Source
                          <ExternalLink className="size-3" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <p className="mt-4 border border-dashed border-line p-3 font-mono text-xs leading-relaxed text-muted">
            <span className="text-fg">Checkpoint, not a certificate.</span> 25% audit equivalent, 50% verified
            equivalent, 75% MicroMasters equivalent, 100% certificate-equivalent level. At 100% you are at the
            certificate-equivalent spot. Nothing here issues a degree, credit, or MIT/Harvard credential. Progress
            stays on this device.
            <button type="button" onClick={progress.clear} className="mt-2 flex min-h-11 items-center gap-2 text-faint">
              <RotateCcw className="size-3" aria-hidden="true" />
              Clear saved progress
            </button>
          </p>
        </main>

        <aside className={`${pane === "theater" ? "block" : "hidden"} lg:col-span-4 lg:block`}>
          <Theater
            course={course}
            lectureIndex={focus}
            mode={mode}
            onMode={setMode}
            page={page}
            onPage={setPage}
            onFocus={setFocus}
            progress={progress}
          />
          <div className="mt-3 grid grid-cols-3 gap-2 font-mono">
            <Stat label="Programs" value={String(catalogStats.programs)} />
            <Stat label="Courses" value={String(catalogStats.courses)} />
            <Stat label="Catalog h" value={`${Math.round(catalogStats.hours / 1000)}k`} hot />
          </div>
        </aside>
      </div>

      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-xs text-faint">
        <span>OpenCourseWare study desk · HST · EECS · Einstein track</span>
        <span>Educational preview. No credential is issued.</span>
      </footer>
    </div>
  );
}

function averageProgress(program: Program, count: (code: string) => number) {
  if (!program.courses.length) return 0;
  const total = program.courses.reduce((sum, course) => {
    const lectures = lectureCount(course.hours);
    return sum + checkpoint(Math.min(lectures, count(course.code)), lectures).pct;
  }, 0);
  return Math.round(total / program.courses.length);
}

function ProgramCard({
  program,
  active,
  progress,
  onOpen,
}: {
  program: Program;
  active: boolean;
  progress: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={
        "w-full border p-3 text-left " +
        (active ? "border-cardinal bg-cardinal text-cream" : "border-line bg-surface text-fg")
      }
    >
      <div className="flex items-start justify-between gap-2">
        <span className={"border px-1.5 py-0.5 font-mono text-xs " + (active ? "border-cream/30" : "border-line text-muted")}>
          {program.school}
        </span>
        <span className={"font-mono text-xs " + (active ? "text-cream/80" : "text-faint")}>
          {programHours(program)}h · {program.duration}
        </span>
      </div>
      <div className="mt-2 text-sm leading-snug font-semibold">{program.name}</div>
      <div className={"mt-1 font-mono text-xs " + (active ? "text-cream/75" : "text-muted")}>{program.degree}</div>
      <div className="mt-2 h-1 bg-bg/30">
        <div className={"h-full " + (active ? "bg-cream" : "bg-cardinal")} style={{ width: `${progress}%` }} />
      </div>
    </button>
  );
}

function Stat({ label, value, hot = false }: { label: string; value: string; hot?: boolean }) {
  return (
    <div className={"min-w-0 px-2 py-2 " + (hot ? "bg-cardinal text-cream" : "border border-line bg-surface")}>
      <div className={"text-lg leading-none font-semibold " + (hot ? "text-cream" : "text-fg")}>{value}</div>
      <div className={"mt-1 font-mono text-xs tracking-widest uppercase " + (hot ? "text-cream/80" : "text-faint")}>
        {label}
      </div>
    </div>
  );
}

function Theater({
  course,
  lectureIndex,
  mode,
  onMode,
  page,
  onPage,
  onFocus,
  progress,
}: {
  course: Course;
  lectureIndex: number;
  mode: "main" | "clip";
  onMode: (mode: "main" | "clip") => void;
  page: number;
  onPage: (page: number) => void;
  onFocus: (index: number) => void;
  progress: ReturnType<typeof useProgress>;
}) {
  const lectures = lectureCount(course.hours);
  const pages = Math.max(1, Math.ceil(lectures / PAGE));
  const safePage = Math.min(page, pages - 1);
  const start = safePage * PAGE;
  const end = Math.min(lectures, start + PAGE);
  const state = checkpoint(Math.min(lectures, progress.count(course.code)), lectures);
  const filmed = hasFilm(course);
  const videoId = filmed ? filmFor(course, lectureIndex, mode) : null;
  const href = ocwHref(course.code, course.ocw);
  const kind = diagramKind(course);

  return (
    <div className="border border-line bg-surface lg:sticky lg:top-44">
      <div className="grid grid-cols-2 border-b border-line">
        <button
          type="button"
          onClick={() => onMode("main")}
          className={
            "min-h-11 font-mono text-xs tracking-wide uppercase " +
            (mode === "main" ? "bg-cardinal text-cream" : "bg-inset text-muted")
          }
        >
          Lecture
        </button>
        <button
          type="button"
          onClick={() => onMode("clip")}
          className={
            "min-h-11 font-mono text-xs tracking-wide uppercase " +
            (mode === "clip" ? "bg-cardinal text-cream" : "bg-inset text-muted")
          }
        >
          8 min clip
        </button>
      </div>
      <div className="relative aspect-video bg-inset">
        {videoId ? (
          <iframe
            key={`${videoId}-${mode}-${course.code}`}
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title={mode === "main" ? `${course.code} related lecture` : `${course.code} explainer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <Library className="size-6 text-cardinal" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted">
              No public lecture film for this clinical or thesis block. Mark sessions yourself, then open the
              source page.
            </p>
          </div>
        )}
      </div>
      <div className="space-y-3 p-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-xs tracking-widest text-faint uppercase">Now studying</div>
            <div className="mt-1 text-sm font-semibold">
              {course.code} — {course.name}
            </div>
          </div>
          <div className="shrink-0 border border-line px-2 py-1 font-mono text-xs text-muted">{course.hours}h</div>
        </div>
        <p className="font-mono text-xs leading-relaxed text-faint">
          {filmed
            ? "Related open recording (MIT OCW or 3Blue1Brown), not a guarantee this exact catalog row was filmed. Lecture chips are 90-minute checkpoint blocks."
            : "Self-reported clinical time. 90-minute blocks so a residency still has a checkpoint, not a fake video."}
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 bg-cream px-3 font-mono text-xs font-semibold text-bg"
          >
            <BookOpen className="size-3.5" aria-hidden="true" />
            Source page
          </a>
          {videoId ? (
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 border border-line px-3 font-mono text-xs text-fg"
            >
              YouTube
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          ) : null}
        </div>
        {mode === "clip" && kind !== "none" ? <SubjectDiagram kind={kind} code={course.code} /> : null}
        <div className="grid grid-cols-2 gap-2">
          <div className="border border-line bg-inset p-3">
            <div className="font-mono text-xs tracking-widest text-faint uppercase">Progress</div>
            <div className="mt-2 flex items-center gap-3">
              <div
                className="grid size-14 place-items-center rounded-full"
                style={{
                  background: `conic-gradient(var(--color-cardinal) ${state.pct * 3.6}deg, var(--color-line) 0deg)`,
                }}
              >
                <div className="grid size-10 place-items-center rounded-full bg-inset font-mono text-xs font-semibold">
                  {state.pct}%
                </div>
              </div>
              <div className="font-mono text-xs leading-snug">
                <div className="font-semibold text-fg">{state.label}</div>
                <div className="mt-1 text-muted">
                  {state.done}/{state.lectures}
                </div>
                {state.spot ? (
                  <div className="mt-1 font-semibold text-cardinal">You are at certificate-equivalent spot</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="border border-line bg-inset p-3">
            <div className="font-mono text-xs tracking-widest text-faint uppercase">Source links</div>
            <a href={href} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-fg underline">
              Problem sets for {course.code}
            </a>
            <p className="mt-2 font-mono text-xs leading-relaxed text-faint">
              Assignments stay on the publisher page. This desk only tracks that you opened the block.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="font-mono text-xs tracking-widest text-muted uppercase">
            Lectures {start + 1}–{end} of {lectures}
          </div>
          <button
            type="button"
            onClick={() => progress.markAll(course.code, lectures)}
            className="min-h-11 border border-line px-3 font-mono text-xs"
          >
            Mark all
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {Array.from({ length: end - start }, (_, offset) => {
            const index = start + offset;
            const on = progress.has(course.code, index);
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                    progress.toggle(course.code, index);
                    onFocus(index);
                    onMode("main");
                  }}
                className={
                  "min-h-11 border px-2 py-2 text-left font-mono text-xs " +
                  (on ? "border-cardinal bg-cardinal text-cream" : "border-line bg-inset text-muted")
                }
              >
                <span className="flex items-center justify-between">
                  <span>Lec {index + 1}</span>
                  {on ? <Check className="size-3.5" aria-hidden="true" /> : <Circle className="size-3.5" aria-hidden="true" />}
                </span>
                <span className="mt-1 block text-xs opacity-70">90 min</span>
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            disabled={safePage === 0}
            onClick={() => onPage(safePage - 1)}
            className="inline-flex min-h-11 items-center gap-1 border border-line px-3 font-mono text-xs disabled:opacity-40"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            Prev
          </button>
          <span className="font-mono text-xs text-faint">
            Page {safePage + 1} / {pages}
          </span>
          <button
            type="button"
            disabled={safePage >= pages - 1}
            onClick={() => onPage(safePage + 1)}
            className="inline-flex min-h-11 items-center gap-1 border border-line px-3 font-mono text-xs disabled:opacity-40"
          >
            Next
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => progress.markRange(course.code, start, end)}
          className="min-h-11 w-full border border-line font-mono text-xs"
        >
          Mark this page done
        </button>
      </div>
    </div>
  );
}
