import * as React from "react";
import { Btn } from "../components/primitives.jsx";

export function CTA() {
  return (
    <section id="cta" data-screen-label="09 CTA" className="bg-paper">
      <div className="mx-auto max-w-wrap px-5 md:px-10 py-12 md:py-20">
        <div className="relative bg-ink text-text-onink overflow-hidden p-6 md:p-16">
          {/* Decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 w-[440px] h-[440px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(29,143,209,0.35) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8 font-en uppercase tracking-[0.28em] text-[11px] text-text-onink-mute">
              <span className="w-2 h-2 rounded-full bg-vermilion" />
              <span>Next Cohort</span>
              <span className="text-text-onink normal-case font-jp tracking-normal">
                ○月○日 開講
              </span>
              <span className="opacity-40">｜</span>
              <span className="text-vermilion normal-case font-jp tracking-normal font-bold">
                残り ○社
              </span>
            </div>

            <h2 className="font-mincho font-bold text-text-onink text-[clamp(24px,6vw,36px)] md:text-[clamp(32px,4vw,56px)] leading-[1.4] mb-6 md:mb-8">
              リアルなビジネス現場 ×
              <br />
              東京大学発スタートアップ。
              <br />
              <span className="text-vermilion">まずは、お気軽に。</span>
            </h2>

            <p className="text-text-onink-mute font-jp text-[14px] md:text-[15px] leading-[2] max-w-[56ch] mb-8 md:mb-10">
              「自社の業務にどう組み込めるか、まだ言葉にできない」——その段階でも結構です。
              まずは30分、話を聞きにくる感覚でお問い合わせください。
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-10 md:mb-14">
              <Btn variant="primary" href="#">
                無料相談を予約する（30分・オンライン可）
              </Btn>
              <Btn variant="ghost" onDark href="#">
                資料を無料でダウンロード
              </Btn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pt-6 md:pt-8 border-t border-white/15">
              {[
                {
                  lab: "Format",
                  body: (
                    <>
                      30分・オンライン可
                      <br />
                      （Zoom / Google Meet）
                    </>
                  ),
                },
                {
                  lab: "For",
                  body: (
                    <>
                      社長・経営層
                      <br />
                      DX推進ご担当者さま
                    </>
                  ),
                },
                {
                  lab: "Capacity",
                  body: (
                    <>
                      定員 8社／回
                      <br />
                      少人数で確実に動かす
                    </>
                  ),
                },
              ].map((f) => (
                <div key={f.lab}>
                  <span className="block font-en uppercase tracking-[0.32em] text-[10px] md:text-[11px] text-vermilion mb-2">
                    {f.lab}
                  </span>
                  <p className="font-jp text-[13px] md:text-[14px] text-text-onink leading-[1.85]">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
