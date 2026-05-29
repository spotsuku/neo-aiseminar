import * as React from "react";
/* Sections 3, 4, 5 — 自己診断 / 原因提示 / 本質の定義 */

function Diagnosis() {
  const [checked, setChecked] = React.useState([]);
  const items = [
    "AIを導入した。",
    "社員も多少使っていると聞く。",
    "でも、生産性が上がっている感じがしない。",
    "業務効率化されている実感もない。",
    "従業員に任せきりで、何が起きているかわからない。",
  ];

  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      items.forEach((_, i) => {
        setTimeout(() => setChecked((c) => Array.from(new Set([...c, i]))), 400 + i * 350);
      });
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { fire(); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(ref.current);
    const onScroll = () => {
      const r = ref.current?.getBoundingClientRect();
      if (r && r.top < window.innerHeight * 0.85) { fire(); io.disconnect(); window.removeEventListener('scroll', onScroll); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const safety = setTimeout(fire, 3000);
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); clearTimeout(safety); };
  }, []);

  return (
    <section className="section dark" data-screen-label="03 Diagnosis" ref={ref}>
      <div className="wrap">
        <div className="connector">
          <span className="num">03</span>
          <span>Self Diagnosis</span>
          <span className="bar"></span>
          <span>あなたの会社はこうなっていませんか</span>
        </div>

        <div className="diag-frame">
          <p className="eyebrow" style={{ color: 'var(--text-onink-mute)' }}>
            <span>あなたの会社は、こうなっていませんか</span>
          </p>
          <ul className="diag-list">
            {items.map((t, i) => (
              <li key={i} className={checked.includes(i) ? 'checked' : ''}>
                <span className="check"></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="diag-question">
            あれ……本当にAI、<br />
            <span className="under" style={{ backgroundImage: 'linear-gradient(transparent 65%, rgba(200,49,27,0.45) 65%)' }}>活用できているのかな？</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Cause() {
  const reasons = [
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

  return (
    <section className="section" data-screen-label="04 Cause">
      <div className="wrap">

        <div className="cause-head">
          <p className="eyebrow">AI活用が、同じ場所で止まる3つの理由</p>
          <h2 className="display lg">
            なぜ、AIを使っているのに<br />
            <span className="under">変わらないのか。</span>
          </h2>
          <p className="lede">
            全国の業績の上がっていない多くの企業が、AIを業務に活かそうとしています。
            けれど、その大半が、ここで止まっています。
          </p>
        </div>

        <div className="reason-stack">
          {reasons.map((r) => (
            <article key={r.n} className="reason-band">
              <div className="rb-num-col">
                <span className="rb-num">{r.n}</span>
                <span className="rb-num-label">Reason</span>
              </div>
              <div className="rb-body">
                <h3 className="rb-title">{r.title}</h3>
                <p className="rb-lede">{r.lede}</p>
                <p className="rb-text">{r.body}</p>
                <p className="rb-contrast">
                  <span className="rb-contrast-mark">→</span> {r.contrast}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="cause-close">
          <p className="cc-text">
            この3つの状態を抜け出すには、<br />
            AIを<span className="under">「業務そのものに組み込む」</span>判断と、<br />
            <span className="under">「組織全体として変革する」</span><span style={{ whiteSpace: 'nowrap' }}>指示が必要です。</span>
          </p>
          <p className="cc-attribution">
            <span className="cc-attr-mark">——</span>
            そしてそれは、<strong>経営層の仕事です。</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function Essence() {
  return (
    <section className="section soft" data-screen-label="05 Essence">
      <div className="wrap">
        <div className="connector">
          <span className="num">05</span>
          <span>The Real Activation</span>
          <span className="bar"></span>
          <span>AI活用の本質の定義</span>
        </div>

        <p className="eyebrow">本当の意味で「AIを活用できている」状態とは</p>
        <h2 className="essence-quote" style={{ marginTop: 24 }}>
          業務<span className="under">そのもの</span>にAIを組み込むこと。<br />
          そのとき初めて、会社は本当の意味でAIを活用している状態になります。
        </h2>

        <div className="essence-decision">
          <p className="ed-text">
            その意思決定と<br />
            社内に対するゴーサインを<br />
            出せるのは——
          </p>
          <p className="ed-answer">
            社長・<br />
            DX推進責任者である<br />
            <span className="accent">経営層</span>だけ。
          </p>
        </div>

        <div className="essence-steps">
          <div className="essence-step">
            <div className="dot">01</div>
            <p className="h">トップが体感する</p>
            <p className="d">
              AIで何ができるかを、頭ではなく手で理解する。<br />
              抽象的な指示が、具体的な指示に変わる。
            </p>
          </div>
          <div className="essence-step">
            <div className="dot">02</div>
            <p className="h">判断軸が固まる</p>
            <p className="d">
              何に投資すべきか、何はコスパが合わないか。<br />
              経営判断に直結する目を養う。
            </p>
          </div>
          <div className="essence-step">
            <div className="dot">03</div>
            <p className="h">ゴーサインを出す</p>
            <p className="d">
              社内へのゴーサインを、自分の言葉で出せる。<br />
              業務そのものにAIが組み込まれていく。
            </p>
          </div>
        </div>

        <p className="kicker" style={{ marginTop: 80, textAlign: 'left' }}>
          経営者が変わらなければ、会社は変わらない。<br />
          <span className="accent">経営者がAIで何ができるかを体感していなければ、何も始まらない。</span>
        </p>
      </div>
    </section>
  );
}

export { Diagnosis, Cause, Essence };
