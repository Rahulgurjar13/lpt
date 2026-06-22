import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";
import { CountUp } from "./Reveal";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";

const tabs = ["IPM/BBA", "CAT/MBA", "CUET"] as const;
type Tab = (typeof tabs)[number];

const data: Record<Tab, { topper: { name: string; rank: string; institute: string }; stats: { value: number; suffix: string; label: string }[] }> = {
  "IPM/BBA": {
    topper: { name: "Anshi Arora", rank: "AIR 22", institute: "IPMAT Indore 2025" },
    stats: [
      { value: 80, suffix: "+", label: "IIM Indore Selections 2025" },
      { value: 140, suffix: "+", label: "IIM Selections in 2 Years" },
      { value: 320, suffix: "+", label: "Top BBA Selections" },
    ],
  },
  "CAT/MBA": {
    topper: { name: "Rohan Khanna", rank: "99.83%ile", institute: "CAT 2024 · IIM Ahmedabad" },
    stats: [
      { value: 454, suffix: "+", label: "Selections in Top B-Schools" },
      { value: 80, suffix: "+", label: "IIM Selections 2025" },
      { value: 100, suffix: "+", label: "99+ %ilers" },
    ],
  },
  CUET: {
    topper: { name: "Priya Mehta", rank: "AIR 11", institute: "CUET 2024 · DU" },
    stats: [
      { value: 2400, suffix: "+", label: "Central University Selections" },
      { value: 120, suffix: "+", label: "Subject Toppers" },
      { value: 27, suffix: "", label: "Subjects Covered" },
    ],
  },
};

export function Results() {
  const [tab, setTab] = useState<Tab>("CAT/MBA");
  const d = data[tab];

  return (
    <section id="toppers" className="bg-[#FDF6EC] py-12 md:py-16">
      <div className="container-lpt">

        <SectionHeader
          eyebrow="Our Results"
          title="Toppers Made by Mentors, Not Marketing."
          subtitle="Every result on this page is verifiable. Switch tracks to see where our students go."
        />

        {/* ── Tab switcher — refined pill row ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={
                "relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 " +
                (tab === t
                  ? "bg-brand text-white shadow-[0_8px_24px_rgba(218,32,47,0.30)] scale-[1.03]"
                  : "border border-hairline bg-white text-ink hover:border-brand/40 hover:text-brand hover:bg-[#FFF5F5]")
              }
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Main content ── */}
        <Reveal>
          <div key={tab} className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_1fr]">

            {/* ── Topper card ── */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DA202F] to-[#8B0E1A] p-10 text-white shadow-[0_24px_60px_rgba(168,18,31,0.38)]">

              {/* Decorative blobs */}
              <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-14 -left-8 h-60 w-60 rounded-full bg-black/15 blur-3xl" />

              {/* Subtle dot grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Decorative large quote mark */}
              <span
                aria-hidden
                className="absolute right-8 top-4 select-none text-white/10"
                style={{ fontSize: "9rem", fontFamily: "Georgia, serif", lineHeight: 1 }}
              >
                "
              </span>

              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
                  <Star className="h-3 w-3 fill-current" />
                  Star Topper · {tab}
                </span>

                {/* Rank */}
                <h3
                  className="mt-6 h-display text-white"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}
                >
                  {d.topper.rank}
                </h3>

                {/* Name + institute */}
                <div className="mt-4">
                  <p className="text-lg font-bold leading-tight">{d.topper.name}</p>
                  <p className="mt-1 text-[0.85rem] text-white/75">{d.topper.institute}</p>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-white/15" />

                {/* CTA */}
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  View all toppers <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </button>
              </div>
            </div>

            {/* ── Stat cards ── */}
            <div className="grid gap-4">
              {d.stats.map((s, idx) => (
                <div
                  key={s.label}
                  className="lift-card flex items-center gap-5 overflow-hidden rounded-3xl border border-hairline bg-white"
                >
                  {/* Left brand accent bar */}
                  <div
                    className="w-1 self-stretch shrink-0 rounded-r-full"
                    style={{
                      background: idx === 0
                        ? "linear-gradient(180deg, #DA202F 0%, #ff6b7a 100%)"
                        : idx === 1
                        ? "linear-gradient(180deg, #DA202F 0%, #c1121f 100%)"
                        : "linear-gradient(180deg, #A8121F 0%, #DA202F 100%)",
                    }}
                  />

                  <div className="flex flex-1 items-center gap-5 py-6 pr-7">
                    {/* Count */}
                    <div className="h-display text-[2.75rem] leading-none text-brand">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </div>

                    {/* Label */}
                    <div className="flex-1">
                      <div className="text-[0.88rem] font-semibold text-ink leading-snug">
                        {s.label}
                      </div>
                    </div>

                    {/* Shield icon */}
                    <ShieldCheck className="h-5 w-5 shrink-0 text-hairline" strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

        {/* ── Bottom note ── */}
        <Reveal delay={200}>
          <p className="mt-8 text-center text-[0.78rem] text-body">
            All results are independently verifiable.{" "}
            <a href="#" className="font-semibold text-brand underline underline-offset-2 hover:no-underline">
              View full list of selections →
            </a>
          </p>
        </Reveal>

      </div>
    </section>
  );
}
