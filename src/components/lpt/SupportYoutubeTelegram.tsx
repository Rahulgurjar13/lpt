import { Phone, Youtube, Send, Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "./shared";
import phone from "@/assets/telegram-phone.png";

const desks = [
  { label: "CAT / MBA Support", number: "+91 91166 95959", hours: "Mon–Sat · 9 AM – 9 PM" },
  { label: "IPM / BBA Support", number: "+91 91166 93939", hours: "Mon–Sat · 9 AM – 9 PM" },
  { label: "CUET Support", number: "+91 91166 94949", hours: "Mon–Sat · 9 AM – 9 PM" },
];

const channels = [
  { name: "CAT by LPT", subs: "1.2M Subscribers", track: "CAT/MBA" },
  { name: "IPMAT by LPT", subs: "640K Subscribers", track: "IPM/BBA" },
  { name: "CUET by LPT", subs: "420K Subscribers", track: "CUET" },
];

export function SupportYoutubeTelegram() {
  return (
    <>
      {/* Ultra-Compact Professional Support Desk */}
      <section id="support" className="bg-[#FDF6EC] py-12 md:py-16">
        <div className="container-lpt flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm shrink-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Support Desk</div>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-[2.5rem]">
              Real Humans.<br />Real Fast.
            </h2>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-body">
              Three dedicated lines — one for each program. No bots, no IVR mazes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:gap-12">
            {desks.map((d) => (
              <a
                key={d.label}
                href={`tel:${d.number.replace(/\s/g, "")}`}
                className="group block"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-body">
                  <Phone className="h-3 w-3 text-brand" strokeWidth={2.5} />
                  {d.label}
                </div>
                <div className="mt-2 font-display text-[1.5rem] font-bold tracking-tight text-ink transition-colors group-hover:text-brand">
                  {d.number}
                </div>
                <div className="mt-1.5 text-[11px] font-medium text-body/70">
                  {d.hours}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className="py-12 md:py-16">
        <div className="container-lpt">
          <SectionHeader
            eyebrow="YouTube"
            title={<>Free Classes on <span className="text-brand">YouTube</span></>}
            subtitle="Three channels. Three exams. Hundreds of full-length lectures — completely free."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {channels.map((c, i) => (
              <a
                key={c.name}
                href="#"
                className="group lift-card flex flex-col overflow-hidden rounded-[2rem] border border-hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)]"
              >
                {/* Premium Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-ink">
                  {/* Ambient Mesh Gradients */}
                  {i === 0 && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#DA202F]/60 via-ink to-ink" />
                  )}
                  {i === 1 && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#FFEED7]/30 via-ink to-ink" />
                  )}
                  {i === 2 && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-ink to-ink" />
                  )}
                  
                  {/* Subtle Grid Texture */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Program Tag */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/90">
                      {c.track}
                    </span>
                  </div>

                  {/* Glassmorphic Play Button */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-white/40">
                      {/* Subtle hover glow */}
                      <div className="absolute inset-0 rounded-full bg-brand opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
                      <Youtube className="relative z-10 h-7 w-7 text-white drop-shadow-md" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-brand">
                      {c.name}
                    </div>
                    <div className="mt-2 text-[0.85rem] font-medium text-body/80">
                      {c.subs}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand">
                    Visit Channel <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram */}
      <section className="bg-[#FDF6EC] py-12 md:py-16">
        <div className="container-lpt grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Telegram"
              title={<>Daily Tips, Mocks &amp; Updates on <span className="text-brand">Telegram</span></>}
              subtitle="Join 500K+ aspirants already getting daily strategy notes from our senior mentors."
            />
            <ul className="mt-7 space-y-2.5">
              {[
                "Daily PYQ + solution at 7 AM sharp",
                "Free monthly mocks with AIR ranking",
                "Direct mentor AMAs every Friday",
                "Real-time exam pattern alerts",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              {["CAT/MBA Channel", "IPM/BBA Channel", "CUET Channel"].map((c, i) => (
                <a
                  key={c}
                  href="#"
                  className={i === 0 ? "btn-primary" : "btn-secondary"}
                >
                  <Send className="h-4 w-4" strokeWidth={2} /> {c}
                </a>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 mx-auto h-80 w-80 rounded-full bg-white/60 blur-3xl" />
            <img
              src={phone}
              alt="Telegram on phone"
              width={896}
              height={1024}
              loading="lazy"
              className="mx-auto h-[440px] w-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.15)]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
