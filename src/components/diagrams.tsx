import type { DiagramKind } from "@/data/films";

export function SubjectDiagram({ kind, code }: { kind: DiagramKind; code: string }) {
  if (kind === "none") return null;
  return (
    <figure className="border border-line bg-inset p-3">
      <figcaption className="mb-2 font-mono text-xs tracking-widest text-muted uppercase">
        {kind === "calculus" && "Derivative sketch"}
        {kind === "mechanics" && "Free-body sketch"}
        {kind === "spacetime" && "Light cone"}
        {kind === "wave" && "Wavefunction"}
        {kind === "algo" && "Algorithm core"}
        <span className="ml-2 normal-case tracking-normal text-faint">{code}</span>
      </figcaption>
      <svg viewBox="0 0 200 120" className="h-40 w-full" role="img" aria-label={`${kind} diagram for ${code}`}>
        <rect width="200" height="120" className="fill-inset" />
        {kind === "calculus" && (
          <>
            <path d="M10 100 H190 M100 10 V110" className="stroke-line" strokeWidth="1" />
            <path d="M20 90 Q50 20 100 60 T180 30" className="stroke-cardinal" fill="none" strokeWidth="2" />
            <path d="M20 90 Q50 20 100 60 T180 30 L180 100 L20 100 Z" className="fill-cardinal opacity-20" />
            <circle cx="100" cy="60" r="3" className="fill-cardinal" />
            <text x="12" y="18" className="fill-muted font-mono" fontSize="8">
              f′(x)
            </text>
          </>
        )}
        {kind === "mechanics" && (
          <>
            <line x1="20" y1="100" x2="180" y2="100" className="stroke-line" />
            <rect x="78" y="42" width="44" height="18" className="fill-surface stroke-cardinal" />
            <line x1="100" y1="60" x2="100" y2="100" className="stroke-cardinal" strokeDasharray="4 3" />
            <line x1="78" y1="50" x2="36" y2="28" className="stroke-muted" />
            <text x="14" y="22" className="fill-muted font-mono" fontSize="8">
              F = ma
            </text>
          </>
        )}
        {kind === "spacetime" && (
          <>
            <path d="M100 12 L28 108 L172 108 Z" fill="none" className="stroke-line" />
            <path d="M100 12 L58 108 M100 12 L142 108" className="stroke-cardinal" strokeWidth="1.4" />
            <ellipse cx="100" cy="86" rx="42" ry="8" className="fill-cardinal opacity-30" />
            <text x="62" y="22" className="fill-cardinal font-mono" fontSize="8">
              light cone
            </text>
          </>
        )}
        {kind === "wave" && (
          <>
            <path
              d="M8 60 Q28 12 48 60 T88 60 T128 60 T168 60 T192 60"
              className="stroke-cardinal"
              fill="none"
              strokeWidth="1.6"
            />
            <path
              d="M8 60 Q28 108 48 60 T88 60 T128 60 T168 60"
              className="stroke-faint"
              fill="none"
            />
            <text x="12" y="18" className="fill-muted font-mono" fontSize="8">
              ψ(x)
            </text>
          </>
        )}
        {kind === "algo" && (
          <>
            <rect x="18" y="22" width="58" height="18" className="fill-surface stroke-line" />
            <rect x="124" y="22" width="58" height="18" className="fill-surface stroke-line" />
            <rect x="70" y="74" width="60" height="18" className="fill-cardinal" />
            <line x1="47" y1="40" x2="100" y2="74" className="stroke-line" />
            <line x1="153" y1="40" x2="100" y2="74" className="stroke-line" />
            <text x="28" y="34" className="fill-muted font-mono" fontSize="7">
              O(n log n)
            </text>
            <text x="140" y="34" className="fill-muted font-mono" fontSize="7">
              hash
            </text>
            <text x="82" y="86" className="fill-cream font-mono" fontSize="7">
              core
            </text>
          </>
        )}
      </svg>
    </figure>
  );
}
