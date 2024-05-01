import { Faqs } from "@/components/Faqs";
import { faqsMentorship } from "@/data/data";
import { Hero } from "@/app/mentorship/components/Hero";
import { Features } from "@/app/mentorship/components/Features";
import { BecomeAMentor } from "@/app/mentorship/components/BecomeAMentor";
import { Reviews } from "@/components/Reviews";
import { FindMentors } from "@/app/mentorship/components/FindMentors";
import { CallToAction } from "@/app/mentorship/components/CallToAction";
import { Domains } from "@/app/mentorship/components/Domains";

export default function Mentorship() {
  return (
    <>
      <Hero />
      <Features />
      <FindMentors />
      <CallToAction />
      {/*<Reviews />*/} {/* TODO: add reviews section later */}
      <Domains />
      {/* TODO: add Mentors Profile here */}
      <BecomeAMentor />
      <Faqs questions={faqsMentorship} />
    </>
  )
}