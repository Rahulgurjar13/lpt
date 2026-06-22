import { useState } from "react";
import { Play, X } from "lucide-react";
import { SectionHeader } from "./shared";

const vids = [
  { id: "dQw4w9WgXcQ", name: "Anshi Arora", rank: "AIR 22 · IPMAT 2025", color: "#FFE9D2" },
  { id: "dQw4w9WgXcQ", name: "Rohan Khanna", rank: "99.83%ile · CAT 2024", color: "#FFD7CC" },
  { id: "dQw4w9WgXcQ", name: "Priya Mehta", rank: "AIR 11 · CUET 2024", color: "#FFEED7" },
  { id: "dQw4w9WgXcQ", name: "Karan Singh", rank: "IIM Calcutta · CAT 2023", color: "#FCE3DA" },
  { id: "dQw4w9WgXcQ", name: "Sneha Iyer", rank: "AIR 7 · IPMAT 2024", color: "#FFEED7" },
  { id: "dQw4w9WgXcQ", name: "Ayaan Verma", rank: "99.6%ile · XAT 2024", color: "#FFD7CC" },
];

export function VideoTestimonials() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="bg-[#FDF6EC] py-12 md:py-16">
      <div className="container-lpt">
        <SectionHeader
          eyebrow="Student Stories"
          title={<>Why They Chose <span className="text-brand">LPT</span>?</>}
          subtitle="Hear it straight from the students who cracked it — unscripted, on camera."
        />
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="marquee-track px-6">
            {[...vids, ...vids].map((v, i) => (
              <button
                key={i}
                onClick={() => setOpen(v.id)}
                className="group lift-card relative flex h-[310px] w-[270px] shrink-0 flex-col overflow-hidden rounded-[28px] border border-hairline bg-white p-2.5 text-left transition-all hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >
                {/* ── Premium Thumbnail Area ── */}
                <div
                  className="relative flex-1 w-full overflow-hidden rounded-[20px] border border-black/[0.04]"
                  style={{
                    background: `radial-gradient(circle at 20% 0%, ${v.color} 0%, transparent 80%), radial-gradient(circle at 90% 100%, #ffffff 0%, #f4f5f7 100%)`,
                  }}
                >
                  {/* Subtle dot pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* Play Button with Glassmorphism Rings */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute h-16 w-16 rounded-full bg-white/40 backdrop-blur-sm transition-all duration-500 ease-out group-hover:scale-[1.3] group-hover:bg-white/50" />
                      <div className="absolute h-12 w-12 rounded-full bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-500 group-hover:scale-110" />
                      <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-brand text-white shadow-[0_4px_16px_rgba(218,32,47,0.4)] transition-transform duration-300 group-hover:scale-95">
                        <Play className="h-4 w-4 translate-x-[1px] fill-current" strokeWidth={0} />
                      </span>
                    </div>
                  </div>

                  {/* Floating Pill Label */}
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/30 backdrop-blur-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white border border-white/10">
                    Play Story
                  </div>
                </div>

                {/* ── Text Content ── */}
                <div className="px-3 pb-3 pt-4">
                  <div className="font-bold text-ink text-[1.1rem] leading-tight">{v.name}</div>
                  <div className="mt-1.5 text-[0.75rem] font-bold uppercase tracking-wider text-brand">
                    {v.rank}
                  </div>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 p-4 backdrop-blur-sm fade-up">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setOpen(null)}
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white text-ink"
              aria-label="Close video"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
            <div className="overflow-hidden rounded-2xl bg-black aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${open}?autoplay=1`}
                title="Student testimonial"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
