import * as React from "react";
import { Section, Display, Eyebrow, Lede, Under } from "../components/primitives.jsx";
import { Carousel } from "../components/Carousel.jsx";

const REASONS = [
  {
    n: "01",
    title: "バラバラの\nAI認識",
    lede: "「使う人」と「使わない人」が混在する状態",
    body:
      "社員それぞれが、ChatGPT・Notion AI・Claude・Copilot……別々のAIを、別々の理解で触っている。" +
      "会社としての方針も、判断軸も、組織として積み上がっていません。",
    contrast: "会社の中に、AIの「共通言語」がない。",
  },
  {
    n: "02",
    title: "AIが\n補助機能止まり",
    lede: "個人の作業を助ける「道具」のまま",
    body:
      "AIが文章作成・要約・翻訳——個人の手元の作業を助ける道具のまま止まっている。" +
      "業務そのものには組み込まれず、組織の仕組みは変わっていません。",
    contrast: "仕組みが変わらないので、生産性も上がらない。",
  },
  {
    n: "03",
    title: "変化や挑戦の\n組織風土が不足",
    lede: "新しい仕組みが、社内に根づかない",
    body:
      "ツールやプロンプトを学んでも、変化を歓迎する空気がなければ広がりません。" +
      "「今のやり方で十分」という慣性が、AIの組み込みを止め、結局元のままに戻る。",
    contrast: "風土が変わらないと、何度導入しても定着しない。",
  },
];

export function Cause() {
  return (
    <Section label="04 Cause" tone="light">
      <div className="max-w-3xl mb-12 md:mb-20">
        <Eyebrow>AI活用が、同じ場所で止まる3つの理由</Eyebrow>
        <Display size="lg">
          なぜ、AIを使っているのに
          <br />
          <Under>変わらないのか。</Under>
        </Display>
        <Lede className="mt-6 md:mt-8">
          全国の業績の上がっていない多くの企業が、AIを業務に活かそうとしています。
          けれど、その大半が、ここで止まっています。
        </Lede>
      </div>

      <Carousel desktopClass="flex flex-col gap-5 md:gap-7">
        {REASONS.map((r) => (
          <article
            key={r.n}
            className="bg-paper-card border-l-[3px] border-vermilion grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-4 md:gap-10 p-6 md:p-10"
          >
            <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-2">
              <span className="font-en-serif italic text-[44px] md:text-[72px] leading-none text-vermilion font-medium">
                {r.n}
              </span>
              <span className="font-en uppercase tracking-[0.32em] text-[11px] text-text-muted">
                Reason
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-mincho font-bold text-[22px] md:text-[28px] leading-tight mb-3 whitespace-pre-line">
                {r.title}
              </h3>
              <p className="font-mincho text-vermilion-dark text-[14px] md:text-[16px] mb-4 md:mb-5">
                {r.lede}
              </p>
              <p className="text-text-secondary font-jp leading-[1.95] text-[13px] md:text-[15px] mb-5 md:mb-6">
                {r.body}
              </p>
              <p className="border-t border-ink/10 pt-4 md:pt-5 font-mincho font-bold text-ink text-[14px] md:text-[17px] flex items-start gap-2">
                <span aria-hidden className="text-vermilion">→</span>
                <span>{r.contrast}</span>
              </p>
            </div>
          </article>
        ))}
      </Carousel>

      <div className="mt-14 md:mt-24 max-w-3xl">
        <p className="font-mincho text-ink text-[18px] md:text-[clamp(20px,2.2vw,28px)] leading-[1.85] mb-6 md:mb-8">
          この3つの状態を抜け出すには、
          <br />
          AIを<Under>「業務そのものに組み込む」</Under>判断と、
          <br />
          <Under>「組織全体として変革する」</Under>
          <span className="whitespace-nowrap">指示が必要です。</span>
        </p>
        <p className="font-jp text-text-secondary text-[14px] md:text-[17px]">
          <span aria-hidden className="text-vermilion mr-2">——</span>
          そしてそれは、<strong className="text-ink font-semibold">経営層の仕事です。</strong>
        </p>
      </div>
    </Section>
  );
}
