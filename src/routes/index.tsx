import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";

import { Navbar } from "@/components/lpt/Navbar";
import { Hero } from "@/components/lpt/Hero";
import { Categories } from "@/components/lpt/Categories";
import { Results } from "@/components/lpt/Results";
import { WhyLPT } from "@/components/lpt/WhyLPT";
import { TrackRecord } from "@/components/lpt/TrackRecord";
import { MockAndMaterial } from "@/components/lpt/MockAndMaterial";
import { Scholarship } from "@/components/lpt/Scholarship";
import { VideoTestimonials } from "@/components/lpt/VideoTestimonials";
import { Reviews } from "@/components/lpt/Reviews";
import { CounsellingCTA } from "@/components/lpt/CounsellingCTA";
import { Mentors } from "@/components/lpt/Mentors";
import { Blog } from "@/components/lpt/Blog";
import { SupportYoutubeTelegram } from "@/components/lpt/SupportYoutubeTelegram";
import { Footer } from "@/components/lpt/Footer";
import { MobileCTA } from "@/components/lpt/MobileCTA";
import { SignInModal } from "@/components/lpt/SignInModal";
import { EnquiryModal } from "@/components/lpt/EnquiryModal";
import { PromoModal } from "@/components/lpt/PromoModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LPT — India's Top Coaching for CAT, IPMAT & CUET" },
      {
        name: "description",
        content:
          "Premium coaching for CAT/MBA, IPMAT/BBA and CUET. 100+ IIM calls, 24+ years of legacy, 150,000+ students mentored. Book a free counselling call.",
      },
      { property: "og:title", content: "LPT — Make It to IIMs and Beyond" },
      {
        property: "og:description",
        content: "India's premium coaching brand for CAT, IPMAT and CUET. Trusted by 150,000+ aspirants.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [signIn, setSignIn] = useState(false);
  const [enquiry, setEnquiry] = useState(false);

  const book = () => setEnquiry(true);

  return (
    <>
      <Navbar onBook={book} onSignIn={() => setSignIn(true)} />
      <main>
        <Hero onBook={book} />
        <Categories />
        <Results />
        <WhyLPT />
        <TrackRecord onBook={book} />
        <MockAndMaterial />
        <Scholarship />
        <VideoTestimonials />
        <Reviews />
        <CounsellingCTA onBook={book} />
        <Mentors />
        <Blog />
        <SupportYoutubeTelegram />
      </main>
      <Footer />
      <MobileCTA onBook={book} />

      <SignInModal open={signIn} onClose={() => setSignIn(false)} />
      <EnquiryModal open={enquiry} onClose={() => setEnquiry(false)} />
      <PromoModal onBook={book} />

      <Toaster position="top-center" />
    </>
  );
}
