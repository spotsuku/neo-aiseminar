import * as React from "react";

/**
 * Mobile-only scroll-snap carousel.
 * - Mobile (<768px): horizontal snap with dot indicators
 * - Desktop (≥768px): renders children inside a plain wrapper (no carousel)
 */
export function Carousel({ children, className = "", desktopClass = "" }) {
  const [active, setActive] = React.useState(0);
  const trackRef = React.useRef(null);
  const items = React.Children.toArray(children);

  // Sync dot indicator with scroll position
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

  const goTo = (i) => {
    trackRef.current?.scrollTo({
      left: i * trackRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={`carousel-root ${className}`}>
      {/* Mobile track */}
      <div ref={trackRef} className="carousel-track">
        {items.map((child, i) => (
          <div key={i} className="carousel-slide">
            {child}
          </div>
        ))}
      </div>

      {/* Desktop fallback — same children, shown via CSS at ≥768px */}
      <div className={`carousel-desktop ${desktopClass}`}>
        {children}
      </div>

      {/* Dot indicators (mobile only) */}
      {items.length > 1 && (
        <div className="carousel-dots" aria-hidden="true">
          {items.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === active ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
