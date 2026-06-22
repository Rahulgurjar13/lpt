import { Reveal, CountUp } from "./Reveal";
import { Eyebrow } from "./shared";
import { ArrowRight, Trophy } from "lucide-react";
import scholarship from "@/assets/scholarship.png";

const stats = [
  { v: 100, s: "%", label: "Max Scholarship" },
  { v: 5000, s: "+", label: "Students Benefited" },
  { v: 60, s: "L+", label: "Awarded / Year" },
  { v: 10, s: "+", label: "Eligible Courses" },
];

export function Scholarship() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-lpt">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[#FFEED7] p-8 md:p-14">
            <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <Eyebrow>Scholarship</Eyebrow>
                <h2 className="mt-3 h-display text-3xl sm:text-4xl md:text-5xl">
                  Apply for the <span className="text-brand">LPT Scholarship</span> Admission Test
                </h2>
                <p className="mt-5 max-w-lg text-body">
                  Up to 100% off course fees for deserving aspirants. One short test. Lifelong impact.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="btn-primary">
                    Apply for CAT / MBA <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </button>
                  <button className="btn-secondary">
                    Apply for IPM / BBA <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </button>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="h-display text-3xl text-ink">
                        <CountUp to={s.v} />
                        <span className="text-brand">{s.s}</span>
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-body">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-full bg-white/40 blur-2xl" />
                <img
                  src={scholarship}
                  alt="LPT Scholarship trophy"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="mx-auto h-72 w-72 object-contain drop-shadow-[0_24px_48px_rgba(218,32,47,0.18)] md:h-96 md:w-96"
                />
                <div className="absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                  <Trophy className="h-4 w-4 text-brand" strokeWidth={2} />
                  Next LSAT · 12 Apr
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
