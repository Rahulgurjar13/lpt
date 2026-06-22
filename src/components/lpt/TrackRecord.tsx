import { CountUp, Reveal } from "./Reveal";
import { Eyebrow } from "./shared";
import { ArrowRight, GraduationCap, Calendar, BookOpen, Users } from "lucide-react";

const stats = [
  { v: 100, s: "+", label: "IIM Calls in 2025", icon: <GraduationCap className="h-5 w-5" strokeWidth={1.75} />, size: "lg" },
  { v: 24, s: "+", label: "Years of Legacy", icon: <Calendar className="h-5 w-5" strokeWidth={1.75} />, size: "sm" },
  { v: 10, s: "+", label: "Yr Avg Teacher Exp.", icon: <BookOpen className="h-5 w-5" strokeWidth={1.75} />, size: "sm" },
  { v: 150000, s: "+", label: "Students Mentored", icon: <Users className="h-5 w-5" strokeWidth={1.75} />, size: "lg" },
];

export function TrackRecord({ onBook }: { onBook: () => void }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-lpt">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[#FFEED7] p-8 md:p-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <Eyebrow>Track Record</Eyebrow>
                <h2 className="mt-3 h-display text-3xl sm:text-4xl md:text-5xl">
                  LPT's Track Record of <span className="text-brand">Trust</span> &amp; Results
                </h2>
                <p className="mt-5 max-w-md text-body">
                  Two decades of teaching India's brightest aspirants. The numbers tell the story —
                  but the careers we've shaped tell it louder.
                </p>
                <button onClick={onBook} className="btn-primary mt-8">
                  Schedule a Free Session <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </button>
              </div>

              {/* Bento stat grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={
                      "lift-card rounded-3xl border border-white/60 bg-white p-6 " +
                      (s.size === "lg" ? "md:col-span-1 md:row-span-1" : "")
                    }
                  >
                    <span className="icon-bubble">{s.icon}</span>
                    <div className="mt-5 h-display text-4xl md:text-5xl">
                      <CountUp to={s.v} />
                      <span className="text-brand">{s.s}</span>
                    </div>
                    <div className="mt-1 text-sm font-medium text-body">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
