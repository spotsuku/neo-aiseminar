import * as React from "react";
import { Section, Connector, Display, Lede, Under } from "../components/primitives.jsx";
import { Carousel } from "../components/Carousel.jsx";
import { LightboxTrigger } from "../components/Lightbox.jsx";

const DAYS = [
  {
    tag: "DAY",
    num: "1",
    date: "6/25",
    h: "AI最先端を学習・業務アプリ開発ツール作成の基礎",
    items: [
      "AIの基本知識",
      "Claudeを使って、講師と一緒にアプリを開発する体験",
      "デプロイ・データベース設計など、公開までに必要なスキル",
      "社内でAI推進を進めるために、経営者に必要なマインドセット",
    ],
  },
  {
    tag: "INTERVAL",
    num: "2",
    unit: "週間",
    interval: true,
    h: "DAY1とDAY2の間の実装期間",
    sub: "— DAY1で学んだ知見を活かし、実際の業務改善アプリをご自身で開発する期間",
    items: [
      "DAY1で学んだ内容を活かし、自社の業務改善アプリを実装",
      <>
        期間中は<strong className="text-ink font-semibold">オンラインで講師に相談可能</strong>
      </>,
      <>
        <strong className="text-ink font-semibold">Claudeアカウントを付与</strong>
        （DAY1〜DAY2終了まで、interval期間を含む全期間）
      </>,
    ],
    note: "→ DAY1 と DAY2 の間に十分な実装期間があるのが、本研修の最大の特徴。",
  },
  {
    tag: "DAY",
    num: "2",
    date: "7/8",
    h: "リスク対策・ハッカソン(集中短期開発)",
    items: [
      "セキュリティ・リスクについて、経営者が知っておくべき知識",
      "ハッカソン形式での集中短期開発ワーク",
      "interval期間に開発したアプリの成果報告会",
      "社内展開に向けた、最初のゴーサイン設計",
    ],
  },
];

