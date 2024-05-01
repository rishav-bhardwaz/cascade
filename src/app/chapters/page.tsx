import { CollegesList } from "@/components/CollegesList";
import { ChaptersListHero } from "@/components/ChaptersListHero";
import { Divider } from "@/components/Divider";

export default function ChaptersList() {
  return (
    <>
      <ChaptersListHero />
      <CollegesList />
      <Divider />
    </>
  )
}