import * as React from "react";

/**
 * Shared primitives — small set used by every section.
 * Keep this file boring on purpose: each export is a thin wrapper
 * over Tailwind utilities so sections read like content, not chrome.
 */

export function Section({ id, label, tone = "light", className = "", children }) {
  // tone: "light" | "dark" | "soft"
  const toneClasses = {
    light: "bg-paper text-text-primary",
    dark: "bg-ink text-text-onink",
    soft: "bg-paper-soft text-text-primary",
  }[tone];
  return (
    <section
      id={id}
      data-screen-label={label}
      data-tone={tone}
      className={`relative ${toneClasses} py-16 md:py-[clamp(64px,9vh,110px)] ${className}`}
    >
      <div className="mx-auto w-full max-w-wrap px-6 md:px-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, onDark = false }) {
  return (
    <p
      className={`relative pl-[26px] font-en uppercase tracking-[0.32em] text-[11px] font-medium ${
        onDark ? "text-text-onink-mute" : "text-text-secondary"
      } mb-3 md:mb-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[18px] before:h-[1px] before:bg-vermilion`}
    >
      {children}
    </p>
  );
}

export function Display({ size = "lg", children, className = "" }) {
  const sizeClasses = {
    xl: "text-[clamp(30px,8vw,44px)] md:text-[clamp(44px,6vw,84px)] leading-[1.25]",
    lg: "text-[clamp(26px,7vw,38px)] md:text-[clamp(36px,4.6vw,62px)] leading-[1.3]",
    md: "text-[clamp(22px,5.8vw,32px)] md:text-[clamp(28px,3vw,44px)] leading-[1.35]",
  }[size];
  // text-balance evens out line lengths; break-keep stops JP wrapping
  // mid-phrase so we don't get one-character orphan lines.
  return (
    <h2
      className={`font-mincho font-bold tracking-tight text-balance break-keep ${sizeClasses} ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({ onDark = false, children, className = "" }) {
  return (
    <p
      className={`font-jp leading-[1.95] text-[14px] md:text-[clamp(15px,1.05vw,17px)] ${
        onDark ? "text-text-onink-mute" : "text-text-secondary"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function Under({ children, className = "" }) {
  return (
    <span
      className={`bg-gradient-to-t from-vermilion/20 from-[35%] to-transparent to-[35%] px-[2px] ${className}`}
    >
      {children}
    </span>
  );
}

export function Connector({ num, en, jp, onDark = false }) {
  return (
    <div
      className={`mb-8 md:mb-12 pb-4 md:pb-5 border-b ${
        onDark ? "border-white/15" : "border-ink/10"
      }`}
    >
      <div
        className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 font-en uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[11px] sm:text-xs ${
          onDark ? "text-text-onink-mute" : "text-text-secondary"
        }`}
      >
        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <span
            className={`font-en-serif italic normal-case tracking-normal text-[22px] sm:text-[28px] font-medium shrink-0 ${
              onDark ? "text-text-onink" : "text-ink"
            }`}
          >
            {num}
          </span>
          <span className="truncate">{en}</span>
        </div>
        <span
          className={`hidden sm:block flex-1 min-w-6 h-[1px] ${
            onDark ? "bg-white/15" : "bg-ink/10"
          }`}
        />
        {jp && (
          <span
            className={`normal-case tracking-wider font-jp ${
              onDark ? "text-text-onink" : "text-ink"
            }`}
          >
            {jp}
          </span>
        )}
      </div>
    </div>
  );
}

// Buttons — primary (filled vermilion) / ghost (outlined) / ink (filled ink).
// Renders as <a> by default so it works for hash links and forms alike.
export function Btn({
  href = "#",
  variant = "primary",
  onDark = false,
  className = "",
  children,
}) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-6 md:px-7 py-3.5 md:py-4 font-medium text-[14px] md:text-[15px] transition-colors";
  const variants = {
    primary: "bg-vermilion hover:bg-vermilion-dark text-white",
    ghost: onDark
      ? "border border-text-onink/80 text-text-onink hover:bg-white/10"
      : "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
    ink: "bg-ink hover:bg-ink-soft text-paper",
  }[variant];
  return (
    <a href={href} className={`${base} ${variants} ${className}`}>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
