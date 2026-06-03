import * as React from "react";
import * as ReactDOM from "react-dom";

/** Full-screen image lightbox — renders into document.body via portal */
export function Lightbox({ src, alt, onClose }) {
  // Close on Escape
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="lb-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button className="lb-close" onClick={onClose} aria-label="閉じる">✕</button>
      <div className="lb-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="lb-img" />
      </div>
    </div>,
    document.body
  );
}

/** Wrapper: makes any child clickable to open the lightbox */
export function LightboxTrigger({ src, alt, children, className = "" }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div
        className={`lb-trigger ${className}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`${alt}を拡大表示`}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen(true); }}
      >
        {children}
        <span className="lb-hint" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
          </svg>
          タップで拡大
        </span>
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
