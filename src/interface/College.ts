interface SocialLinks {
  linkedin?: string;
  instagram?: string;
  youtube?: string;
}

interface ContactData {
  primaryEmail: string;
  primaryPhone: string;
}

interface CoreTeamData {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials?: SocialLinks;
}

interface SponsorData {
  id: number;
  name: string;
  // Add more properties if needed
}

interface PartnerData {
  id: number;
  name: string;
}

interface College {
  id: string;
  name: string;
  banner: string;
  totalMembers: number;
  socials: SocialLinks;
  about: string;
  coreTeam: CoreTeamData[];
  sponsors: SponsorData[];
  partners: PartnerData[];
  joinChapter: string;
  upcomingEvents: number[];
  pastEvents: number[];
  teamPhotographUrl: string;
  contactUs: ContactData;
}
