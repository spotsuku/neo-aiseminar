import * as React from "react";
import { Section, Connector, Display, Lede, Under } from "../components/primitives.jsx";

const COMPANIES = [
  "株式会社タカギ",
  "株式会社博運社",
  "株式会社明治産業",
  "タカトリグループホールディングス株式会社",
  ["株式会社SBSプロモーション", "（静岡放送）"],
  ["株式会社ビープラスト", "（サガテレビ）"],
  "株式会社トリドリ",
  "株式会社レックスホールディングス",
];

export function Trust() {
  return (
    <Section label="08 Trust" tone="light">
      <Connector num="08" en="Credibility" jp="信頼構築" />

      <div className="max-w-3xl mb-12 md:mb-16">
        <span className="block font-en uppercase tracking-[0.32em] text-[11px] text-vermilion font-medium mb-4">
          Track Record
        </span>
        <Display size="lg">
          <span className="block">東京大学発の</span>
          <span className="block">
            <Under>AIスタートアップ</Under>と、
          </span>
          <span className="block">現場の経営課題。</span>
        </Display>
        <Lede className="mt-6 md:mt-8">
          <strong className="text-ink font-semibold">
            上場企業や地方テレビ局を中心とした
          </strong>
          受講実績。
          最先端のAIスタートアップとリアルなビジネス現場を熟知したチームが、
          両者を掛け合わせて設計したハイレベルなAI研修です。
        </Lede>
      </div>

      <div className="bg-paper-soft p-6 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 mb-12 md:mb-16">
        <div className="flex flex-col gap-3">
          <span className="font-en uppercase tracking-[0.32em] text-[11px] text-vermilion">
            累計受講者数
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-en-serif text-ink font-medium leading-none text-[88px] md:text-[clamp(96px,9vw,160px)]">
              900
            </span>
            <span className="font-mincho text-text-secondary text-[18px] md:text-[24px] font-bold">
              名 突破
            </span>
          </div>
          <span className="font-jp text-text-secondary text-[12px] md:text-[13px]">
            上場企業／地方テレビ局／中堅企業を中心に
          </span>
        </div>
        <div className="md:border-l md:border-ink/10 md:pl-12">
          <span className="block font-en uppercase tracking-[0.28em] text-[11px] text-text-muted mb-4 md:mb-5">
            受講実績企業（一部）
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 font-jp text-[13px] md:text-[14px] text-text-secondary">
            {COMPANIES.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 w-1 h-1 rounded-full bg-vermilion shrink-0" />
                {Array.isArray(c) ? (
                  <span>
                    {c[0]}
                    <span className="text-text-muted text-[11px] md:text-[12px]">{c[1]}</span>
                  </span>
                ) : (
                  <span>{c}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {[
          {
            n: "01",
            logo: "assets/logo-aiken.png",
            alt: "A.I.KEN",
            h: (
              <>
                東京大学発
                <br />
                <span className="text-vermilion">AIスタートアップ</span>
              </>
            ),
            text:
              "最新のAI研究知見をベースに、業務現場で本当に効くプロダクトを共同で設計。研究と実装の両輪を持つチーム。",
          },
          {
            n: "02",
            logo: "assets/logo-neo.png",
            alt: "NEO",
            h: (
              <>
                次世代リーダー
                <br />
                <span className="text-vermilion">育成のプロ</span>
              </>
            ),
            text:
              "学習環境設計のプロであり、毎年100回以上のワークショップを手がける専門チームが運営。「経営者が体感する」ための設計を担っています。",
          },
        ].map((p) => (
          <article
            key={p.n}
            className="bg-paper-card border border-ink/8 p-6 md:p-10 flex flex-col gap-4 md:gap-5"
          >
            <span className="font-en-serif italic text-vermilion text-[24px] md:text-[28px] font-medium">
              {p.n}
            </span>
            <div className="h-12 md:h-14 flex items-center">
              <img src={p.logo} alt={p.alt} className="h-full w-auto object-contain" />
            </div>
            <h3 className="font-mincho font-bold text-[18px] md:text-[22px] leading-tight">
              {p.h}
            </h3>
            <p className="font-jp text-text-secondary text-[13px] md:text-[14px] leading-[1.95]">
              {p.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
