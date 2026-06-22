import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";
import {
  Users,
  GraduationCap,
  BookMarked,
  FileCheck2,
  Headphones,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */
const hero = {
  stat: "24",
  unit: "Years",
  label: "of Legacy",
  desc: "Founded by IIM faculty. Every founder has sat on the other side of the CAT paper.",
  cta: "Our story",
};

const pillars = [
  {
    icon: Users,
    stat: "10+",
    title: "Yrs Avg Faculty",
    desc: "Every mentor has at least a decade of CAT / IPM teaching under their belt.",
  },
  {
    icon: GraduationCap,
    stat: "100+",
    title: "IIM Calls Last Cycle",
    desc: "Verifiable selections — not marketing numbers. Ask us for the list.",
  },
  {
    icon: BookMarked,
    stat: "100%",
    title: "Original Study Material",
    desc: "Modules rewritten every year. Zero photocopies. Always exam-relevant.",
  },
  {
    icon: FileCheck2,
    stat: "AI",
    title: "Adaptive Test Series",
    desc: "AI-graded mocks pinpoint your exact weak areas and auto-schedule drills.",
  },
  {
    icon: Headphones,
    stat: "1-on-1",
    title: "Mentorship Access",
    desc: "Direct line to your mentor — not a chatbot, not a call centre.",
  },
];

/* ── Component ────────────────────────────────────────── */
export function WhyLPT() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-lpt">

        <SectionHeader
          eyebrow="Why LPT"
          title={<>Why Aspirants Trust <span className="text-brand">LPT</span></>}
          subtitle="It's not the videos, the tests, or the slogans — it's the people behind them."
        />

        {/* ═══════════════════════════════════════════
            ROW 1  —  Hero card (left) + 2 tall cards (right)
        ══════════════════════════════════════════════ */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {/* ── Hero: 24 Years ── */}
          <Reveal className="md:col-span-2">
            <article
              className="lift-card group relative h-full overflow-hidden rounded-3xl border border-hairline bg-white p-9"
              style={{ minHeight: "240px" }}
            >
              {/* Warm radial wash */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(65% 80% at 95% 5%, #FFEED7 0%, transparent 65%)",
                }}
              />

              {/* Decorative large number watermark */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-6 top-0 select-none font-black leading-none text-brand/[0.06]"
                style={{
                  fontSize: "9rem",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.04em",
                }}
              >
                24
              </span>

              <div className="flex h-full flex-col justify-between">
                <div>
                  {/* Icon bubble */}
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-brand">
                    <Trophy className="h-6 w-6" strokeWidth={1.75} />
                  </span>

                  {/* Stat callout */}
                  <div className="mt-5 flex items-end gap-2">
                    <span
                      className="h-display leading-none text-brand"
                      style={{ fontSize: "clamp(3rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}
                    >
                      {hero.stat}
                    </span>
                    <span className="mb-1 text-xl font-bold text-ink/60">
                      {hero.unit} {hero.label}
                    </span>
                  </div>

                  <p className="mt-3 max-w-sm text-[0.88rem] leading-relaxed text-body">
                    {hero.desc}
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-3"
                >
                  {hero.cta} <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </a>
              </div>
            </article>
          </Reveal>

          {/* ── Pillar 0: Faculty ── */}
          <Reveal delay={80}>
            <article className="lift-card group relative h-full overflow-hidden rounded-3xl border border-hairline bg-white p-7 transition-colors hover:border-brand/25">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-brand">
                <Users className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p
                className="mt-4 h-display leading-none text-brand"
                style={{ fontSize: "2.25rem", letterSpacing: "-0.03em" }}
              >
                {pillars[0].stat}
              </p>
              <h3 className="mt-1.5 h-display text-[1.05rem] leading-snug">{pillars[0].title}</h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-body">{pillars[0].desc}</p>
            </article>
          </Reveal>

        </div>

        {/* ═══════════════════════════════════════════
            ROW 2  —  4 even cards (fills perfectly)
        ══════════════════════════════════════════════ */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {pillars.slice(1).map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i + 2) * 80}>
                <article className="lift-card group relative h-full overflow-hidden rounded-3xl border border-hairline bg-white p-6 transition-colors hover:border-brand/25">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cream text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p
                    className="mt-4 h-display leading-none text-brand"
                    style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}
                  >
                    {f.stat}
                  </p>
                  <h3 className="mt-1 h-display text-[0.95rem] leading-snug">{f.title}</h3>
                  <p className="mt-2 text-[0.78rem] leading-relaxed text-body">{f.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ── Bottom tagline ── */}
        <Reveal delay={400}>
          <div className="mt-10 flex items-center justify-center gap-2.5">
            <Sparkles className="h-4 w-4 text-brand" strokeWidth={1.75} />
            <p className="text-[0.82rem] font-medium text-body">
              Trusted by <span className="font-bold text-ink">1,50,000+ students</span> across India since 2001.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}


