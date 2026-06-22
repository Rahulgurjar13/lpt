import { FileText, ChevronRight, BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";

const tests = [
  { name: "CAT Mock Test Series", count: "50+ Tests" },
  { name: "CUET UG Mock Test", count: "30+ Tests" },
  { name: "IPMAT Indore Mocks", count: "40+ Tests" },
  { name: "JIPMAT Mock Series", count: "20+ Tests" },
  { name: "Management UG Mocks", count: "25+ Tests" },
  { name: "IIM Bangalore UG (IPMAT)", count: "15+ Tests" },
];

const material = [
  { name: "IPMAT Study Material", desc: "Concept book · Practice set · PYQ" },
  { name: "CUET UG Study Material", desc: "27 subjects · NCERT-aligned" },
  { name: "CAT Modules", desc: "QA · VARC · LRDI complete set" },
];

export function MockAndMaterial() {
  return (
    <>
      <section className="bg-[#FDF6EC] py-12 md:py-16">
        <div className="container-lpt grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Mock Tests"
            title={<>Practice Like the Real <span className="text-brand">Exam Day</span></>}
            subtitle="Proctored, AI-analyzed, and benchmarked against real toppers. Every mock builds the muscle for D-Day."
          />
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-2 auto-rows-fr">
              {tests.map((t) => (
                <li key={t.name}>
                  <a
                    href="#"
                    className="lift-card group flex h-full items-center justify-between gap-4 rounded-2xl border border-hairline bg-white p-5 md:p-6 transition-colors hover:border-brand/40 hover:bg-[#FFF5F5]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="icon-bubble h-11 w-11 shrink-0">
                        <FileText className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <div className="font-semibold text-ink leading-snug">{t.name}</div>
                        <div className="text-xs text-body mt-0.5">{t.count}</div>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-body transition-all group-hover:translate-x-1 group-hover:text-brand" strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-lpt grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-[#FFEED7]">
              <div className="absolute inset-0 grid place-items-center">
                <BookOpen className="h-40 w-40 text-brand/20" strokeWidth={1} />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur shadow-[0_8px_16px_rgba(0,0,0,0.05),0_24px_48px_rgba(0,0,0,0.08)]">
                <div className="eyebrow text-[11px]">Crafted in-house</div>
                <p className="mt-1 text-sm text-ink">
                  Every page rewritten yearly. Updated to the latest pattern. No photocopied scans.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Study Material"
              title={<>Books Built by the People Who <span className="text-brand">Set the Bar</span></>}
              subtitle="Authored by senior mentors with decades of CAT/IPM experience — not freelancers."
            />
            <ul className="mt-8 space-y-4">
              {material.map((m) => (
                <li key={m.name}>
                  <a
                    href="#"
                    className="lift-card group flex items-center justify-between gap-4 rounded-2xl border border-hairline bg-white p-5 md:p-6 hover:border-brand/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="icon-bubble h-11 w-11 shrink-0">
                        <BookOpen className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <div className="font-semibold text-ink leading-snug">{m.name}</div>
                        <div className="text-xs text-body mt-0.5">{m.desc}</div>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-body transition-all group-hover:translate-x-1 group-hover:text-brand" strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
