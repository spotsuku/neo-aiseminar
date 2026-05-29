import * as React from "react";
import { Section, Connector, Display, Lede, Under } from "../components/primitives.jsx";

export function ROI() {
  return (
    <Section label="07 ROI" tone="soft">
      <Connector num="07" en="Return on Investment" jp="投資価値" />

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 md:gap-14 mb-12 md:mb-16">
        <Display size="lg">
          <Under>初年度で受講費が回収できる</Under>
          <br />
          投資設計です。
        </Display>
        <Lede className="md:pt-3">
          このコースは「学んで終わり」ではありません。
          終了時点で動く業務ツールが手元に残るため、ROIは曖昧ではなく、数字で語れます。
        </Lede>
      </div>

      <div className="bg-paper-card border border-ink/8 p-6 md:p-12 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 md:gap-12 items-center">
        <div>
          <div className="font-en uppercase tracking-[0.32em] text-[11px] text-text-muted mb-3">
            受講料 ／ 1名
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-en-serif text-[28px] md:text-[36px] text-text-secondary font-light">
              ¥
            </span>
            <span className="font-en-serif font-medium text-ink leading-none text-[64px] md:text-[clamp(72px,7vw,120px)]">
              400,000
            </span>
            <span className="text-text-muted text-[12px] md:text-[13px] font-jp ml-2">
              （税込）
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[13px] md:text-[14px] text-text-secondary font-jp leading-[1.95]">
          <p>社員研修費として経費処理が可能です。</p>
          <p>
            <strong className="text-ink font-semibold">補助金</strong>
            は、雇用保険に加入している場合、対象となる可能性がございます—— お気軽にご相談ください。
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-14 p-6 md:p-10 border border-ink/10">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-6 mb-6 md:mb-8 pb-4 md:pb-5 border-b border-ink/10">
          <span className="font-en uppercase tracking-[0.28em] text-[11px] text-vermilion">
            参考
          </span>
          <h3 className="font-mincho font-bold text-[18px] md:text-[22px] text-ink flex-1">
            これまでの業務アプリ外注費
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-en-serif text-ink text-[36px] md:text-[52px] font-medium leading-none">
              ¥500,000
              <span className="text-[20px] md:text-[28px] text-text-muted ml-1">〜</span>
            </span>
            <span className="font-jp text-text-secondary text-[13px] md:text-[14px]">
              Webサイト 1本
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-en-serif text-ink text-[36px] md:text-[52px] font-medium leading-none">
              ¥5,000,000
              <span className="text-[20px] md:text-[28px] text-text-muted ml-1">〜</span>
            </span>
            <span className="font-jp text-text-secondary text-[13px] md:text-[14px] leading-tight">
              業務システム 1本
              <br />
              （規模により数千万〜数億円）
            </span>
          </div>
        </div>
        <p className="mt-6 md:mt-8 pt-4 md:pt-5 border-t border-ink/10 font-mincho text-vermilion-dark text-[14px] md:text-[16px] font-bold">
          自分で構築できれば、外注1本ぶんで初年度から回収。
        </p>
      </div>
    </Section>
  );
}
