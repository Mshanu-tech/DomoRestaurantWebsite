import { useEffect, useState } from "react";

// Signature element: a thin gold progress line pinned to the very top edge
// of the viewport, tracking how far through the tasting menu of the page
// the guest has travelled. Zero horizontal footprint — it can never
// collide with page content the way a side rail can.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? Math.min(1, scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gold origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
