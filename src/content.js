/**
 * Central content file — change copy here when spinning up a new LP.
 *
 * Today only the MidCTA + top nav read from here; the section files
 * still have their copy inline because that's easier to iterate on
 * while a section's layout is in flux. As sections settle, move their
 * strings into this file so a new LP becomes "fork → edit content.js
 * → ship".
 */

export const content = {
  brand: {
    short: "AI",
    full: "リスキリングキャンプ",
  },
  // External destinations for every CTA on the page.
  links: {
    consultation: "https://neo-ai-camp.vercel.app/consultation",
    document: "https://neo-ai-camp.vercel.app/document",
  },
  midCTA: {
    eyebrow: "Free Consultation",
    title: "まずは、話を聞きにくる感覚で。",
    sub:
      "自社の業務にどう組み込めるか、まだ言葉にできない——その段階で結構です。" +
      "30分のオンライン無料相談で、研修内容と自社への適用イメージをお伝えします。",
  },
};
