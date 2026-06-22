import { MapPin, Phone, Mail, Instagram, Youtube, Linkedin, Facebook, Send } from "lucide-react";

const importantLinks = ["About LPT", "Centers Near You", "Our Mentors", "Toppers Wall", "Careers", "Press & Media"];
const quickLinks = ["CAT Coaching", "IPMAT Coaching", "CUET Coaching", "Test Series", "Study Material", "Scholarship"];
const seoClusters: { title: string; links: string[] }[] = [
  { title: "Offline CAT Coaching", links: ["Jaipur", "Delhi", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Ahmedabad", "Kota"] },
  { title: "Offline IPMAT Coaching", links: ["Jaipur", "Delhi", "Indore", "Mumbai", "Lucknow", "Chandigarh", "Kolkata"] },
  { title: "CAT Exam Info", links: ["Eligibility", "Syllabus", "Exam Pattern", "Cutoffs", "Previous Papers", "Results"] },
  { title: "IPMAT Exam Info", links: ["IPM Indore", "JIPMAT", "IIM Rohtak", "IIM Bodh Gaya", "IIM Jammu"] },
  { title: "CLAT", links: ["CLAT 2026", "AILET", "DU LLB", "Study Material"] },
];

export function Footer() {
  return (
    <footer className="bg-[#0F1015] text-white">
      <div className="container-lpt py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center">
              <img src="/logo.svg" alt="LPT Logo" className="h-10 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              India's premium coaching brand for CAT, IPMAT and CUET. 24 years of legacy, 150,000+
              students mentored, 100+ IIM calls every year.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Youtube, Linkedin, Facebook, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-brand hover:bg-brand hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow text-[11px]">Important Links</div>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              {importantLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-[11px]">Quick Links</div>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-[11px]">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                <span>4th Floor, LPT House, C-Scheme, Jaipur 302001, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                <a href="tel:+919116695959" className="hover:text-white">+91 91166 95959</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                <a href="mailto:hello@lpt.in" className="hover:text-white">hello@lpt.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO clusters */}
        <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-3 lg:grid-cols-5">
          {seoClusters.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-white">{c.title}</div>
              <ul className="mt-3 space-y-2 text-xs text-white/55">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white/90">{c.title.includes("Coaching") ? `${c.title.split(" ").slice(-1)[0]} Coaching in ${l}` : l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lpt flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 md:flex-row">
          <span>© {new Date().getFullYear()} LPT Education Pvt. Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
