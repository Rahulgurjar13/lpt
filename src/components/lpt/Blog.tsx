import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { img: b1, date: "12 Mar 2026", title: "The 90-Day CAT Plan That Actually Works", excerpt: "A realistic, week-by-week roadmap for the last 90 days before CAT — built around what 99-percentilers actually do." },
  { img: b2, date: "04 Mar 2026", title: "IPMAT QA: 7 Question Types You'll See Every Year", excerpt: "Pattern-spotting beats memorising. Here are the seven QA archetypes IPMAT keeps recycling — and how to solve them fast." },
  { img: b3, date: "27 Feb 2026", title: "CUET Domain Strategy: Picking the Right Subjects", excerpt: "Your subject combination decides your university shortlist. A senior mentor breaks down the strategy nobody tells you about." },
];

export function Blog() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-lpt">
        <SectionHeader
          align="left"
          eyebrow="Insights"
          title={<>From the <span className="text-brand">LPT Journal</span></>}
          subtitle="Strategy guides, decoded patterns, and mentor playbooks — written by the people who teach."
          action={
            <a href="#" className="btn-secondary text-sm">
              View All <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <a
                href="#"
                className="lift-card group block h-full overflow-hidden rounded-3xl border border-hairline bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur">
                    {p.date}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="h-display text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-body">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
