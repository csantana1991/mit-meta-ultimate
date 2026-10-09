import { useCallback, useEffect, useState } from "react";

const KEY = "mit-meta-ultimate-progress";

export type ProgressMap = Record<string, number[]>;

export function useProgress() {
  const [done, setDone] = useState<ProgressMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ProgressMap;
        if (parsed && typeof parsed === "object") setDone(parsed);
      }
    } catch {
      /* ignore corrupt local progress */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(done));
  }, [done, ready]);

  const count = useCallback((code: string) => done[code]?.length ?? 0, [done]);

  const has = useCallback(
    (code: string, index: number) => (done[code] ?? []).includes(index),
    [done],
  );

  const toggle = useCallback((code: string, index: number) => {
    setDone((prev) => {
      const cur = new Set(prev[code] ?? []);
      if (cur.has(index)) cur.delete(index);
      else cur.add(index);
      return { ...prev, [code]: [...cur].sort((a, b) => a - b) };
    });
  }, []);

  const markNext = useCallback((code: string, total: number) => {
    let marked = -1;
    setDone((prev) => {
      const cur = new Set(prev[code] ?? []);
      for (let i = 0; i < total; i++) {
        if (!cur.has(i)) {
          cur.add(i);
          marked = i;
          break;
        }
      }
      return { ...prev, [code]: [...cur].sort((a, b) => a - b) };
    });
    return marked;
  }, []);

  const markAll = useCallback((code: string, total: number) => {
    setDone((prev) => ({
      ...prev,
      [code]: Array.from({ length: total }, (_, i) => i),
    }));
  }, []);

  const markRange = useCallback((code: string, start: number, end: number) => {
    setDone((prev) => {
      const cur = new Set(prev[code] ?? []);
      for (let i = start; i < end; i++) cur.add(i);
      return { ...prev, [code]: [...cur].sort((a, b) => a - b) };
    });
  }, []);

  const clear = useCallback(() => setDone({}), []);

  return { done, count, has, toggle, markNext, markAll, markRange, clear };
}
