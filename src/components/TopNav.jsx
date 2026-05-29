import * as React from "react";

export function TopNav({ overDark = false }) {
  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-3 md:py-4 transition-colors ${
        overDark
          ? "bg-ink/70 backdrop-blur text-text-onink"
          : "bg-paper/80 backdrop-blur text-text-primary border-b border-ink/5"
      }`}
    >
      <div className="flex items-center gap-2 md:gap-3 font-mincho font-bold text-[14px] md:text-[15px]">
        <span
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-en text-[11px] font-bold ${
            overDark ? "bg-vermilion text-white" : "bg-ink text-paper"
          }`}
        >
          AI
        </span>
        <span className="hidden sm:inline">リスキリングキャンプ</span>
      </div>
      <div className="flex items-center gap-4 md:gap-6 text-[13px] md:text-sm font-jp">
        <a href="#course" className="hidden md:inline opacity-80 hover:opacity-100">
          研修内容
        </a>
        <a href="#cta" className="hidden md:inline opacity-80 hover:opacity-100">
          無料相談
        </a>
        <a
          href="#cta"
          className={`inline-flex items-center gap-2 px-4 py-2 text-[12px] md:text-[13px] font-medium transition-colors ${
            overDark
              ? "bg-paper text-ink hover:bg-white"
              : "bg-ink text-paper hover:bg-ink-soft"
          }`}
        >
          資料請求
          <span aria-hidden>→</span>
        </a>
      </div>
    </nav>
  );
}
