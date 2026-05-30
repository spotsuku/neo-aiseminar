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

      <div className="relative z-10 mx-auto w-full max-w-wrap md:flex-1 flex flex-col px-6 md:px-10 pt-4 pb-6 md:pt-16 md:pb-10">

        {/* Banner: Field-tested AX Program / 現場実感が湧くAX研修 */}
        <div className="relative border-b border-white/15 mb-5 md:mb-6 pb-4 md:pb-6">
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-en text-[11px] md:text-sm tracking-[0.2em] md:tracking-[0.28em] text-vermilion font-medium uppercase">
              Field-tested AX Program
            </span>
            <h1 className="font-mincho font-bold text-text-onink text-[clamp(26px,7.2vw,38px)] md:text-[clamp(36px,4.4vw,64px)] leading-[1.2] md:tracking-wide">
              <span className="whitespace-nowrap">日々の<Under>業務課題</Under>を解決する</span>
              <br />
              <span className="whitespace-nowrap">実践型AI研修</span>
            </h1>

            {/* Partnership — clean headline form (matches the CTA section) */}
            <div className="mt-3 md:mt-4">
              <span className="block font-en uppercase tracking-[0.32em] text-[10px] md:text-[12px] text-vermilion font-bold mb-2 md:mb-3">
                ─── Strategic Partnership
              </span>
              <h2 className="font-mincho font-bold text-text-onink text-[clamp(20px,5.4vw,28px)] md:text-[clamp(24px,2.6vw,38px)] leading-[1.4] tracking-tight">
                リアルなビジネス現場 <span className="font-en-serif italic text-vermilion font-medium">×</span>
                <br />
                <span className="text-vermilion">東京大学発AIスタートアップ。</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile order: image → text → system → CTAs
            Desktop: text (left, rows 1-2) | image+system (right, stacked)
                     CTAs span full width at row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8 w-full">
          {/* 1. Image — first on mobile, top of right column on desktop */}
          <figure className="relative overflow-hidden md:row-start-1 md:col-start-2 max-w-3xl md:max-w-none mx-auto md:mx-0 w-full">
            <img
              src="assets/hero-workshop.jpg"
              alt="AIリスキリングキャンプ — 実際の研修風景"
              className="block w-full h-[220px] sm:h-[280px] md:h-[300px] object-cover"
            />
            <figcaption className="absolute left-3 bottom-3 md:left-5 md:bottom-5 flex items-center gap-2 px-3 py-1.5 bg-ink/80 text-text-onink text-xs font-jp">
              <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
              実際の研修風景
            </figcaption>
          </figure>

          {/* 2. Text — second on mobile, left column spans rows 1-2 on desktop */}
          <div className="flex flex-col gap-5 md:gap-7 max-w-3xl md:max-w-none mx-auto md:mx-0 w-full min-w-0 md:row-start-1 md:row-span-2 md:col-start-1 md:justify-center">
            <p className="font-mincho text-[clamp(20px,5.4vw,28px)] md:text-[clamp(22px,2vw,32px)] leading-[1.55] text-text-onink-mute font-medium">
              <span className="text-text-onink font-bold underline decoration-vermilion decoration-[3px] underline-offset-[6px] md:decoration-4 md:underline-offset-8">
                AIが全く分からなくても
              </span>
              、1日で簡単な業務システムは構築できます。
            </p>
            <p className="font-mincho font-bold text-text-onink leading-[1.45] tracking-tight text-[clamp(20px,5.6vw,28px)] md:text-[clamp(24px,2.4vw,38px)]">
              いち早くAIを業務に組み込んだ会社が
              <span className="text-vermilion underline decoration-vermilion decoration-[3px] underline-offset-[6px] md:underline-offset-[10px]">
                成功する時代
              </span>
              です。
            </p>
          </div>

          {/* 3. System — third on mobile, bottom of right column on desktop */}
          <div className="max-w-3xl md:max-w-none mx-auto md:mx-0 w-full min-w-0 md:row-start-2 md:col-start-2">
            <HeroConsole />
          </div>

          {/* 4. CTAs — always sit directly under the system demo */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-3xl md:max-w-none mx-auto md:mx-0 w-full md:row-start-3 md:col-span-2 md:justify-center md:max-w-2xl">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 md:py-3.5 bg-vermilion hover:bg-vermilion-dark text-white font-medium text-[15px] md:text-base transition-colors flex-1"
            >
              無料相談を予約する
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#course"
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 md:py-3.5 border border-text-onink/80 text-text-onink hover:bg-white/10 font-medium text-[15px] md:text-base transition-colors flex-1"
            >
              研修内容を見る
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div className="relative z-10 border-t border-white/15 py-6 md:py-10 px-6 md:px-10">
        <div className="mx-auto max-w-wrap flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-en uppercase tracking-[0.32em] text-[10px] md:text-[12px] text-vermilion font-bold">
              Track Record
            </span>
            <span className="text-text-onink-mute text-[12px] md:text-[14px] font-jp">
              上場企業・地方テレビ局を中心に
            </span>
          </div>

          <div className="flex items-baseline gap-3 md:gap-4 flex-wrap">
            <span className="font-mincho text-text-onink-mute text-[14px] md:text-[18px]">
              累計受講者数
            </span>
            <span className="font-en-serif text-vermilion font-medium leading-none text-[64px] md:text-[clamp(72px,8vw,128px)] tracking-tight">
              900
            </span>
            <span className="font-mincho text-text-onink text-[18px] md:text-[24px] font-bold">
              名 突破
            </span>
          </div>

          <div className="font-mincho text-text-onink text-[14px] md:text-[18px] leading-tight md:text-right">
            <span className="underline decoration-vermilion decoration-2 underline-offset-4 font-bold">
              AI研修
            </span>
            の確かな実績
          </div>
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
