import * as React from "react";
import { content } from "../content.js";

/**
 * Mobile-only sticky CTA bar — fixed at bottom.
 * Appears after user scrolls past the hero (100vh).
 * Hides when the final CTA section is in view.
 */
export function StickyCTA() {
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      // Hide when final CTA section is near
      const finalCta = document.getElementById("cta");
      const nearEnd = finalCta
        ? finalCta.getBoundingClientRect().top < window.innerHeight * 1.2
        : false;
      setVisible(scrolled && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div className={`sticky-cta${visible ? " sticky-cta--show" : ""}`}>
      <a
        href={content.links.consultation}
        className="sticky-cta__btn"
      >
        無料相談を予約する
        <span aria-hidden>→</span>
      </a>
      <button
        className="sticky-cta__close"
        onClick={() => setDismissed(true)}
        aria-label="閉じる"
      >
        ✕
      </button>
    </div>
  );
}
