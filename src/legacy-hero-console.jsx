import * as React from "react";
/* Hero live console + cycling app preview.
   Streams realistic build logs (bottom → top) while an emerging
   "app preview card" materializes on top, cycling through 3 builds. */

// ── Mini app previews (the "just built" cards) ─────────────────────────────

function ExpensePreview() {
  return (
    <div className="hca expense">
      <div className="hca-chat">
        <div className="hca-msg user">
          <div className="hca-avatar">M</div>
          <div className="hca-bubble">
            <div className="hca-receipt">
              <span className="hca-rcpt-tag">📎 receipt_2026-05-14.jpg</span>
            </div>
            <div className="hca-text">これお願い</div>
          </div>
        </div>
        <div className="hca-msg bot">
          <div className="hca-avatar bot">AI</div>
          <div className="hca-bubble">
            <div className="hca-text">読み取りました。下記で申請しますか？</div>
            <div className="hca-table">
              <div className="hca-tr"><span>店舗</span><b>スターバックス 天神店</b></div>
              <div className="hca-tr"><span>日付</span><b>2026-05-14</b></div>
              <div className="hca-tr"><span>金額</span><b>¥3,840</b></div>
              <div className="hca-tr"><span>勘定科目</span><b className="hca-acct">会議費</b></div>
              <div className="hca-tr"><span>承認者</span><b>田中部長</b></div>
            </div>
            <div className="hca-actions">
              <span className="hca-btn primary">承認に回す</span>
              <span className="hca-btn">編集</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaxPreview() {
  return (
    <div className="hca fax">
      <div className="hca-fax-split">
        <div className="hca-fax-raw">
          <div className="hca-fax-tag">RAW FAX</div>
          <div className="hca-fax-text">
            <span>○○商事御中</span>
            <span>下記、追加発注お願いします</span>
            <span>　部品A-2  ×50</span>
            <span>　部品B-7  ×30</span>
            <span>　部品C-12 ×10</span>
            <span>納期：5/30</span>
            <span style={{ opacity: 0.4, fontStyle: 'italic' }}>(手書き)</span>
          </div>
        </div>
        <div className="hca-fax-arrow">→</div>
        <div className="hca-fax-struct">
          <div className="hca-fax-tag">STRUCTURED</div>
          <table className="hca-fax-tbl">
            <thead>
              <tr><th>品番</th><th>数量</th><th>conf.</th></tr>
            </thead>
            <tbody>
              <tr><td>A-2</td><td>50</td><td><span className="hca-conf hi">0.99</span></td></tr>
              <tr><td>B-7</td><td>30</td><td><span className="hca-conf hi">0.97</span></td></tr>
              <tr><td>C-12</td><td>10</td><td><span className="hca-conf mid">0.84</span></td></tr>
            </tbody>
          </table>
          <div className="hca-fax-meta">納期 2026-05-30 / 承認待ち</div>
        </div>
      </div>
    </div>
  );
}

function KpiPreview() {
  const stores = [
    { n: "天神店",  v: 142, d: "+12%" },
    { n: "博多店",  v: 118, d: "+4%" },
    { n: "小倉店",  v:  96, d: "-3%" },
    { n: "久留米店", v: 132, d: "+18%" },
    { n: "黒崎店",  v:  78, d: "-8%" },
  ];
  const max = Math.max(...stores.map((s) => s.v));
  return (
    <div className="hca kpi">
      <div className="hca-kpi-row">
        <div className="hca-kpi-tile">
          <div className="hca-kpi-lab">本日売上</div>
          <div className="hca-kpi-val">¥5.66M</div>
          <div className="hca-kpi-delta up">+8.2%</div>
        </div>
        <div className="hca-kpi-tile">
          <div className="hca-kpi-lab">客単価</div>
          <div className="hca-kpi-val">¥2,840</div>
          <div className="hca-kpi-delta up">+3.1%</div>
        </div>
        <div className="hca-kpi-tile">
          <div className="hca-kpi-lab">来店数</div>
          <div className="hca-kpi-val">1,992</div>
          <div className="hca-kpi-delta down">-1.4%</div>
        </div>
      </div>
      <div className="hca-kpi-bars">
        <div className="hca-kpi-bars-h">店舗別売上（万円）</div>
        {stores.map((s) => (
          <div key={s.n} className="hca-kpi-bar">
            <span className="bn">{s.n}</span>
            <span className="bb"><span className="bf" style={{ width: (s.v / max * 100) + '%' }}></span></span>
            <span className="bv">{s.v}</span>
            <span className={'bd ' + (s.d.startsWith('-') ? 'down' : 'up')}>{s.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Definitions ────────────────────────────────────────────────────────────

const HC_APPS = [
  {
    id: "expense",
    task: "経費申請の自動仕分けBot",
    industry: "福岡市・建設業 A社",
    api: ["Slack", "freee", "OCR"],
    log: [
      "$ ai-build start --task \"経費申請の自動仕分け\"",
      "[12:04:21] requirement parsed → 3 entities, 5 flows",
      "[12:04:23] generating schema (receipt, employee, account)",
      "[12:04:26] wiring OCR pipeline (vision + GPT-4o)",
      "[12:04:29] connecting Slack workspace.api .......... OK",
      "[12:04:31] connecting freee API ................... OK",
      "[12:04:34] generating UI (chat + history)",
      "[12:04:38] ✓ build complete   ⏱  00:00:48",
      "→ deploying 「経費申請Bot」 to staging...",
    ],
    Preview: ExpensePreview,
    metric: "申請処理  3.5h → 14min",
  },
  {
    id: "fax",
    task: "FAX注文の自動構造化",
    industry: "糟屋郡・卸売業 B社",
    api: ["Vision", "Sheets", "Slack"],
    log: [
      "$ ai-build start --task \"FAX注文の自動構造化\"",
      "[12:07:02] ingesting sample FAX (.pdf × 12)",
      "[12:07:05] vision model: parsing 手書き 品番...",
      "[12:07:09] mapping to product master (1,284 items)",
      "[12:07:12] confidence threshold @ 0.92",
      "[12:07:16] exception queue for human review",
      "[12:07:19] ✓ build complete   ⏱  00:00:51",
      "→ deploying 「FAX→受注DB」 to production...",
    ],
    Preview: FaxPreview,
    metric: "受注処理  3日 → 1時間",
  },
  {
    id: "kpi",
    task: "店舗別売上ダッシュボード",
    industry: "飯塚市・小売業 C社",
    api: ["スマレジ", "BigQuery", "Mail"],
    log: [
      "$ ai-build start --task \"店舗別売上ダッシュボード\"",
      "[14:22:08] pulling POS data (smareji × 18店舗)",
      "[14:22:12] generating aggregation queries (BigQuery)",
      "[14:22:15] generating chart components",
      "[14:22:18] scheduling 朝7時 自動配信 (mail)",
      "[14:22:21] ✓ build complete   ⏱  00:00:38",
      "→ 「日次KPIダッシュボード」 起動中...",
    ],
    Preview: KpiPreview,
    metric: "朝会資料  自動配信化",
  },
];

function lineKind(line) {
  if (line.startsWith('$'))  return 'cmd';
  if (line.startsWith('→'))  return 'deploy';
  if (line.includes('✓'))    return 'done';
  return 'log';
}

function HeroConsole() {
  const [appIdx, setAppIdx] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [appVisible, setAppVisible] = React.useState(false);
  const appRef = React.useRef(null);
  const app = HC_APPS[appIdx];

  React.useEffect(() => {
    setStep(0);
    setAppVisible(false);
    const timers = [];
    app.log.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 250 + i * 320));
    });
    timers.push(setTimeout(() => setAppVisible(true), 250 + app.log.length * 320 + 80));
    timers.push(setTimeout(() => {
      setAppIdx((i) => (i + 1) % HC_APPS.length);
    }, 250 + app.log.length * 320 + 3200));
    return () => timers.forEach(clearTimeout);
  }, [appIdx]);

  // Drive the slide-in via WAAPI (CSS transitions don't reliably fire here)
  React.useEffect(() => {
    if (appVisible && appRef.current) {
      try {
        appRef.current.animate([
          { opacity: 0, transform: 'translateY(28px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 600, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' });
      } catch (e) { /* ignore */ }
    }
  }, [appVisible, appIdx]);

  const visibleLines = app.log.slice(0, step);
  const Preview = app.Preview;

  return (
    <div className="hc-pane">
      <div className="hc-chrome">
        <div className="hc-dots"><span></span><span></span><span></span></div>
        <div className="hc-title">
          <span className="hc-live"><span className="hc-live-dot"></span>LIVE BUILD</span>
          <span className="hc-task">{app.task}</span>
        </div>
        <div className="hc-cohort">{appIdx + 1} / {HC_APPS.length}　·　{app.industry}</div>
      </div>

      <div className="hc-body">
        <div className="hc-console">
          <div className="hc-console-inner">
            {visibleLines.map((line, i) => (
              <div key={appIdx + '-' + i} className="hc-line" data-kind={lineKind(line)}>
                {line}
                {i === visibleLines.length - 1 && step < app.log.length && (
                  <span className="hc-caret">▌</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div ref={appRef} className={'hc-app ' + (appVisible ? 'in' : '')}>
          <div className="hc-app-bar">
            <span className="hc-app-mark">●</span>
            <span className="hc-app-name">{app.task}</span>
            <span className="hc-app-tag">JUST BUILT</span>
          </div>
          <div className="hc-app-body">
            <Preview />
          </div>
          <div className="hc-app-foot">
            <span className="hc-app-metric">{app.metric}</span>
            <span className="hc-app-stack">
              {app.api.map((a) => <span key={a} className="hc-pill">{a}</span>)}
            </span>
          </div>
        </div>
      </div>

      <div className="hc-rail">
        {HC_APPS.map((a, i) => (
          <button
            key={a.id}
            className={'hc-rail-dot ' + (i === appIdx ? 'active' : '')}
            onClick={() => setAppIdx(i)}
            aria-label={a.task}
          />
        ))}
      </div>
    </div>
  );
}

export { HeroConsole, ExpensePreview, FaxPreview, KpiPreview };
