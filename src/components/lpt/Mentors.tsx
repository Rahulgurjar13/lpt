import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./shared";
import m1 from "@/assets/mentor-1.jpg";
import m2 from "@/assets/mentor-2.jpg";
import m3 from "@/assets/mentor-3.jpg";
import m4 from "@/assets/mentor-4.jpg";

const mentors = [
  { img: m1, name: "Manoj Mahajan", role: "Sr. LRDI Mentor", years: "22 Yrs" },
  { img: m2, name: "Dr. Rashmi Verma", role: "Head of VARC", years: "18 Yrs" },
  { img: m3, name: "Anand Krishnan", role: "Sr. QA Mentor", years: "20 Yrs" },
  { img: m4, name: "Kavya Nair", role: "IPMAT Lead", years: "14 Yrs" },
  { img: m1, name: "Vikram Iyer", role: "CUET Domain Head", years: "16 Yrs" },
  { img: m2, name: "Meera Bansal", role: "GD-PI-WAT Expert", years: "12 Yrs" },
];

export function Mentors() {
  const [start, setStart] = useState(0);
  const visible = 4;
  const max = mentors.length - visible;

  return (
    <section className="bg-[#FDF6EC] py-12 md:py-16">
      <div className="container-lpt">
        <SectionHeader
          align="left"
          eyebrow="Faculty"
          title={<>Learn from <span className="text-brand">The Best</span></>}
          subtitle="Mentors who've shaped two decades of IIM admits — not influencers with a ring light."
          action={
            <div className="flex gap-2">
              <button
                onClick={() => setStart(Math.max(0, start - 1))}
                disabled={start === 0}
                className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-white text-ink transition-all hover:border-brand hover:text-brand disabled:opacity-40"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                onClick={() => setStart(Math.min(max, start + 1))}
                disabled={start === max}
                className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white transition-all hover:bg-brand-dark disabled:opacity-40"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          }
        />

        <div className="mt-12 overflow-hidden">
          <div
            className="grid grid-flow-col grid-cols-[repeat(auto-fit,minmax(240px,1fr))] auto-cols-[minmax(240px,1fr)] gap-5 transition-transform duration-500 md:auto-cols-[calc(25%-15px)]"
            style={{ transform: `translateX(calc(-${start} * (100% / ${visible} + 5px)))` }}
          >
            {mentors.map((m, i) => (
              <article key={i} className="lift-card overflow-hidden rounded-3xl border border-hairline bg-white">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#FFEED7]">
                  <img
                    src={m.img}
                    alt={m.name}
                    width={768}
                    height={896}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand backdrop-blur">
                    {m.years}
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-bold text-ink">{m.name}</div>
                  <div className="mt-0.5 text-sm text-body">{m.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
