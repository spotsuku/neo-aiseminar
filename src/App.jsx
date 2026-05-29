import * as React from "react";
import { Hero } from "./sections/Hero.jsx";
import { Evidence } from "./sections/Evidence.jsx";
import { Diagnosis } from "./sections/Diagnosis.jsx";
import { Cause } from "./sections/Cause.jsx";
import { Essence } from "./sections/Essence.jsx";
import { Solution } from "./sections/Solution.jsx";
import { ROI } from "./sections/ROI.jsx";
import { Trust } from "./sections/Trust.jsx";
import { CTA } from "./sections/CTA.jsx";
import { MidCTA } from "./sections/MidCTA.jsx";
import { Footer } from "./sections/Footer.jsx";
import { TopNav } from "./components/TopNav.jsx";
import { content } from "./content.js";

/**
 * Scroll-fade for every section. Uses inline styles so it works the
 * same in iframes where CSS-driven transitions sometimes don't fire.
 */
function useScrollFade() {
  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-screen-label]"));

    sections.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(48px)";
      el.style.transition =
        "opacity 900ms cubic-bezier(.2,.7,.2,1), transform 900ms cubic-bezier(.2,.7,.2,1)";
      el.style.willChange = "opacity, transform";
    });

    const reveal = (el) => {
      if (el.dataset.faded === "1") return;
      el.dataset.faded = "1";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      setTimeout(() => {
        el.style.willChange = "";
      }, 1100);
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
      { threshold: 0.15, rootMargin: "0px 0px -20% 0px" }
    );
    sections.forEach((el) => io.observe(el));

    // Safety: anything still hidden after 6s is forced visible.
    const safety = setTimeout(() => sections.forEach((el) => reveal(el)), 6000);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);
}

/**
 * TopNav swaps to a translucent-dark style when scrolled over a dark
 * section. Detection is by data-tone="dark" set on the section.
 */
function useOverDark() {
  const [overDark, setOverDark] = React.useState(true);
  React.useEffect(() => {
    const darks = Array.from(document.querySelectorAll('[data-tone="dark"]'));
    const onScroll = () => {
      const probe = 80;
      const isDark = darks.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      setOverDark(isDark);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return overDark;
}

export function App() {
  useScrollFade();
  const overDark = useOverDark();

  return (
    <>
      <TopNav overDark={overDark} />
      <Hero />
      <Evidence />
      <Diagnosis />
      <Cause />
      <Essence />
      <Solution />
      <MidCTA {...content.midCTA} />
      <ROI />
      <Trust />
      <CTA />
      <Footer />
    </>
  );
}
