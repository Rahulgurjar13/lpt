import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, BookOpen, Video, Library, MapPin, FileText, Users, ArrowRight, HeadphonesIcon } from "lucide-react";
import { UtilityBar } from "./UtilityBar";

type MenuKey = "ipm" | "cuet" | "cat" | "resources" | "toppers";

const megaContent: Record<Exclude<MenuKey, "toppers">, {
  cols: { title: string; items: { icon: React.ReactNode; title: string; desc: string }[] }[];
}> = {
  ipm: {
    cols: [
      {
        title: "Online Courses",
        items: [
          { icon: <Video className="h-4 w-4" />, title: "IPMAT Live Course", desc: "2-year integrated batch" },
          { icon: <BookOpen className="h-4 w-4" />, title: "IPMAT Crash Course", desc: "8-week intensive" },
          { icon: <FileText className="h-4 w-4" />, title: "JIPMAT Special", desc: "Targeted prep" },
        ],
      },
      {
        title: "Offline Centers",
        items: [
          { icon: <MapPin className="h-4 w-4" />, title: "Rajasthan", desc: "Jaipur · Kota" },
          { icon: <MapPin className="h-4 w-4" />, title: "Delhi NCR", desc: "Delhi · Gurugram" },
          { icon: <MapPin className="h-4 w-4" />, title: "Maharashtra", desc: "Mumbai · Pune" },
        ],
      },
      {
        title: "Test Series",
        items: [
          { icon: <FileText className="h-4 w-4" />, title: "IPMAT Mocks", desc: "40+ full-length tests" },
          { icon: <FileText className="h-4 w-4" />, title: "Section Tests", desc: "Topic-wise drills" },
        ],
      },
      {
        title: "Study Material",
        items: [
          { icon: <Library className="h-4 w-4" />, title: "IPMAT Books", desc: "Concept + practice set" },
          { icon: <BookOpen className="h-4 w-4" />, title: "PYQ Compendium", desc: "12 years solved" },
        ],
      },
    ],
  },
  cuet: {
    cols: [
      {
        title: "Online Courses",
        items: [
          { icon: <Video className="h-4 w-4" />, title: "CUET UG Live", desc: "Domain + General" },
          { icon: <BookOpen className="h-4 w-4" />, title: "CUET Crash", desc: "Last-mile sprint" },
        ],
      },
      {
        title: "Offline Centers",
        items: [
          { icon: <MapPin className="h-4 w-4" />, title: "Rajasthan", desc: "Jaipur · Udaipur" },
          { icon: <MapPin className="h-4 w-4" />, title: "UP", desc: "Lucknow · Noida" },
        ],
      },
      {
        title: "Test Series",
        items: [{ icon: <FileText className="h-4 w-4" />, title: "CUET Mocks", desc: "30+ full tests" }],
      },
      {
        title: "Study Material",
        items: [{ icon: <Library className="h-4 w-4" />, title: "Subject Modules", desc: "All 27 subjects" }],
      },
    ],
  },
  cat: {
    cols: [
      {
        title: "Online Courses",
        items: [
          { icon: <Video className="h-4 w-4" />, title: "CAT 2026 Live", desc: "Year-long premium" },
          { icon: <BookOpen className="h-4 w-4" />, title: "CAT Pinnacle", desc: "1-on-1 mentorship" },
          { icon: <FileText className="h-4 w-4" />, title: "XAT / NMAT / SNAP", desc: "OMETs combo" },
        ],
      },
      {
        title: "Offline Centers",
        items: [
          { icon: <MapPin className="h-4 w-4" />, title: "Rajasthan", desc: "Jaipur · Kota · Udaipur" },
          { icon: <MapPin className="h-4 w-4" />, title: "Delhi NCR", desc: "All branches" },
          { icon: <MapPin className="h-4 w-4" />, title: "Gujarat", desc: "Ahmedabad · Surat" },
        ],
      },
      {
        title: "Test Series",
        items: [
          { icon: <FileText className="h-4 w-4" />, title: "CAT Mocks", desc: "50+ proctored" },
          { icon: <FileText className="h-4 w-4" />, title: "OMET Mocks", desc: "XAT/IIFT/SNAP" },
        ],
      },
      {
        title: "Study Material",
        items: [
          { icon: <Library className="h-4 w-4" />, title: "CAT Modules", desc: "QA · VARC · LRDI" },
          { icon: <BookOpen className="h-4 w-4" />, title: "PYQ + Solutions", desc: "30 years" },
        ],
      },
    ],
  },
  resources: {
    cols: [
      {
        title: "Free Mocks",
        items: [
          { icon: <FileText className="h-4 w-4" />, title: "Diagnostic Test", desc: "Find your baseline" },
          { icon: <FileText className="h-4 w-4" />, title: "Weekly Quiz", desc: "Every Sunday" },
        ],
      },
      {
        title: "Free Sessions",
        items: [{ icon: <Video className="h-4 w-4" />, title: "Strategy Webinars", desc: "Live with toppers" }],
      },
      {
        title: "Downloads",
        items: [
          { icon: <BookOpen className="h-4 w-4" />, title: "PYQ Packs", desc: "Free PDF compendiums" },
          { icon: <Library className="h-4 w-4" />, title: "Formula Sheet", desc: "QA quick reference" },
        ],
      },
      {
        title: "Counselling",
        items: [{ icon: <Users className="h-4 w-4" />, title: "1-on-1 Mentor Call", desc: "Book in 60s" }],
      },
    ],
  },
};

