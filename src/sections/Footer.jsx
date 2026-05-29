import * as React from "react";

export function Footer() {
  return (
    <footer className="bg-paper-soft border-t border-ink/10">
      <div className="mx-auto max-w-wrap px-5 md:px-10 py-8 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 text-[12px] md:text-[13px] text-text-secondary">
        <div className="flex items-center gap-3 font-mincho font-bold text-ink text-[15px] md:text-[17px]">
          <span aria-hidden className="inline-block w-5 h-5 md:w-6 md:h-6 rounded-full bg-vermilion" />
          AIリスキリングキャンプ
        </div>
        <div>© 2026 AIリスキリングキャンプ. All rights reserved.</div>
      </div>
    </footer>
  );
}
