import * as React from "react";
import { Btn } from "../components/primitives.jsx";
import { content } from "../content.js";

export function MidCTA({ eyebrow, title, sub }) {
  return (
    <section data-screen-label="mid CTA" data-tone="dark" className="bg-ink text-text-onink">
      <div className="mx-auto max-w-wrap px-5 md:px-10 py-12 md:py-20 text-center">
        <p className="font-en uppercase tracking-[0.32em] text-[11px] text-vermilion mb-4 md:mb-5">
          {eyebrow}
        </p>
        <h2 className="font-mincho font-bold text-text-onink text-[clamp(22px,5.6vw,30px)] md:text-[clamp(28px,3.2vw,44px)] leading-tight mb-4 md:mb-6">
          {title}
        </h2>
        <p className="font-jp text-text-onink-mute text-[13px] md:text-[15px] leading-[2] max-w-[58ch] mx-auto mb-8 md:mb-10">
          {sub}
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
          <Btn variant="primary" href={content.links.consultation}>
            無料相談を予約する
          </Btn>
          <Btn variant="ghost" onDark href={content.links.document}>
            資料を無料でダウンロード
          </Btn>
        </div>
      </div>
    </section>
  );
}
