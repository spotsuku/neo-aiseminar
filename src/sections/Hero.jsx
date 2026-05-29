import * as React from "react";
import { HeroConsole } from "../components/HeroConsole.jsx";
import { Under } from "../components/primitives.jsx";

/**
 * Hero — Tailwind rewrite (Phase 1 sample).
 *
 * Mobile-first: defaults are the mobile layout, md: (≥768px) bumps up
 * to the two-column desktop layout. No global CSS dependence beyond
 * the Tailwind theme colors (paper, ink, vermilion, text-onink, etc.)
 * defined in tailwind.config.js, plus the existing fonts (font-mincho,
 * font-en, font-jp) and HeroConsole component.
 */
export function Hero() {
  return (
    <section
      data-screen-label="01 Hero"
      data-tone="dark"
      className="relative overflow-hidden bg-ink text-text-onink min-h-0 md:min-h-screen flex flex-col pt-14 md:pt-0"
    >
      {/* Decorative bg grid (kept as a tiny inline SVG so we don't need
          a separate CSS class) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-wrap flex-1 flex flex-col px-6 md:px-10 pt-4 pb-6 md:pt-28 md:pb-14">

        {/* Banner: Field-tested AX Program / 現場実感が湧くAX研修 */}
        <div className="relative border-b border-white/15 mb-6 md:mb-8 pb-5 md:pb-8">
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-en text-[11px] md:text-sm tracking-[0.2em] md:tracking-[0.28em] text-vermilion font-medium uppercase">
              Field-tested AX Program
            </span>
            <h1 className="font-mincho font-bold text-text-onink text-[clamp(28px,8vw,44px)] md:text-[clamp(44px,6.4vw,92px)] leading-[1.25] md:tracking-wider">
              本物の<Under>現場実感</Under>が湧く
              <br />
              AI活用を。
            </h1>

            {/* Partnership — emphasized */}
            <div className="mt-5 md:mt-7">
              <span className="block font-en uppercase tracking-[0.32em] text-[10px] md:text-[12px] text-vermilion font-bold mb-3 md:mb-4">
                ─── Strategic Partnership
              </span>
              <div className="flex flex-wrap items-center gap-x-3 md:gap-x-5 gap-y-3 font-mincho">
                <span className="px-4 md:px-6 py-2.5 md:py-3.5 bg-vermilion/15 border-l-[3px] md:border-l-4 border-vermilion text-text-onink font-bold text-[16px] md:text-[clamp(20px,2.1vw,30px)] leading-tight tracking-wide">
                  東大発AIスタートアップ
                </span>
                <span className="font-en-serif italic text-vermilion text-[32px] md:text-[clamp(36px,4vw,56px)] leading-none font-bold">
                  ×
                </span>
                <span className="px-4 md:px-6 py-2.5 md:py-3.5 bg-vermilion/15 border-l-[3px] md:border-l-4 border-vermilion text-text-onink font-bold text-[16px] md:text-[clamp(20px,2.1vw,30px)] leading-tight tracking-wide">
                  次世代リーダー育成のプロ
                </span>
                <span className="font-jp text-[13px] md:text-[clamp(14px,1.2vw,18px)] text-text-onink-mute font-medium">
                  が開発
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Split: content (left on desktop) + image stack (right on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6 md:gap-12 items-stretch flex-1">
          {/* Image — appears first on mobile (above content), right on desktop */}
          <div className="md:order-2 flex flex-col gap-5 md:gap-7 min-w-0">
            <figure className="relative overflow-hidden">
              <img
                src="assets/hero-workshop.jpg"
                alt="AIリスキリングキャンプ — 実際の研修風景"
                className="block w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
              />
              <figcaption className="absolute left-3 bottom-3 md:left-5 md:bottom-5 flex items-center gap-2 px-3 py-1.5 bg-ink/80 text-text-onink text-xs font-jp">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
                実際の研修風景
              </figcaption>
            </figure>
            {/* Live build console — now visible on mobile too, with caption */}
            <div>
              <HeroConsole />
              <p className="mt-4 md:mt-5 font-jp text-[14px] md:text-[clamp(15px,1.2vw,18px)] leading-[1.7] text-text-onink-mute">
                <span className="text-text-onink font-bold underline decoration-vermilion decoration-2 underline-offset-4">
                  全くAIが分からなくても
                </span>
                、1日でこうしたシステムは構築できます。
              </p>
            </div>
          </div>

          {/* Content — second on mobile, left on desktop */}
          <div className="md:order-1 flex flex-col min-w-0">
            {/* Lede (headline now lives in the banner above) */}
            <p className="font-mincho font-bold text-text-onink leading-[1.45] tracking-tight text-[clamp(20px,5.6vw,28px)] md:text-[clamp(26px,2.6vw,40px)] mb-6 md:mb-10">
              いち早くAIを業務に組み込んだ会社が
              <span className="text-vermilion underline decoration-vermilion decoration-[3px] underline-offset-[6px] md:underline-offset-[10px]">
                成功する時代
              </span>
              です。
            </p>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-3 px-5 py-4 md:py-3.5 bg-vermilion hover:bg-vermilion-dark text-white font-medium text-[15px] md:text-base transition-colors"
              >
                無料相談を予約する
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#course"
                className="group inline-flex items-center justify-center gap-3 px-5 py-4 md:py-3.5 border border-text-onink/80 text-text-onink hover:bg-white/10 font-medium text-[15px] md:text-base transition-colors"
              >
                研修内容を見る
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div className="relative z-10 border-t border-white/15 py-5 md:py-8 px-5 md:px-10">
        <div className="mx-auto max-w-wrap flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-6">
          <span className="font-en uppercase tracking-[0.28em] text-[11px] text-text-onink-mute">
            Track Record
          </span>
          <p className="font-mincho text-text-onink text-[15px] md:text-[20px] leading-tight">
            累計受講者数
            <span className="text-vermilion font-bold mx-1.5 text-[22px] md:text-[28px] align-baseline">
              900
            </span>
            名の
            <span className="underline decoration-vermilion decoration-2 underline-offset-4">
              AI研修
            </span>
          </p>
          <span className="text-text-onink-mute text-[12px] md:text-[13px] font-jp">
            上場企業・地方テレビ局を中心に
          </span>
        </div>
      </div>
    </section>
  );
}

export function HeroMarquee() {
  const items = [
    "プロンプトを工夫する → 業務に組み込む",
    "数百万円〜数億円 → 数万円",
    "数ヶ月 → 1週間",
    "外注 → 内製",
    "現場任せ → トップ起点",
    "個人の生産性 → 組織の生産性",
  ];
  const loop = [...items, ...items];
  return (
    <div aria-hidden className="overflow-hidden bg-ink-soft py-3 md:py-4">
      <div className="flex gap-10 animate-[marquee_45s_linear_infinite] whitespace-nowrap text-text-onink-mute font-jp text-[13px] md:text-[14px]">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-vermilion">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
