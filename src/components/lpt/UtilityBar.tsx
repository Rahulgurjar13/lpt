import { Phone, HeadphonesIcon } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="hidden border-b border-white/5 bg-[#0F1015] text-[12px] lg:block">
      <div className="container-lpt flex h-10 items-center justify-between">
        <div className="flex items-center gap-2 font-medium text-white/90 tracking-wide">
          <span className="flex h-5 items-center justify-center rounded bg-[#DA202F] px-1.5 text-[9px] font-bold uppercase text-white">New</span>
          <span>Batches for CAT & IPMAT starting next week. <a href="#" className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">Enroll Now</a></span>
        </div>
        <div className="flex items-center gap-6 text-white/50 font-medium">
          <a href="tel:+919116693939" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3 w-3 text-[#DA202F]" strokeWidth={2.5} />
            <span className="font-bold text-white/80">IPM:</span> 91166 93939
          </a>
          <a href="tel:+919116695959" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3 w-3 text-[#DA202F]" strokeWidth={2.5} />
            <span className="font-bold text-white/80">CAT:</span> 91166 95959
          </a>
          <a href="#support" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <HeadphonesIcon className="h-3 w-3 text-[#DA202F]" strokeWidth={2.5} />
            Helpdesk
          </a>
        </div>
      </div>
    </div>
  );
}
