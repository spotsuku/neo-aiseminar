/* Sections 8, 9 — 信頼構築 / CTA */

function Trust() {
  return (
    <section className="section" data-screen-label="08 Trust">
      <div className="wrap">
        <div className="connector">
          <span className="num">08</span>
          <span>Credibility</span>
          <span className="bar"></span>
          <span>信頼構築</span>
        </div>

        <div className="trust-head">
          <p className="trust-eyebrow">Track Record</p>
          <h2 className="display lg trust-title">
            <span className="tt-line">東京大学発の</span>
            <span className="tt-line"><span className="under">AIスタートアップ</span>と、</span>
            <span className="tt-line">現場の経営課題。</span>
          </h2>
          <p className="lede">
            <strong>上場企業や地方テレビ局を中心とした</strong>受講実績。
            最先端のAIスタートアップとリアルなビジネス現場を熟知したチームが、
            両者を掛け合わせて設計したハイレベルなAI研修です。
          </p>
        </div>

        <div className="proof-hero">
          <div className="ph-stat">
            <span className="ph-eyebrow">累計受講者数</span>
            <span className="ph-num">
              <span className="ph-val">900</span>
              <span className="ph-unit">名 突破</span>
            </span>
            <span className="ph-note">上場企業／地方テレビ局／中堅企業を中心に</span>
          </div>
          <div className="ph-logos">
            <span className="ph-logos-label">受講実績企業（一部）</span>
            <ul className="ph-company-list">
              <li>株式会社タカギ</li>
              <li>株式会社博運社</li>
              <li>株式会社明治産業</li>
              <li>タカトリグループホールディングス株式会社</li>
              <li>株式会社SBSプロモーション<span className="ph-co-note">（静岡放送）</span></li>
              <li>株式会社ビープラスト<span className="ph-co-note">（サガテレビ）</span></li>
              <li>株式会社トリドリ</li>
              <li>株式会社レックスホールディングス</li>
            </ul>
          </div>
        </div>

        <div className="pillar-strip">
          <div className="pillar">
            <span className="pl-num">01</span>
            <div className="pl-media">
              <img src="assets/logo-aiken.png" alt="A.I.KEN" className="pl-logo" />
            </div>
            <h3 className="pl-title">
              東京大学発<br />
              <span className="accent">AIスタートアップ</span>
            </h3>
            <p className="pl-text">
              最新のAI研究知見をベースに、業務現場で本当に効くプロダクトを共同で設計。
              研究と実装の両輪を持つチーム。
            </p>
          </div>
          <div className="pillar">
            <span className="pl-num">02</span>
            <div className="pl-media">
              <img src="assets/logo-neo.png" alt="NEO" className="pl-logo pl-logo-neo" />
            </div>
            <h3 className="pl-title">
              次世代リーダー<br />
              <span className="accent">育成のプロ</span>
            </h3>
            <p className="pl-text">
              学習環境設計のプロであり、毎年100回以上のワークショップを手がける専門チームが運営。
              「経営者が体感する」ための設計を担っています。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section" id="cta" data-screen-label="09 CTA" style={{ paddingBlock: 0 }}>
      <div className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="cta-block">
          <div className="vermilion-glow" />
          <div className="session">
            <span className="dot"></span>
            <span>Next Cohort</span>
            <span style={{ color: 'var(--text-onink)' }}>○月○日 開講</span>
            <span style={{ opacity: 0.4 }}>｜</span>
            <span className="seats">残り ○社</span>
          </div>

          <h2>
            リアルなビジネス現場 ×<br />
            東京大学発スタートアップ。<br />
            <span style={{ color: 'var(--vermilion)' }}>まずは、お気軽に。</span>
          </h2>

          <p style={{ fontSize: 15, color: 'var(--text-onink-mute)', lineHeight: 2, maxWidth: '56ch', marginBottom: 40 }}>
            「自社の業務にどう組み込めるか、まだ言葉にできない」——その段階でも結構です。
            まずは30分、話を聞きにくる感覚でお問い合わせください。
          </p>

          <div className="cta-buttons">
            <a href="#" className="btn primary">
              無料相談を予約する（30分・オンライン可）
              <span className="arrow"></span>
            </a>
            <a href="#" className="btn ghost" style={{ color: 'var(--paper)', borderColor: 'var(--paper)' }}>
              資料を無料でダウンロード
              <span className="arrow"></span>
            </a>
          </div>

          <div className="cta-foot">
            <div>
              <span className="lab">Format</span>
              30分・オンライン可<br />
              （Zoom / Google Meet）
            </div>
            <div>
              <span className="lab">For</span>
              社長・経営層<br />
              DX推進ご担当者さま
            </div>
            <div>
              <span className="lab">Capacity</span>
              定員 8社／回<br />
              少人数で確実に動かす
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="brand">
        <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--vermilion)', display: 'inline-block' }}></span>
        AIリスキリングキャンプ
      </div>
      <div>© 2026 AIリスキリングキャンプ. All rights reserved.</div>
    </footer>
  );
}

function MidCTA({ eyebrow, title, sub }) {
  return (
    <section className="midcta" data-screen-label="mid CTA">
      <div className="wrap">
        <p className="midcta-eyebrow">{eyebrow}</p>
        <h2 className="midcta-title">{title}</h2>
        <p className="midcta-sub">{sub}</p>
        <div className="midcta-actions">
          <a href="#cta" className="btn primary">
            無料相談を予約する
            <span className="arrow"></span>
          </a>
          <a href="#cta" className="btn ghost">
            資料を無料でダウンロード
            <span className="arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Trust, CTA, Footer, MidCTA });
