import * as React from "react";
import { content } from "../content.js";

export function Hero() {
  const navRef = React.useRef(null);

  React.useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const items = document.querySelectorAll(".aircamp-hero .rv");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      items.forEach((el) => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) { el.classList.add("in"); io.unobserve(el); }
      });
    };
    requestAnimationFrame(() => requestAnimationFrame(revealInView));
    window.addEventListener("load", () => setTimeout(revealInView, 60));
    return () => io.disconnect();
  }, []);

  return (
    <div className="aircamp-hero">

      {/* NAV */}
      <header className="ac-nav" ref={navRef}>
        <a className="ac-brand" href="#top">
          <span className="ac-brand-badge">AI</span>
        </a>
        <nav className="ac-nav-right">
          <a className="ac-nav-link" href="#course">研修内容</a>
          <a className="ac-nav-link" href={content.links.consultation}>無料相談</a>
          <a className="ac-nav-cta" href={content.links.document}>資料請求 <span className="arw">→</span></a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-bleed" id="top">
        <div className="hero-bg">
          <img src="assets/training.jpg" alt="実際の研修風景" />
        </div>
        <div className="ac-wrap hero-bleed-in">
          <div className="hero-bleed-content">
            <div className="hero-tags rv">
              <span className="hero-tag-badge">経営者向け</span>
            </div>
            <h1 className="rv rv-d1">
              経営者の<span className="ac-mark">OS</span>を変える<span className="hero-h1-br" aria-hidden="true" /><span className="ac-mark">2日間</span>の実践型AI研修
            </h1>
            <p className="hero-sub rv rv-d2">
              リアルなビジネス現場 × <span className="blue">東京大学発AIスタートアップ</span>。<br />
              経営者のための、実装まで踏み込むAI研修。
            </p>
            <div className="hero-cta rv rv-d2">
              <a className="ac-btn ac-btn-primary" href={content.links.consultation}>
                無料相談を予約する <span className="arw">→</span>
              </a>
              <a className="ac-btn ac-btn-ghost" href={content.links.document}>
                資料請求 <span className="arw">→</span>
              </a>
            </div>
          </div>

          <div className="proof rv rv-d2">
            {/* Row 1: 900名突破（モバイルは単独で大きく） */}
            <div className="stat stat-main">
              <span className="pn"><em>900</em><span className="u">名突破</span></span>
              <span className="pl">累計受講者数</span>
            </div>
            <span className="div div-main" />
            {/* Row 2 on mobile: 98% と 95%+ を横並び */}
            <div className="proof-sub-row">
              <div className="stat">
                <span className="pn">98<span className="u">%</span></span>
                <span className="pl">お客様満足度</span>
                <span className="ps">"学んで終わり"ではなく、<br />"成果を出せた"と実感する声が多数。</span>
              </div>
              <span className="div" />
              <div className="stat">
                <span className="pn">95<span className="u">%+</span></span>
                <span className="pl">業務効率化</span>
                <span className="ps">AI活用による業務改善が、<br />各分野での現場の動きを変えています。</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bleed-cap"><span className="dot" />実際の研修風景</div>
      </section>

      {/* 導入ステートメント */}
      <section className="darkband" id="livebuild">
        <div className="ac-wrap">
          <div className="demo-statement rv">
            <p>
              いち早くAIを業務に組み込んだ会社が<br />
              <span className="ac-mark">成功する時代</span>です。
            </p>
          </div>
          <div className="scroll-cue" aria-hidden="true" />
        </div>
      </section>

    </div>
  );
}
