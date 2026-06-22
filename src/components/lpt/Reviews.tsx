import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./shared";

const reviews = [
  {
    quote:
      "LPT didn't sell me a dream — they handed me a daily plan. My mentor knew my weak topics before I did. That's how I cracked IIM Indore.",
    name: "Aarav Sharma",
    institute: "IIM Indore · IPM 2024",
  },
  {
    quote:
      "The mocks were brutally close to the real CAT. By the time I sat in the exam hall, the screen looked familiar. Six months, two attempts — done.",
    name: "Diya Kapoor",
    institute: "IIM Bangalore · CAT 2024",
  },
  {
    quote:
      "I joined CUET prep with zero strategy. My mentor restructured my whole study plan in our first call. DU was never going to be a maybe after that.",
    name: "Vihaan Joshi",
    institute: "Delhi University · CUET 2024",
  },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="py-12 md:py-16">
      <div className="container-lpt grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
        <SectionHeader
          align="left"
          eyebrow="Reviews"
          title={<>What Students Actually <span className="text-brand">Say</span></>}
          subtitle="Unfiltered. Public. Verified through institute records."
        />

        <div className="relative">
          <div className="lift-card relative overflow-hidden rounded-3xl border border-hairline bg-white p-8 md:p-10">
            {/* Elegant small quote mark above the text */}
            <span
              aria-hidden
              className="block text-brand/20 mb-2"
              style={{ fontSize: "4.5rem", fontFamily: "Georgia, serif", lineHeight: 0.8 }}
            >
              "
            </span>
            
            <div className="relative z-10">
              <p className="h-display text-2xl leading-[1.4] text-ink md:text-[28px]">
                {r.quote}
              </p>
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full text-lg font-bold text-brand shrink-0"
                    style={{ background: "#FFEED7" }}
                  >
                    {r.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{r.name}</div>
                    <div className="text-xs text-body">{r.institute}</div>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-ink transition-all hover:border-brand hover:text-brand bg-white"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => setI((i + 1) % reviews.length)}
                    className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white transition-all hover:bg-[#c1121f]"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
