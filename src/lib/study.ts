export type Checkpoint = {
  pct: number;
  done: number;
  lectures: number;
  label: string;
  spot: boolean;
};

/** MIT lecture block is 90 minutes. Clinical blocks stay on the same scale. */
export function lectureCount(hours: number) {
  return Math.max(1, Math.ceil(hours / 1.5));
}

export function checkpoint(done: number, lectures: number): Checkpoint {
  const pct = lectures ? Math.min(100, Math.round((done / lectures) * 100)) : 0;
  let label = "Not started";
  if (pct >= 100) label = "Certificate-equivalent level";
  else if (pct >= 75) label = "MicroMasters equivalent";
  else if (pct >= 50) label = "Verified equivalent";
  else if (pct >= 25) label = "Audit equivalent";
  return { pct, done, lectures, label, spot: pct >= 100 };
}

export function ocwHref(code: string, fallback: string) {
  if (fallback.includes("massgeneral.org") || fallback.includes("brighamandwomens.org")) {
    return fallback;
  }
  const query = code.split(/[/+]/)[0]?.trim() || code;
  return `https://ocw.mit.edu/search/?q=${encodeURIComponent(query)}`;
}
