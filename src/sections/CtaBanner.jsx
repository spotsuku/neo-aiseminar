import * as React from "react";
import { content } from "../content.js";

/**
 * Compact inline CTA strip — placed between content sections.
 * Props:
 *   eyebrow  – small label above the headline
 *   headline – main text
 *   sub      – optional subtext
 */
export function CtaBanner({ eyebrow, headline, sub }) {
  return (
    <div className="mx-auto max-w-wrap px-5 md:px-10 py-8 md:py-10">
      <div className="bg-ink/5 border border-ink/10 rounded-sm px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-10">
        <div className="flex flex-col gap-1.5 min-w-0">
          {eyebrow && (
            <span className="font-en uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-vermilion font-bold">
              {eyebrow}
            </span>
          )}
          <p className="font-mincho font-bold text-ink text-[16px] md:text-[20px] leading-[1.5]">
            {headline}
          </p>
          {sub && (
            <p className="font-jp text-text-secondary text-[12px] md:text-[13px] leading-[1.85]">
              {sub}
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={content.links.consultation}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-vermilion hover:bg-vermilion-dark text-white font-jp font-medium text-[13px] md:text-[14px] transition-colors whitespace-nowrap"
          >
            無料相談を予約する →
          </a>
          <a
            href={content.links.document}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-ink/30 hover:bg-ink/5 text-ink font-jp font-medium text-[13px] md:text-[14px] transition-colors whitespace-nowrap"
          >
            資料請求 →
          </a>
        </div>
      </div>
    </div>
  );
}
