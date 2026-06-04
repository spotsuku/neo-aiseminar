import * as React from "react";
import { LightboxTrigger } from "../components/Lightbox.jsx";
import { content } from "../content.js";

export function FreeRoadmap() {
  return (
    <section id="free-roadmap" data-screen-label="FR FreeRoadmap" className="bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-wrap px-5 md:px-10">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="flex-1 h-px bg-ink/15 max-w-[80px]" />
          <span className="font-en uppercase tracking-[0.32em] text-[11px] md:text-[13px] text-ink/60 font-bold">
            Free Roadmap
          </span>
          <span className="flex-1 h-px bg-ink/15 max-w-[80px]" />
        </div>

        {/* Headline */}
        <h2 className="font-mincho font-bold text-center text-ink text-[clamp(24px,4vw,44px)] leading-[1.4] mb-6">
          あなたの会社専用の<span className="underline decoration-vermilion decoration-[3px] underline-offset-[6px]">ロードマップ</span>を無料作成
        </h2>

        {/* Bonus badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 bg-paper-soft border border-ink/10 rounded-full px-5 py-3 shadow-sm">
            <span className="bg-[#f97316] text-white font-bold text-[11px] px-3 py-1 rounded-full tracking-wide">
              + BONUS
            </span>
            <span className="font-jp text-[13px] md:text-[14px] text-ink">
              さらに今なら<strong className="text-ink">他社の成功事例集</strong>も無料でプレゼント
            </span>
          </div>
        </div>

        {/* Roadmap image area */}
        <div className="border-2 border-dashed border-ink/15 rounded-sm overflow-hidden mb-8 bg-paper-soft">
          <LightboxTrigger src="assets/roadmap.png" alt="AX推進ロードマップ" className="block">
            <picture>
              <source srcSet="assets/roadmap.webp" type="image/webp" />
              <img
                src="assets/roadmap.png"
                alt="AX推進ロードマップ"
                className="w-full h-auto block"
              />
            </picture>
          </LightboxTrigger>
        </div>

        {/* Signup card */}
        <div className="bg-[#eef3fb] rounded-sm px-6 md:px-12 py-10 md:py-12 text-center">
          <p className="font-mincho font-bold text-ink text-[clamp(22px,3.5vw,38px)] leading-[1.4] mb-5">
            たった<span className="font-en-serif italic text-vermilion text-[1.4em] leading-none">1</span>分で申し込み完了！
          </p>
          <p className="font-jp text-text-secondary text-[13px] md:text-[15px] leading-[1.95] max-w-[52ch] mx-auto mb-8">
            御社の部署ごとの社員数や、実際にいつまでにAI導入を完了したいかなどを
            簡単にヒアリングさせていただき、あなたの会社にあった
            <strong className="text-ink font-semibold">オリジナルロードマップ</strong>を作成いたします。
          </p>
          <a
            href={content.links.consultation}
            className="inline-flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-jp font-bold text-[15px] md:text-[17px] px-8 md:px-12 py-4 md:py-5 rounded-full shadow-md transition-colors"
          >
            無料でロードマップ＆事例を受け取る
            <span aria-hidden className="text-[18px]">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
