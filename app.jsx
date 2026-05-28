/* App: top nav + reveal observer + Tweaks panel */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1d8fd1",
  "displayFont": "Shippori Mincho B1",
  "bodyFont": "Noto Sans JP",
  "paperTone": "cool",
  "chapter": "editorial"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  "#1d8fd1", // Chatwork-style blue (default)
  "#0e3a5c", // deep navy
  "#2966e6", // royal blue
  "#10a37f"  // teal accent
];

const PAPER_TONES = {
  cool:  { paper: "#f6f9fc", soft: "#eef3f9", card: "#ffffff" },
  warm:  { paper: "#f1ece2", soft: "#ede7da", card: "#faf6ec" },
  ivory: { paper: "#f7f2e6", soft: "#f0eada", card: "#fbf6ea" },
  mono:  { paper: "#ededed", soft: "#e3e3e3", card: "#f5f5f5" }
};

// Reveal animations are now pure CSS (see styles.css).

/* Scroll fade-in for major sections.
   Uses Web Animations API (.animate) which works in iframes where
   CSS keyframes/transitions are sometimes frozen. JS also sets a final
   "visible" inline style and a safety timer so nothing ever stays hidden. */
function useScrollFade() {
  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section'));

    sections.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(48px)';
      el.style.transition = 'opacity 900ms cubic-bezier(.2,.7,.2,1), transform 900ms cubic-bezier(.2,.7,.2,1)';
      el.style.willChange = 'opacity, transform';
    });

    const reveal = (el) => {
      if (el.dataset.faded === '1') return;
      el.dataset.faded = '1';
      // Plain inline style mutation. Works in real browsers (smooth fade
      // via the transition we set). If transition can't fire, the property
      // simply jumps to the new value — element still becomes visible.
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      setTimeout(() => { el.style.willChange = ''; }, 1100);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      // Only reveal when the section is meaningfully on-screen, so
      // off-screen ones don't all fire at once on mount.
      { threshold: 0.15, rootMargin: '0px 0px -20% 0px' }
    );
    sections.forEach((el) => io.observe(el));

    // Global safety: reveal everything after 6s no matter what
    const safety = setTimeout(() => {
      sections.forEach((el) => reveal(el));
    }, 6000);

    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);
}

function TopNav({ overDark }) {
  return (
    <nav className={'topnav ' + (overDark ? 'over-dark' : '')}>
      <div className="brand">
        <span className="brand-mark">AI</span>
        <span>リスキリングキャンプ</span>
      </div>
      <div className="nav-links">
        <a href="#course">研修内容</a>
        <a href="#cta">無料相談</a>
        <a href="#cta" className="btn ink" style={{ padding: '10px 18px', fontSize: 13 }}>
          資料請求
          <span className="arrow"></span>
        </a>
      </div>
    </nav>
  );
}

function shade(hex, percent) {
  const c = hex.replace('#','');
  const num = parseInt(c, 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + Math.round(255 * percent / 100)));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + Math.round(255 * percent / 100)));
  const b = Math.max(0, Math.min(255, (num & 0xff) + Math.round(255 * percent / 100)));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [overDark, setOverDark] = React.useState(true);

  useScrollFade();

  React.useEffect(() => {
    const darks = Array.from(document.querySelectorAll('.hero, .section.dark, .cta-block'));
    function onScroll() {
      const probe = 80;
      const isDark = darks.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      setOverDark(isDark);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--vermilion', t.accent);
    root.style.setProperty('--vermilion-dark', shade(t.accent, -18));
    root.style.setProperty('--font-mincho', `"${t.displayFont}", "Yu Mincho", serif`);
    root.style.setProperty('--font-jp', `"${t.bodyFont}", "Hiragino Sans", "Yu Gothic", sans-serif`);
    const tone = PAPER_TONES[t.paperTone] || PAPER_TONES.warm;
    root.style.setProperty('--paper', tone.paper);
    root.style.setProperty('--paper-soft', tone.soft);
    root.style.setProperty('--paper-card', tone.card);
    // Chapter style tweak is deprecated (single clean pattern now)
    document.body.classList.remove('chap-editorial', 'chap-stamped', 'chap-architectural');
  }, [t.accent, t.displayFont, t.bodyFont, t.paperTone, t.chapter]);

  return (
    <React.Fragment>
      <TopNav overDark={overDark} />
      <Hero />
      <Evidence />
      <Diagnosis />
      <Cause />
      <Essence />
      <Solution />
      <MidCTA
        eyebrow="Free Consultation"
        title={<>まずは、話を聞きにくる感覚で。</>}
        sub="自社の業務にどう組み込めるか、まだ言葉にできない——その段階で結構です。30分のオンライン無料相談で、研修内容と自社への適用イメージをお伝えします。"
      />
      <ROI />
      <Trust />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent" />
        <TweakColor
          label="Signature color"
          value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak('accent', v)}
        />

        <TweakSection label="Paper" />
        <TweakRadio
          label="Background tone"
          value={t.paperTone}
          options={['cool', 'warm', 'ivory', 'mono']}
          onChange={(v) => setTweak('paperTone', v)}
        />

        <TweakSection label="Type" />
        <TweakSelect
          label="Display font"
          value={t.displayFont}
          options={[
            { value: 'Shippori Mincho B1', label: 'Shippori Mincho' },
            { value: 'Noto Serif JP',      label: 'Noto Serif JP' },
            { value: 'Noto Sans JP',       label: 'Noto Sans JP (Sans)' },
          ]}
          onChange={(v) => setTweak('displayFont', v)}
        />
        <TweakSelect
          label="Body font"
          value={t.bodyFont}
          options={[
            { value: 'Noto Sans JP',      label: 'Noto Sans JP' },
            { value: 'Shippori Mincho B1', label: 'Shippori Mincho' },
          ]}
          onChange={(v) => setTweak('bodyFont', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