export function Solution() {
  return (
    <Section id="course" label="06 Solution" tone="light">
      <Connector num="06" en="The Program" jp="現場実践型の研修プログラム" />

      {/* Hands-on Workshop — moved up to sit directly under THE PROGRAM */}
      <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 md:gap-12 items-center">
        <LightboxTrigger src="assets/workshop-photo.jpg" alt="ワークショップ風景" className="aspect-[4/3] bg-paper-soft overflow-hidden">
          <image-slot
            id="workshop-photo"
            shape="rect"
            placeholder="ワークショップ風景の写真"
            src="assets/workshop-photo.jpg"
          />
        </LightboxTrigger>
        <div className="min-w-0">
          <span className="font-en uppercase tracking-[0.32em] text-[11px] text-vermilion font-medium mb-3 block">
            ─── Hands-on Workshop
          </span>
          <h3 className="font-mincho font-bold text-[24px] md:text-[clamp(26px,2.8vw,40px)] leading-tight mb-4 md:mb-6">
            <Under>現場実感</Under>のある
            <br />
            実践型のAI研修
          </h3>
          <p className="text-text-secondary text-[13px] md:text-[15px] leading-[1.95] font-jp">
            少人数のハンズオン形式で、講師が一人ひとりに伴走。
            参加者同士で課題を持ち寄り、議論しながら、自分の業務に組み込むツールを実際に作り上げる。
            座学ではなく「現場で動くもの」を持ち帰る、実践型の2日間です。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 md:gap-14 mb-12 md:mb-16">
        <div>
          <span className="block font-en uppercase tracking-[0.32em] text-vermilion text-[13px] md:text-sm font-medium mb-4 md:mb-5">
            AIリスキリングキャンプ
          </span>

          {/* 3-step path leading into the headline */}
          <ol className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
            {[
              "AI最先端を学習・業務アプリ開発",
              "2週間の社内実践",
              "リスク対策・アプリ発表",
            ].map((step, i) => (
              <li key={i} className="flex items-baseline gap-3 md:gap-5">
                <span className="font-en-serif italic text-vermilion text-[28px] md:text-[40px] font-medium leading-none shrink-0">
                  {i + 1}.
                </span>
                <span className="font-mincho font-bold text-ink text-[20px] md:text-[28px] leading-snug">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <Display size="lg">
            「AIで日々の業務が変わる姿」を自分の手で創り切る。
          </Display>
        </div>
        <Lede className="md:pt-3 min-w-0">
          社長やDX推進責任者である経営層が、業務にAIを組み込んだ姿を体感し、
          自分の手で業務を変えるツールをAIで自動構築する研修です。
          <strong className="text-ink font-semibold">「何ができ、何が社内を変える鍵なのか」</strong>——
          AIに投資判断する目を、2週間で養います。
        </Lede>
      </div>

      <div className="bg-paper-card border border-ink/8 p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 pb-6 md:pb-8 mb-8 md:mb-10 border-b border-ink/10">
          <h3 className="font-mincho">
            <span className="block font-en text-vermilion uppercase tracking-[0.28em] text-[11px] md:text-xs mb-2">
              Curriculum / 学習 → 社内実践 → リスク対策
            </span>
            <span className="block font-bold text-ink text-[20px] md:text-[28px]">
              体感し、自分の手で創り上げる。
            </span>
          </h3>
          <div className="text-text-secondary font-jp text-[12px] md:text-[13px] leading-[1.95]">
            対象：社長・DX推進責任者
            <br />
            形式：実機ハンズオン｜少人数制
          </div>
        </div>

        <Carousel desktopClass="grid grid-cols-3 gap-5 md:gap-7">
          {DAYS.map((d, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-7 flex flex-col gap-5 ${
                d.interval
                  ? "bg-vermilion/5 border-2 border-dashed border-vermilion/40"
                  : "bg-paper-soft border border-ink/8"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className={`font-en uppercase tracking-[0.24em] text-[10px] md:text-[11px] ${
                    d.interval ? "text-vermilion font-bold" : "text-text-muted"
                  }`}
                >
                  {d.tag}
                </span>
                <span
                  className={`font-en-serif italic font-medium leading-none ${
                    d.interval
                      ? "text-vermilion text-[36px] md:text-[44px]"
                      : "text-ink text-[40px] md:text-[52px]"
                  }`}
                >
                  {d.num}
                  {d.unit && (
                    <span className="text-[14px] md:text-[16px] ml-1 not-italic font-jp font-medium">
                      {d.unit}
                    </span>
                  )}
                </span>
                {d.date && (
                  <span className="ml-auto font-en-serif italic text-vermilion text-[15px] md:text-[18px] font-medium">
                    {d.date}
                  </span>
                )}
              </div>
              <h4
                className={`font-mincho font-bold text-[16px] md:text-[18px] leading-[1.55] ${
                  d.interval ? "text-vermilion-dark" : "text-ink"
                }`}
              >
                {d.h}
                {d.sub && (
                  <span className="block mt-1 font-normal text-[12px] md:text-[13px] text-text-secondary">
                    {d.sub}
                  </span>
                )}
              </h4>
              <ul className="flex flex-col gap-2.5 text-[13px] md:text-[14px] text-text-secondary font-jp leading-[1.85]">
                {d.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-1.5 w-1 h-1 rounded-full bg-vermilion shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {d.note && (
                <p className="mt-2 pt-4 border-t border-vermilion/20 text-[12px] md:text-[13px] text-vermilion-dark font-jp leading-[1.85]">
                  {d.note}
                </p>
              )}
            </div>
          ))}
        </Carousel>

        <div className="mt-10 md:mt-14 p-6 md:p-8 bg-paper-soft border-l-4 border-vermilion flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mincho text-ink text-[16px] md:text-[20px] leading-[1.85]">
            研修終了時、受講者の手元に
            <br />
            <span className="text-vermilion font-bold">自分で構築した業務ツールが1本</span>あります。
          </p>
          <span className="px-4 py-2 bg-ink text-text-onink font-jp text-[12px] md:text-[13px] self-start">
            ＝ 社内ゴーサインの根拠
          </span>
        </div>
      </div>
    </Section>
  );
}
