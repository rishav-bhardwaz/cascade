import { HeroCollege } from "@/app/chapters/[chapter]/components/HeroCollege";
import { AboutCollege } from "@/app/chapters/[chapter]/components/AboutCollege";
import { UpcomingEventsCollege } from "@/app/chapters/[chapter]/components/UpcomingEventsCollege";
import { PastEventsCollege } from "@/app/chapters/[chapter]/components/PastEventsCollege";
import { ContactCollege } from "@/app/chapters/[chapter]/components/ContactCollege";
import { SponsorsCollege } from "@/app/chapters/[chapter]/components/SponsorsCollege";
import { CoreTeamCollege } from "@/app/chapters/[chapter]/components/CoreTeamCollege";
import { PartnersCollege } from "@/app/chapters/[chapter]/components/PartnersCollege";
import { TeamPhotographCollege } from "@/app/chapters/[chapter]/components/TeamPhotographCollege";
import { chaptersInfo } from "@/data/data";

function findCollegeById(colleges: College[], id: string): College {
  return colleges.find(college => college.id === id) as College;
}

export default function Chapter({ params }: { params: { chapter: string } }) {
  const removeHyphens = (inputText: string): string => {
    return inputText.replace(/-/g, ' ');
  };

  const foundCollege = findCollegeById(chaptersInfo, params.chapter);

  return (
    <>
      <HeroCollege collegeDetails={foundCollege}/>
      <AboutCollege description={foundCollege.about} />
      {/*<UpcomingEventsCollege />*/} {/* TODO: add upcoming events section once backend complete */}
      {/*<PastEventsCollege />*/} {/* TODO: add past events section once backend complete */}
      <CoreTeamCollege coreTeam={foundCollege.coreTeam}/>
      { foundCollege.sponsors.length > 0 && <SponsorsCollege sponsers={foundCollege.sponsors}/> }
      { foundCollege.partners.length > 0 && <PartnersCollege partners={foundCollege.partners}/> }
      <TeamPhotographCollege teamPhotographUrl={foundCollege.teamPhotographUrl}/>
      <ContactCollege />
    </>
  )
}