export function Navbar({ onBook, onSignIn }: { onBook: () => void; onSignIn: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 z-50">
      <UtilityBar />
      <nav
        className={
          "transition-all duration-300 " +
          (scrolled
            ? "bg-white/85 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "bg-white/0")
        }
        onMouseLeave={() => setOpen(null)}
      >
        <div className="container-lpt flex h-[72px] items-center justify-between gap-6">
          <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="LPT Logo" className="h-9 w-auto" />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {(["ipm", "cuet", "cat", "resources"] as const).map((k) => (
              <li key={k} onMouseEnter={() => setOpen(k)}>
                <button className="nav-link">
                  {k === "ipm" ? "IPM/BBA" : k === "cuet" ? "CUET" : k === "cat" ? "CAT/MBA" : "Free Resources"}
                  <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.2} />
                </button>
              </li>
            ))}
            <li>
              <a href="#toppers" className="nav-link">Our Toppers</a>
            </li>
            <li>
              <a href="#centers" className="nav-link">Our Centers</a>
            </li>
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <button onClick={onSignIn} className="rounded-full px-5 py-2.5 text-[13px] font-bold text-ink transition-colors hover:bg-black/5">
              Log In
            </button>
            <button onClick={onBook} className="rounded-full bg-[#DA202F] px-6 py-2.5 text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(218,32,47,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(218,32,47,0.6)]">
              Sign Up Free
            </button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline lg:hidden"
            onClick={() => setMobile(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-ink" strokeWidth={1.75} />
          </button>
        </div>

        {/* Mega menu */}
        {open && open !== "toppers" && (
          <div
            className="absolute left-0 right-0 top-full hidden lg:block"
            onMouseEnter={() => setOpen(open)}
          >
            <div className="container-lpt">
              <div className="fade-up overflow-hidden rounded-3xl border border-hairline bg-white shadow-[0_8px_16px_rgba(0,0,0,0.05),0_24px_48px_rgba(0,0,0,0.08)]">
                <div className="grid grid-cols-4 gap-2 p-4">
                  {megaContent[open].cols.map((col) => (
                    <div key={col.title} className="rounded-2xl p-4 transition-colors hover:bg-slate-50/80">
                      <div className="mb-5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        {col.title}
                      </div>
                      <ul className="space-y-1.5">
                        {col.items.map((it) => (
                          <li key={it.title}>
                            <a
                              href="#"
                              className="group flex items-center gap-3.5 rounded-xl p-2.5 -mx-2.5 transition-all hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] ring-1 ring-transparent hover:ring-black/[0.04]"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100/80 text-slate-500 transition-all duration-300 group-hover:bg-[#FFF5F5] group-hover:text-[#DA202F]">
                                {it.icon}
                              </span>
                              <div>
                                <span className="block text-[13px] font-bold text-ink transition-colors group-hover:text-brand">
                                  {it.title}
                                </span>
                                <span className="block text-[11px] font-medium text-slate-500 mt-0.5">
                                  {it.desc}
                                </span>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-black/[0.03] bg-slate-50/50 px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DA202F]/10 text-[#DA202F]">
                      <HeadphonesIcon className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                    <span className="text-[13px] font-medium text-slate-600">
                      Not sure where to start? <button onClick={onBook} className="font-bold text-ink hover:text-[#DA202F] transition-colors ml-1">Talk to our academic counselors <ArrowRight className="inline-block h-3.5 w-3.5 ml-0.5 -mt-0.5" strokeWidth={2.5} /></button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      {mobile && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobile(false)} />
          <div className="absolute right-0 top-0 h-full w-[88vw] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <img src="/logo.svg" alt="LPT Logo" className="h-8 w-auto" />
              <button onClick={() => setMobile(false)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full border border-hairline">
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
            <div className="mt-6 space-y-1">
              {["IPM/BBA", "CUET", "CAT/MBA", "Free Resources", "Our Toppers", "Our Centers"].map((l) => (
                <details key={l} className="group border-b border-hairline py-3">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-ink">
                    {l}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" strokeWidth={2} />
                  </summary>
                  <div className="pt-3 pl-1 text-sm text-body space-y-2">
                    <a href="#" className="block">Online Courses</a>
                    <a href="#" className="block">Offline Centers</a>
                    <a href="#" className="block">Test Series</a>
                    <a href="#" className="block">Study Material</a>
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <button onClick={onBook} className="btn-primary w-full">Book Free Counselling</button>
              <button onClick={onSignIn} className="btn-secondary w-full">Sign In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
