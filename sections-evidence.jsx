/* Section 2 — 時代の変化の証明（画像付きケース） */

function Evidence() {
  const cases = [
    {
      id: "expense-dash",
      slot: "case-expense-dash",
      placeholder: "プロジェクト別経費ダッシュボードのスクリーンショット",
      src: "assets/case-expense-dash.png",
      industry: "プロジェクト 20件以上を並行管理",
      scale: "",
      app: "社内プロジェクト別 経費可視化ダッシュボード",
      desc: "会計データを取り込み、プロジェクト別の経費・粗利・進行状況をダッシュボードで可視化。マネージャーが意思決定の遅れを起こさない仕組み。",
      stack: ["会計データ", "BigQuery", "Charts"],
      kpi: { before: "3ヶ月", after: "1週間" },
      build: "Day 2 ／ 受講者の手で構築",
    },
    {
      id: "fin-decisions",
      slot: "case-fin-decisions",
      placeholder: "財務諸表ダッシュボードのスクリーンショット",
      src: "assets/case-fin-decisions.png",
      industry: "複数事業を経営",
      scale: "",
      app: "財務諸表を事業別に可視化／意思決定の迅速化",
      desc: "事業別PL・BS・キャッシュフローを自動で集計し、経営者がリアルタイムで状況を把握。投資・撤退判断のスピードが変わる。",
      stack: ["会計データ", "BigQuery", "Charts"],
      kpi: { before: "3ヶ月", after: "1週間" },
      build: "Day 2 ／ 受講者の手で構築",
    },
  ];

  return (
    <section className="section" data-screen-label="02 Evidence">
      <div className="wrap">

        <div className="evidence-head">
          <h2 className="display lg">
            プログラミング未経験の経営者が、<br />
            <span className="under">自分の手で</span>業務を変えはじめています。
          </h2>
          <p className="lede">
            ある経営者は、2ヶ月でアプリを10個自作し、社内の業務を次々と自動化しはじめました。
            数百万円〜数億円かけて外注していたものが、いまや<strong style={{ color: 'var(--ink)' }}>1週間・数万円</strong>で立ち上がる時代です。
            以下は、本コース受講企業から実際に生まれた業務ツールの例です。
          </p>
        </div>

        <div className="case-grid">
          {cases.map((c, i) => (
            <article key={c.id} className="case-card">
              <div className="case-image">
                <image-slot
                  id={c.slot}
                  shape="rect"
                  placeholder={c.placeholder}
                  src={c.src}
                ></image-slot>
                <div className="case-image-overlay">
                  <span className="case-num">CASE 0{i + 1}</span>
                  <span className="case-build">{c.build}</span>
                </div>
                <div className="case-image-hint">
                  <span className="cih-icon">↓</span>
                  画像をドロップして実機スクショに差し替え
                </div>
              </div>
              <div className="case-body">
                <div className="case-industry">
                  <span>{c.industry}</span>
                  <span className="case-scale">{c.scale}</span>
                </div>
                <h3 className="case-app">{c.app}</h3>
                <p className="case-desc">{c.desc}</p>
                <div className="case-kpi">
                  <div className="case-kpi-row">
                    <span className="lab">これまで</span>
                    <span className="val was">{c.kpi.before}</span>
                  </div>
                  <div className="case-kpi-arrow">↓</div>
                  <div className="case-kpi-row">
                    <span className="lab">受講後</span>
                    <span className="val now">{c.kpi.after}</span>
                  </div>
                </div>
                <div className="case-stack">
                  {c.stack.map((s) => <span key={s} className="case-pill">{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="shift-axis">
          <div className="sa-row sa-was">
            <span className="sa-tag">これまでの常識</span>
            <p className="sa-text">
              <span className="sa-big">数百万円〜数億円・数ヶ月</span>
              <span className="sa-sub">要件定義 → 見積 → 発注 → 開発 → 検収</span>
            </p>
          </div>
          <div className="sa-axis">
            <span className="sa-axis-line"></span>
            <span className="sa-axis-label">SHIFT</span>
            <span className="sa-axis-line"></span>
          </div>
          <div className="sa-row sa-now">
            <span className="sa-tag">いまの現実</span>
            <p className="sa-text">
              <span className="sa-big">日本語の指示だけで、1週間・数万円。</span>
              <span className="sa-sub">経営者の手から、業務を変えるツールが立ち上がる。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Evidence });
