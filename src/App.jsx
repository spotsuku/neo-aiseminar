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
import { CtaBanner } from "./sections/CtaBanner.jsx";
import { Footer } from "./sections/Footer.jsx";
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

export function App() {
  useScrollFade();

  return (
    <>
      <Hero />
      <Evidence />
      <CtaBanner
        eyebrow="Free Consultation"
        headline="自社の業務に、AIはどう使える？まずは話を聞きにくる感覚で。"
        sub="30分のオンライン無料相談で、受講内容と自社への適用イメージをお伝えします。"
      />
      <Diagnosis />
      <Cause />
      <Essence />
      <Solution />
      <MidCTA {...content.midCTA} />
      <ROI />
      <CtaBanner
        eyebrow="Next Step"
        headline="ROIが見えたら、あとは動くだけ。次の期は満席になる前に。"
        sub="定員8社・少人数制。次の開催日はお問い合わせください。"
      />
      <Trust />
      <CTA />
      <Footer />
    </>
  );
}
