import * as React from "react";
import { content } from "../content.js";

export function Footer() {
  return (
    <footer className="bg-paper-soft border-t border-ink/10">
      <div className="mx-auto max-w-wrap px-5 md:px-10 py-10 md:py-14">

        {/* Top row: brand + nav links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 pb-8 md:pb-10 border-b border-ink/10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-mincho font-bold text-ink text-[16px] md:text-[18px]">
              <span aria-hidden className="inline-block w-5 h-5 md:w-6 md:h-6 rounded-full bg-vermilion" />
              AIリスキリングキャンプ
            </div>
            <p className="text-text-secondary font-jp text-[12px] md:text-[13px] leading-[1.85] max-w-[36ch]">
              経営者のためのAI体感・実装研修。
              <br />
              東京大学発AIスタートアップ × リアルなビジネス現場。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-[13px] md:text-[14px]">
            <div className="flex flex-col gap-2">
              <span className="font-en uppercase tracking-[0.24em] text-[10px] text-text-muted mb-1">Menu</span>
              <a href="#course" className="text-text-secondary hover:text-ink transition-colors font-jp">研修内容</a>
              <a href={content.links.consultation} className="text-text-secondary hover:text-ink transition-colors font-jp">無料相談</a>
              <a href={content.links.document} className="text-text-secondary hover:text-ink transition-colors font-jp">資料請求</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-en uppercase tracking-[0.24em] text-[10px] text-text-muted mb-1">Company</span>
              <span className="text-text-secondary font-jp">株式会社NEO</span>
              <span className="text-text-secondary font-jp text-[12px] leading-[1.8]">
                〒810-0001<br />
                福岡県福岡市中央区天神一丁目11番1号<br />
                ONE FUKUOKA BLDG. 7階
              </span>
              <a
                href="https://neotown.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vermilion hover:underline font-jp text-[12px]"
              >
                https://neotown.net/
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[11px] md:text-[12px] text-text-muted">
          <span>© 2026 NEO. All rights reserved.</span>
          <span className="font-jp">AIリスキリングキャンプは株式会社NEOが運営しています。</span>
        </div>

      </div>
    </footer>
  );
}
