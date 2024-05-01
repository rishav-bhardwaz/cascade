import { Faqs } from "@/components/Faqs"
import { faqsCommunity } from "@/data/data"
import { Hero } from "@/app/community/components/Hero"
import { Features } from "@/app/community/components/Features";
import { BecomeALead } from "@/app/community/components/BecomeALead";
import { CallToAction } from "@/app/community/components/CallToAction";

export default function Community() {
  return (
    <>
      <Hero />
      <Features />
      <BecomeALead />
      <CallToAction />
      <Faqs questions={faqsCommunity} />
    </>
  )
}