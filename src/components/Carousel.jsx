import * as React from "react";

const AUTO_INTERVAL = 4000; // ms

export function Carousel({ children, className = "", desktopClass = "" }) {
  const [active, setActive] = React.useState(0);
  const trackRef = React.useRef(null);
  const timerRef = React.useRef(null);
  const items = React.Children.toArray(children);
  const count = items.length;

  const goTo = React.useCallback((i) => {
    const idx = (i + count) % count;
    trackRef.current?.scrollTo({ left: idx * trackRef.current.offsetWidth, behavior: "smooth" });
    setActive(idx);
  }, [count]);

  // Auto-advance
  const resetTimer = React.useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % count;
        trackRef.current?.scrollTo({ left: next * trackRef.current.offsetWidth, behavior: "smooth" });
        return next;
      });
    }, AUTO_INTERVAL);
  }, [count]);

  React.useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  // Sync dot with manual scroll
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      setActive(idx);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const handleArrow = (dir) => {
    goTo(active + dir);
    resetTimer(); // reset auto-play on manual nav
  };

  return (
    <div className={`carousel-root ${className}`}>
      {/* Mobile track */}
      <div className="carousel-track-wrap">
        <div ref={trackRef} className="carousel-track">
          {items.map((child, i) => (
            <div key={i} className="carousel-slide">{child}</div>
          ))}
        </div>

        {/* Arrows */}
        {count > 1 && (
          <>
            <button
              className="carousel-arrow carousel-arrow-prev"
              onClick={() => handleArrow(-1)}
              aria-label="前へ"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="carousel-arrow carousel-arrow-next"
              onClick={() => handleArrow(1)}
              aria-label="次へ"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Desktop fallback */}
      <div className={`carousel-desktop ${desktopClass}`}>{children}</div>

      {/* Dots */}
      {count > 1 && (
        <div className="carousel-dots" aria-hidden="true">
          {items.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === active ? " active" : ""}`}
              onClick={() => { goTo(i); resetTimer(); }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
