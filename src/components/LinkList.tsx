"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

// 두 값 중 큰 쪽을 남긴다: 늦게 도착한 응답이 이미 올라간 숫자를 되돌리지 않게
function mergeMax(prev: Counts, next: Counts): Counts {
  const merged = { ...prev };
  for (const [id, count] of Object.entries(next)) {
    merged[id] = Math.max(merged[id] ?? 0, count);
  }
  return merged;
}

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Counts>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { signal: controller.signal, cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { counts: Counts }) => {
        setCounts((prev) => mergeMax(prev, data.counts));
        setIsLoaded(true);
      })
      .catch((error) => {
        if (!controller.signal.aborted) console.error("클릭 수를 불러오지 못했습니다.", error);
      });
    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1 하고, 서버가 돌려준 실제 값으로 맞춘다
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { count: number }) => setCounts((prev) => mergeMax(prev, { [id]: data.count })))
      .catch((error) => console.error("클릭 수를 저장하지 못했습니다.", error));
  }

  return (
    <ul className="mt-10 flex flex-col gap-3.5 sm:gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            clickCount={counts[link.id] ?? 0}
            isCountLoaded={isLoaded}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
