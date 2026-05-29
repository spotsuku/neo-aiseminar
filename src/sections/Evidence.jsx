import * as React from "react";
import { Section, Display, Lede, Under } from "../components/primitives.jsx";

const CASES = [
  {
    id: "expense-dash",
    slot: "case-expense-dash",
    placeholder: "プロジェクト別経費ダッシュボードのスクリーンショット",
    src: "assets/case-expense-dash.png",
    industry: "プロジェクト 20件以上を並行管理",
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
    app: "財務諸表を事業別に可視化／意思決定の迅速化",
    desc: "事業別PL・BS・キャッシュフローを自動で集計し、経営者がリアルタイムで状況を把握。投資・撤退判断のスピードが変わる。",
    stack: ["会計データ", "BigQuery", "Charts"],
    kpi: { before: "3ヶ月", after: "1週間" },
    build: "Day 2 ／ 受講者の手で構築",
  },
];

export function Evidence() {
  return (
    <Section label="02 Evidence" tone="light">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Display size="lg">
          プログラミング未経験の<span className="whitespace-nowrap">経営者が、</span>
          <br />
          <Under>自分の手で</Under>業務を変え
          <span className="whitespace-nowrap">はじめています。</span>
        </Display>
        <Lede className="mt-6 md:mt-8">
          ある経営者は、2ヶ月でアプリを10個自作し、社内の業務を次々と自動化しはじめました。
          数百万円〜数億円かけて外注していたものが、いまや
          <strong className="text-ink font-semibold">1週間・数万円</strong>
          で立ち上がる時代です。 以下は、本コース受講企業から実際に生まれた業務ツールの例です。
        </Lede>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {CASES.map((c, i) => (
          <article
            key={c.id}
            className="bg-paper-card border border-ink/8 overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[16/10] bg-paper-soft">
              {/* The image-slot custom element lets the host editor drop
                  a new screenshot in without code changes. */}
              <image-slot
                id={c.slot}
                shape="rect"
                placeholder={c.placeholder}
                src={c.src}
              />
              <div className="absolute left-0 top-0 w-full flex items-start justify-between p-3 md:p-4">
                <span className="px-2 py-1 bg-ink/90 text-text-onink font-en text-[10px] md:text-[11px] tracking-[0.18em]">
                  CASE 0{i + 1}
                </span>
                <span className="px-2 py-1 bg-vermilion text-white font-jp text-[10px] md:text-[11px]">
                  {c.build}
                </span>
              </div>
            </div>
            <div className="p-5 md:p-7 flex flex-col flex-1">
              <div className="text-[12px] md:text-[13px] text-text-secondary font-jp mb-3">
                {c.industry}
              </div>
              <h3 className="font-mincho text-[18px] md:text-[22px] font-bold leading-tight mb-3">
                {c.app}
              </h3>
              <p className="text-[13px] md:text-[14px] text-text-secondary leading-[1.85] font-jp mb-5 flex-1">
                {c.desc}
              </p>
              <div className="bg-paper-soft p-4 md:p-5 flex flex-col gap-2 mb-5">
                <div className="flex items-center justify-between text-[12px] md:text-[13px]">
                  <span className="text-text-muted font-jp">これまで</span>
                  <span className="font-mincho text-text-secondary line-through">
                    {c.kpi.before}
                  </span>
                </div>
                <div aria-hidden className="text-center text-vermilion text-sm">
                  ↓
                </div>
                <div className="flex items-center justify-between text-[12px] md:text-[13px]">
                  <span className="text-text-muted font-jp">受講後</span>
                  <span className="font-mincho text-vermilion font-bold text-[16px] md:text-[18px]">
                    {c.kpi.after}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 bg-bluepale text-vermilion-dark text-[11px] md:text-[12px] font-jp"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 md:mt-20 bg-ink text-text-onink p-6 md:p-10 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-6 md:gap-8 items-center">
        <div className="flex flex-col gap-2">
          <span className="font-en uppercase tracking-[0.28em] text-[11px] text-text-onink-mute">
            これまでの常識
          </span>
          <p className="font-mincho text-[18px] md:text-[24px] font-bold">
            数百万円〜数億円・数ヶ月
          </p>
          <span className="text-text-onink-mute text-[12px] md:text-[13px] font-jp">
            要件定義 → 見積 → 発注 → 開発 → 検収
          </span>
        </div>
        <div className="flex md:flex-col items-center gap-2 md:gap-3">
          <span className="hidden md:block w-[1px] h-6 bg-vermilion" />
          <span className="font-en uppercase tracking-[0.28em] text-[10px] text-vermilion">
            Shift
          </span>
          <span className="hidden md:block w-[1px] h-6 bg-vermilion" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-en uppercase tracking-[0.28em] text-[11px] text-vermilion">
            いまの現実
          </span>
          <p className="font-mincho text-[18px] md:text-[24px] font-bold">
            日本語の指示だけで、1週間・<span className="whitespace-nowrap">数万円。</span>
          </p>
          <span className="text-text-onink-mute text-[12px] md:text-[13px] font-jp">
            経営者の手から、業務を変えるツールが立ち上がる。
          </span>
        </div>
      </div>
    </Section>
  );
}
