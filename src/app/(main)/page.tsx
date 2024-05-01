import { CallToAction } from '@/components/CallToAction'
import { ContactUs } from '@/components/ContactUs'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Slider } from '@/components/Slider'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Stats } from "@/components/Stats"
import { faqsMain } from "@/data/data";

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      {/*<Slider/>*/}
      <Stats />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Faqs questions={faqsMain} />
      <ContactUs />
    </>
  )
}
