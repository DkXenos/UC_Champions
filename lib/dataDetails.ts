export type CompetitionDetail = {
  id: string;
  title: string;
  category: string;
  deadline: string;
  ukm: string;
  description: string;
  requirements: string[];
  prizes: string[];
  timeline: { date: string; event: string }[];
  contactInfo: {
    email: string;
    phone: string;
    website?: string;
  };
  registrationFee: string;
  maxParticipants: string;
  location: string;
  poster?: string;
};

export const competitionDetails: CompetitionDetail[] = [
  {
    id: "1",
    title: "BOUNCEBACK",
    category: "Dance",
    deadline: "15 Nov 2025",
    ukm: "BIG DANCE CREW",
    description: "BOUNCEBACK merupakan lomba tahunan yang telah berjalan selama tiga tahun dari UKM Dance Universitas Ciputra, yaitu Big Dance Crew (BDC). Lomba ini berfokus pada kompetisi tari dengan dua genre utama, yaitu Modern Dance dan K-Pop Dance, serta terdiri dari tiga kategori lomba: K-Pop Solo/Duo, K-Pop Group, dan Modern Group Dance. Setiap kategori dirancang untuk menjadi wadah bagi para penari berbakat dalam menampilkan kemampuan, kreativitas, dan karakter mereka di atas panggung. Melalui acara ini, BDC bertujuan untuk mengembangkan bakat para penari, mengasah keterampilan mereka, dan menumbuhkan rasa percaya diri dengan energi serta semangat yang positif.",
    requirements: [
      "Coming Soon!",
      "Coming Soon!",
      "Coming Soon!",
      "Coming Soon!"
    ],
    prizes: [
      "1st Place: Coming Soon!",
      "2nd Place: Coming Soon!",
      "3rd Place: Coming Soon!",
      "All participants: Coming Soon!"
    ],
    timeline: [
      { date: "Coming Soon!", event: "Coming Soon!" },
      { date: "Coming Soon!", event: "Coming Soon!" },
      { date: "Coming Soon!", event: "Coming Soon!" },
      { date: "Coming Soon!", event: "Coming Soon!" },
      { date: "Coming Soon!", event: "Coming Soon!" }
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890"
    },
    registrationFee: "Free",
    maxParticipants: "Coming Soon!",
    location: "Coming Soon!"
  },
  {
    id: "2",
    title: "UI/UX Design Challenge",
    category: "Desain",
    deadline: "25 Nov 2025",
    ukm: "Tabletop",
    description: "Showcase your creativity and design thinking skills in our UI/UX Design Challenge. Design innovative user interfaces and experiences for real-world problems.",
    requirements: [
      "Coming Soon!",
      "Coming Soon!",
      "Coming Soon!",
      "Coming Soon!"
    ],
    prizes: [
      "1st Place: Rp 4,000,000 + Internship Opportunity",
      "2nd Place: Rp 2,500,000 + Design Software License",
      "3rd Place: Rp 1,000,000 + Online Course Access",
      "Best Innovation Award: Rp 500,000"
    ],
    timeline: [
      { date: "5 Okt 2025", event: "Registration Opens" },
      { date: "20 Nov 2025", event: "Registration Closes" },
      { date: "22 Nov 2025", event: "Design Brief Release" },
      { date: "25 Nov 2025", event: "Submission Deadline" },
      { date: "27 Nov 2025", event: "Results Announcement" }
    ],
    contactInfo: {
      email: "design@uchampions.ac.id",
      phone: "+62 812 3456 7891"
    },
    registrationFee: "Rp 25,000",
    maxParticipants: "50 teams (max 3 members per team)",
    location: "Design Studio, Creative Arts Building"
  },
  {
    id: "3",
    title: "UC VORTEX ARENA",
    category: "Esport",
    deadline: "25 Okt 2025",
    ukm: "ESPORTS",
    description: "Showcase your creativity and design thinking skills in our UI/UX Design Challenge. Design innovative user interfaces and experiences for real-world problems.",
    requirements: [
      "Portfolio of previous design work",
      "Knowledge of design tools (Figma, Sketch, Adobe XD)",
      "Understanding of user-centered design principles",
      "Laptop with design software installed"
    ],
    prizes: [
      "1st Place: Rp 4,000,000 + Internship Opportunity",
      "2nd Place: Rp 2,500,000 + Design Software License",
      "3rd Place: Rp 1,000,000 + Online Course Access",
      "Best Innovation Award: Rp 500,000"
    ],
    timeline: [
      { date: "15 Sep 2025", event: "Registration Opens" },
      { date: "20 Okt 2025", event: "Registration Closes" },
      { date: "22 Okt 2025", event: "Business Brief Release" },
      { date: "25 Okt 2025", event: "Submission Deadline" },
      { date: "30 Okt 2025", event: "Results Announcement" }
    ],
    contactInfo: {
      email: "design@uchampions.ac.id",
      phone: "+62 812 3456 7891"
    },
    registrationFee: "Rp 25,000",
    maxParticipants: "50 teams (max 3 members per team)",
    location: "Design Studio, Creative Arts Building"
  },
  
];

/*
TEMPLATE FOR NEW COMPETITIONS:
{
  id: "",
  title: "",
  category: "",
  deadline: "",
  ukm: "",
  description: "",
  requirements: [
    ""
  ],
  prizes: [
    "1st Place: ",
    "2nd Place: ",
    "3rd Place: ",
    "Best Award: "
  ],
  timeline: [
    { date: "Date", event: "Registration Opens" },
    { date: "Date", event: "Registration Closes" },
    { date: "Date", event: "Event" },
    { date: "Date", event: "Submission Deadline" },
    { date: "Date", event: "Results Announcement" }
  ],
  contactInfo: {
    email: "",
    phone: ""
  },
  registrationFee: "Rp ",
  maxParticipants: "",
  location: ""
}
*/