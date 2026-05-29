import * as React from "react";
import { Section, Connector, Under } from "../components/primitives.jsx";

const ITEMS = [
  "AIを導入した。",
  "社員も多少使っていると聞く。",
  "でも、生産性が上がっている感じがしない。",
  "業務効率化されている実感もない。",
  "従業員に任せきりで、何が起きているかわからない。",
];

export function Diagnosis() {
  const [checked, setChecked] = React.useState([]);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      ITEMS.forEach((_, i) => {
        setTimeout(() => setChecked((c) => Array.from(new Set([...c, i]))), 400 + i * 350);
      });
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (fire(), io.disconnect())),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    const safety = setTimeout(fire, 3000);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <Section label="03 Diagnosis" tone="dark">
      <div ref={ref}>
        <Connector num="03" en="Self Diagnosis" onDark />

        <div className="max-w-3xl mx-auto">
          <h2 className="font-mincho font-bold text-text-onink text-[clamp(22px,5.6vw,30px)] md:text-[clamp(28px,3vw,42px)] leading-snug text-balance mb-8 md:mb-12">
            あなたの会社は、こうなっていませんか？
          </h2>
          <ul className="flex flex-col gap-3 md:gap-4 mb-10 md:mb-14">
            {ITEMS.map((t, i) => {
              const isChecked = checked.includes(i);
              return (
                <li
                  key={i}
                  className={`flex items-start gap-4 transition-opacity duration-500 ${
                    isChecked ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mt-1 inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border transition-all duration-300 ${
                      isChecked
                        ? "bg-vermilion border-vermilion text-white"
                        : "border-text-onink-mute text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className="font-mincho text-text-onink text-[16px] md:text-[20px] leading-snug">
                    {t}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="font-mincho text-text-onink text-[20px] md:text-[clamp(24px,3vw,40px)] leading-snug">
            あれ……本当にAI、
            <br />
            <Under>活用できているのかな？</Under>
          </p>
        </div>
      </div>
    </Section>
  );
}
