import * as React from "react";
import { HeroConsole } from "../components/HeroConsole.jsx";

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
      className="relative overflow-hidden bg-ink text-text-onink min-h-0 md:min-h-screen flex flex-col pt-16 md:pt-0"
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

      <div className="relative z-10 mx-auto w-full max-w-wrap flex-1 flex flex-col px-5 md:px-10 pt-6 pb-6 md:pt-28 md:pb-14">
        {/* Meta row — stacks on mobile so JP text doesn't collide with English */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1.5 md:gap-4 mb-4 md:mb-8 font-en uppercase tracking-[0.08em] md:tracking-[0.28em] text-[10px] md:text-[11px] text-text-onink-mute leading-relaxed">
          <div className="flex flex-wrap items-center gap-x-2.5 md:gap-x-4 gap-y-1">
            <span>AIリスキリングキャンプ</span>
            <span className="w-1 h-1 rounded-full bg-vermilion" />
            <span>2026 / Cohort 04</span>
          </div>
          <div className="md:text-right">For Executives &amp; DX Leaders</div>
        </div>

        {/* Banner: Field-tested AX Program / 現場実感が湧くAX研修 */}
        <div className="relative border-b border-white/15 mb-5 md:mb-7 pb-4 md:pb-7">
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-en text-[11px] md:text-sm tracking-[0.2em] md:tracking-[0.28em] text-vermilion font-medium uppercase">
              Field-tested AX Program
            </span>
            <h2 className="font-mincho font-bold text-text-onink text-[clamp(26px,7.6vw,40px)] md:text-[clamp(40px,7vw,96px)] leading-tight md:tracking-wider break-keep">
              現場実感が湧くAX研修
            </h2>
            <p className="flex flex-wrap items-center gap-x-2 md:gap-x-3 gap-y-2 font-mincho font-bold text-text-onink tracking-wide text-[13px] md:text-[clamp(18px,1.8vw,26px)] mt-2 md:mt-3 leading-relaxed">
              <span className="px-2.5 md:px-4 py-1 md:py-1.5 border-l-2 border-vermilion bg-vermilion/10 font-bold">
                東大発AIスタートアップ
              </span>
              <span className="font-en-serif italic text-vermilion text-[1.6em] leading-none">×</span>
              <span className="px-2.5 md:px-4 py-1 md:py-1.5 border-l-2 border-vermilion bg-vermilion/10 font-bold">
                次世代リーダー育成のプロ
              </span>
              <span className="font-jp text-[0.85em] text-text-onink-mute font-medium">が開発</span>
            </p>
          </div>
        </div>

        {/* Split: headline left, photo+console right */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-8 md:gap-12 items-stretch flex-1">
          {/* Left */}
          <div className="flex flex-col min-w-0">
            {/* Question */}
            <div className="relative pl-5 mb-5 md:mb-7 border-l-2 border-vermilion/60">
              <span aria-hidden className="absolute -top-3 -left-1 font-mincho text-5xl md:text-6xl text-vermilion/40 leading-none">“</span>
              <p className="font-mincho text-text-onink text-[clamp(18px,5.6vw,24px)] md:text-[clamp(20px,2.2vw,28px)] leading-snug">
                <span className="block">うちの会社、</span>
                <span className="block">
                  本当にAI使えてるかな
                  <span className="text-vermilion">……？</span>
                </span>
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-mincho font-bold text-text-onink tracking-tight leading-snug text-[clamp(22px,6.6vw,30px)] md:text-[clamp(28px,3.2vw,46px)] mb-5 md:mb-7">
              <span className="block">
                <span className="whitespace-nowrap underline decoration-vermilion decoration-4 underline-offset-[6px] md:underline-offset-[8px]">
                  表面的なAI活用
                </span>
                の時代は、
              </span>
              <span className="block">終わりました。</span>
              <span className="block mt-2">
                AIを
                <span className="whitespace-nowrap underline decoration-vermilion decoration-4 underline-offset-[6px] md:underline-offset-[8px]">
                  業務に組み込む
                </span>
                時代です。
              </span>
            </h1>

            {/* Lede */}
            <p className="text-text-onink-mute font-jp leading-relaxed text-[14px] md:text-[clamp(15px,1.1vw,17px)] mb-6 md:mb-8">
              経営者が変われば、会社が変わる。
              <br />
              <strong className="text-text-onink font-semibold">
                2日間で、AIで会社の未来を変える経営者になる。
              </strong>
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

          {/* Right — workshop photo + live build console */}
          <div className="flex flex-col gap-5 md:gap-7 min-w-0">
            <figure className="relative overflow-hidden">
              <img
                src="assets/hero-workshop.jpg"
                alt="AIリスキリングキャンプ — 実際の研修風景"
                className="block w-full h-auto md:h-[260px] object-cover"
              />
              <figcaption className="absolute left-3 bottom-3 md:left-5 md:bottom-5 flex items-center gap-2 px-3 py-1.5 bg-ink/80 text-text-onink text-xs font-jp">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
                実際の研修風景
              </figcaption>
            </figure>
            <div className="hidden md:block">
              <HeroConsole />
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
