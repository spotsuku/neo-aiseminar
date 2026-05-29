import * as React from "react";
import { Section, Connector, Eyebrow, Under } from "../components/primitives.jsx";

const STEPS = [
  {
    n: "01",
    h: "トップが体感する",
    d: (
      <>
        AIで何ができるかを、頭ではなく手で理解する。
        <br />
        抽象的な指示が、具体的な指示に変わる。
      </>
    ),
  },
  {
    n: "02",
    h: "判断軸が固まる",
    d: (
      <>
        何に投資すべきか、何はコスパが合わないか。
        <br />
        経営判断に直結する目を養う。
      </>
    ),
  },
  {
    n: "03",
    h: "ゴーサインを出す",
    d: (
      <>
        社内へのゴーサインを、自分の言葉で出せる。
        <br />
        業務そのものにAIが組み込まれていく。
      </>
    ),
  },
];

export function Essence() {
  return (
    <Section label="05 Essence" tone="soft">
      <Connector num="05" en="The Real Activation" jp="AI活用の本質の定義" />

      <Eyebrow>本当の意味で「AIを活用できている」状態とは</Eyebrow>

      <h2 className="font-mincho font-bold text-ink text-[clamp(22px,5.8vw,32px)] md:text-[clamp(28px,3.4vw,46px)] leading-[1.55] tracking-wide mt-6 md:mt-8 max-w-4xl">
        業務<Under>そのもの</Under>にAIを組み込むこと。
        <br />
        そのとき初めて、会社は本当の意味でAIを活用している状態になります。
      </h2>

      <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-14 items-center">
        <p className="font-mincho text-text-secondary text-[16px] md:text-[20px] leading-[1.95]">
          その意思決定と
          <br />
          社内に対するゴーサインを
          <br />
          出せるのは——
        </p>
        <p className="font-mincho text-ink text-[24px] md:text-[clamp(28px,3vw,42px)] font-bold leading-tight">
          社長・
          <br />
          DX推進責任者である
          <br />
          <span className="text-vermilion">経営層</span>だけ。
        </p>
      </div>

      <div className="mt-14 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="bg-paper-card p-6 md:p-8 border-t-2 border-vermilion flex flex-col gap-4"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-ink text-text-onink font-en-serif italic text-[20px] font-medium">
              {s.n}
            </div>
            <h3 className="font-mincho font-bold text-[18px] md:text-[22px] leading-tight">
              {s.h}
            </h3>
            <p className="font-jp text-text-secondary text-[13px] md:text-[14px] leading-[1.95]">
              {s.d}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-16 md:mt-24 font-mincho text-ink text-[18px] md:text-[clamp(20px,2.2vw,28px)] leading-[1.95] font-bold">
        経営者が変わらなければ、会社は変わらない。
        <br />
        <span className="text-vermilion">経営者がAIで何ができるかを体感していなければ、何も始まらない。</span>
      </p>
    </Section>
  );
}
