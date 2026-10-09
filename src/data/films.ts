import type { Course } from "@/data/catalog";

/** Public recordings only. Verified open MIT OCW and 3Blue1Brown films. */
const CALC = [
  "7K1sB05pE0A",
  "ryLdyDrBfvI",
  "kCPVBl953eY",
  "4sTKcvYMNxk",
  "5q_3FDOkVRQ",
  "9v25gg2qJYE",
  "BSAA0akmPEU",
  "eRCN3daFCmU",
];

type Pack = { ids: string[]; explain: string; kind: DiagramKind; filmed: boolean };

export type DiagramKind = "calculus" | "mechanics" | "spacetime" | "wave" | "algo" | "none";

function packFor(course: Course): Pack {
  const code = course.code;
  if (code.startsWith("18.01")) {
    return { ids: CALC, explain: "WUvTyaaNkzM", kind: "calculus", filmed: true };
  }
  if (code.startsWith("18.02")) {
    return { ids: ["PxCxlsl_YwY"], explain: "fNk_zzaMoSs", kind: "calculus", filmed: true };
  }
  if (code.startsWith("18.03")) {
    return { ids: ["XDhJ8lVGbl8"], explain: "WUvTyaaNkzM", kind: "calculus", filmed: true };
  }
  if (code.startsWith("18.")) {
    return { ids: ["ZK3O402wf1c", "PxCxlsl_YwY"], explain: "fNk_zzaMoSs", kind: "calculus", filmed: true };
  }
  if (code.startsWith("8.04") || code.startsWith("8.05") || code.includes("Quantum")) {
    return { ids: ["lZ3bPUKo5zc"], explain: "spUNpyF58BY", kind: "wave", filmed: true };
  }
  if (code.startsWith("8.03")) {
    return { ids: ["YbFgNsM6r44"], explain: "r6sGWTCMz2k", kind: "wave", filmed: true };
  }
  if (code.includes("8.033") || code.includes("8.20") || code.includes("8.962") || code.startsWith("8.")) {
    return { ids: ["lZ3bPUKo5zc"], explain: "spUNpyF58BY", kind: "spacetime", filmed: true };
  }
  if (code.startsWith("6.39") || code.startsWith("6.38") || /machine|deep learning|artificial/i.test(course.name)) {
    return { ids: ["h0e2HAPTGF4"], explain: "aircAruvnKk", kind: "algo", filmed: true };
  }
  if (code.startsWith("6.12") || /discrete|algorithm/i.test(course.name)) {
    return { ids: ["L3LMbpZIKhQ", "HtSuA80QTyo", "sbpCTjmw85g"], explain: "fNk_zzaMoSs", kind: "algo", filmed: true };
  }
  if (code.startsWith("6.")) {
    return { ids: ["k6U-i4gXkLM", "3S4cNfl0YF0", "HtSuA80QTyo"], explain: "aircAruvnKk", kind: "algo", filmed: true };
  }
  if (code.startsWith("14.") || code.startsWith("15.")) {
    return { ids: ["Vss3nofHpZI"], explain: "fNk_zzaMoSs", kind: "algo", filmed: true };
  }
  if (code.startsWith("5.") || code.startsWith("10.")) {
    return { ids: ["kLqduWF6GXE"], explain: "spUNpyF58BY", kind: "mechanics", filmed: true };
  }
  if (code.startsWith("2.") || code.startsWith("1.") || code.startsWith("16.") || code.startsWith("3.")) {
    return { ids: ["YbFgNsM6r44", "PxCxlsl_YwY"], explain: "WUvTyaaNkzM", kind: "mechanics", filmed: true };
  }
  return { ids: [], explain: "", kind: "none", filmed: false };
}

export function filmFor(course: Course, lectureIndex: number, mode: "main" | "clip") {
  const pack = packFor(course);
  if (!pack.filmed) return null;
  if (mode === "clip") return pack.explain;
  return pack.ids[lectureIndex % pack.ids.length] ?? pack.ids[0];
}

export function diagramKind(course: Course): DiagramKind {
  return packFor(course).kind;
}

export function hasFilm(course: Course) {
  return packFor(course).filmed;
}
