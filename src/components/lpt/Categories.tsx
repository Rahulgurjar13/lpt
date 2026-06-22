import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./shared";
import catIpm from "@/assets/cat-ipm.jpg";
import catCuet from "@/assets/cat-cuet.jpg";
import catCat from "@/assets/cat-cat.jpg";

const programs = [
  {
    img: catIpm,
    tag: "Class 11 · 12 · 12+",
    title: "IPM / BBA Programs",
    desc: "IPMAT, JIPMAT, CUET-BBA and integrated management entrance prep.",
    courses: [
      "IPMAT Indore Live",
      "JIPMAT Crash Course",
      "BBA Combo (DU JAT, IPU)",
      "IPM Pinnacle 2-Yr",
    ],
    href: "#",
    featured: false,
  },
  {
    img: catCuet,
    tag: "Class 12 · 12+",
    title: "CUET Programs",
    desc: "Domain + General + Language tracks for 200+ central universities.",
    courses: [
      "CUET UG Live",
      "CUET PG Online",
      "27-Subject Test Series",
      "CUET Crash Course",
    ],
    href: "#",
    featured: true,
  },
  {
    img: catCat,
    tag: "Graduates · Final Year",
    title: "CAT / MBA Programs",
    desc: "CAT, XAT, NMAT, SNAP and IIFT — taught by 22-year veterans.",
    courses: [
      "CAT 2026 Live",
      "CAT Pinnacle 1-on-1",
      "OMET Combo",
      "GD-PI-WAT Module",
    ],
    href: "#",
    featured: false,
  },
];

export function Categories() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-lpt">

        <SectionHeader
          eyebrow="Programs"
          title={
            <>
              Online Coaching for{" "}
              <span className="text-brand">CAT, IPMAT, CUET</span> &amp; More
            </>
          }
          subtitle="Pick a track and meet the mentor who's coached toppers for over two decades."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-start">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article
                className={[
                  "lift-card group flex h-full flex-col overflow-hidden rounded-3xl border bg-white",
                  p.featured ? "border-brand/20 md:-translate-y-3" : "border-hairline",
                ].join(" ")}
                style={
                  p.featured
                    ? {
                        boxShadow:
                          "0 0 0 4px rgba(218,32,47,0.04), 0 12px 40px rgba(218,32,47,0.14), 0 2px 8px rgba(0,0,0,0.05)",
                      }
                    : undefined
                }
              >
                {/* Photo */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={900}
                    height={600}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {p.featured && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(218,32,47,0.35)]">
                      Most Popular
                    </span>
                  )}
                  <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-ink shadow-sm backdrop-blur-sm">
                    {p.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="h-display text-[1.25rem]">{p.title}</h3>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-body">{p.desc}</p>

                  <div className="my-4 h-px bg-hairline" />

                  <ul className="flex-1 space-y-0.5">
                    {p.courses.map((course) => (
                      <li key={course}>
                        <a
                          href={p.href}
                          className="group/row flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.83rem] font-medium text-ink transition-colors duration-150 hover:bg-[#FFF5F5] hover:text-brand"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hairline transition-colors group-hover/row:bg-brand" />
                          <span className="flex-1">{course}</span>
                          <ArrowRight
                            className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover/row:translate-x-0 group-hover/row:opacity-100"
                            strokeWidth={2.5}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-hairline pt-4">
                    <a
                      href={p.href}
                      className={
                        p.featured
                          ? "btn-primary w-full justify-center rounded-xl px-5 py-2.5 text-sm"
                          : "inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5"
                      }
                    >
                      Explore all courses
                      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

