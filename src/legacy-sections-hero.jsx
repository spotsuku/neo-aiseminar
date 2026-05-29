import * as React from "react";
import { HeroConsole } from "./legacy-hero-console.jsx";
/* Hero (Section 1) + transformation marquee */

function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-grid-bg" />
      <div className="hero-vermilion-mark" />

      <div className="wrap hero-wrap">
        <div className="hero-top">
          <div className="hero-meta">
            <div className="row">
              <span>AIリスキリングキャンプ</span>
              <span className="dot"></span>
              <span>2026 / Cohort 04</span>
            </div>
          </div>
          <div className="hero-meta" style={{ textAlign: 'right' }}>
            <div>For Executives &amp; DX Leaders</div>
          </div>
        </div>

        <div className="hero-banner">
          <div className="hb-rule"></div>
          <div className="hb-stack">
            <span className="hb-en">Field-tested AX Program</span>
            <h2 className="hb-jp">現場実感が湧くAX研修</h2>
            <p className="hb-sub">
              <span>東大発AIスタートアップ</span>
              <span className="hb-x">×</span>
              <span>次世代リーダー育成のプロ</span>
              <span className="hb-sub-tail">が開発</span>
            </p>
          </div>
        </div>

        <div className="hero-split">
          <div className="hero-left">
            <div className="hero-question">
              <span className="hq-quote">“</span>
              <p>
                <span className="hq-line">うちの会社、</span>
                <span className="hq-line">本当にAI使えてるかな<span className="hq-q">……？</span></span>
              </p>
            </div>

            <h1 className="hero-headline">
              <span className="line"><span className="under-strong">表面的なAI活用</span>の時代は、</span>
              <span className="line">終わりました。</span>
              <span className="line" style={{ marginTop: '0.5em' }}>AIを<span className="under-strong">業務に組み込む</span>時代です。</span>
            </h1>

            <p className="hero-lede">
              経営者が変われば、会社が変わる。<br />
              <strong style={{ color: 'var(--paper)' }}>2日間で、AIで会社の未来を変える経営者になる。</strong>
            </p>

            <div className="hero-cta-row">
              <a href="#cta" className="btn primary">
                無料相談を予約する
                <span className="arrow"></span>
              </a>
              <a href="#course" className="btn ghost" style={{ color: 'var(--paper)', borderColor: 'var(--paper)' }}>
                研修内容を見る
                <span className="arrow"></span>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <figure className="hero-workshop-photo">
              <img src="assets/hero-workshop.jpg" alt="AIリスキリングキャンプ — 実際の研修風景" />
              <figcaption>
                <span className="hwp-dot"></span>
                <span>実際の研修風景</span>
              </figcaption>
            </figure>
            <HeroConsole />
          </div>
        </div>
      </div>

      <div className="hero-proof-strip">
        <div className="hps-inner">
          <span className="hps-eyebrow">Track Record</span>
          <p className="hps-text">
            累計受講者数<span className="hps-num">900</span>名の<span className="under-strong">AI研修</span>
          </p>
          <span className="hps-note">上場企業・地方テレビ局を中心に</span>
        </div>
      </div>
    </section>
  );
}

function HeroMarquee() {
  const items = [
    "プロンプトを工夫する → 業務に組み込む",
    "数百万円〜数億円 → 数万円",
    "数ヶ月 → 1週間",
    "外注 → 内製",
    "現場任せ → トップ起点",
    "個人の生産性 → 組織の生産性"
  ];
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span key={i}>
            {t}
            <span className="sep"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

export { Hero, HeroMarquee };
