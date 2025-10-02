export type Competition = {
  id: string;
  title: string;
  category: string;
  deadline: string;
  ukm: string;
};

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

export const featuredCompetitions: Competition[] = [
  {
    id: "1",
    title: "Programming Contest",
    category: "Teknologi",
    deadline: "15 Agu 2024",
    ukm: "Tabletop", 
  },
  {
    id: "2",
    title: "UI/UX Design Challenge",
    category: "Desain",
    deadline: "20 Agu 2024",
    ukm: "Tabletop", 
  },
  {
    id: "3",
    title: "Business Plan Competition",
    category: "Bisnis",
    deadline: "25 Agu 2024",
    ukm: "Tabletop", 
  },
  {
    id: "4",
    title: "Digital Marketing Challenge",
    category: "Pemasaran",
    deadline: "30 Agu 2024",
    ukm: "Tabletop", 
  },
  {
    id: "5",
    title: "National Essay Competition",
    category: "Menulis",
    deadline: "05 Sep 2024",
    ukm: "Tabletop", 
  },
  {
    id: "6",
    title: "Mobile Photography Contest",
    category: "Fotografi",
    deadline: "10 Sep 2024",
    ukm: "esport", 
  },
  {
    id: "7",
    title: "Public Speaking Championship",
    category: "Komunikasi",
    deadline: "15 Sep 2024",
    ukm: "esport", 
  },
  {
    id: "8",
    title: "Data Science Hackathon",
    category: "Teknologi",
    deadline: "20 Sep 2024",
    ukm: "esport", 
  },
  {
    id: "9",
    title: "E-Sports Tournament: Valorant",
    category: "Gaming",
    deadline: "25 Sep 2024",
    ukm: "bdc", 
  },
  {
    id: "10",
    title: "Startup Pitching Competition",
    category: "Bisnis",
    deadline: "30 Sep 2024",
    ukm: "bdc", 
  },
  {
    id: "11",
    title: "Competition 11",
    category: "Teknologi",
    deadline: "01 Oct 2024",
    ukm: "bdc", 
  },
  {
    id: "12",
    title: "Competition 12",
    category: "Desain",
    deadline: "05 Oct 2024",
    ukm: "bdc", 
  },
  {
    id: "13",
    title: "Competition 13",
    category: "Bisnis",
    deadline: "10 Oct 2024",
    ukm: "basket", 
  },
  {
    id: "14",
    title: "Competition 14",
    category: "Pemasaran",
    deadline: "15 Oct 2024",
    ukm: "basket", 
  },
  {
    id: "15",
    title: "Competition 15",
    category: "Menulis",
    deadline: "20 Oct 2024",
    ukm: "basket", 
  },
  {
    id: "16",
    title: "Competition 16",
    category: "Fotografi",
    deadline: "25 Oct 2024",
    ukm: "basket", 
  },
  {
    id: "17",
    title: "Competition 17",
    category: "Komunikasi",
    deadline: "30 Oct 2024",
    ukm: "basket", 
  },
  {
    id: "18",
    title: "Competition 18",
    category: "Teknologi",
    deadline: "05 Nov 2024",
    ukm: "Resonance", 
  },
  {
    id: "19",
    title: "Competition 19",
    category: "Gaming",
    deadline: "10 Nov 2024",
    ukm: "Resonance", 
  },
  {
    id: "20",
    title: "Competition 20",
    category: "Bisnis",
    deadline: "15 Nov 2024",
    ukm: "Resonance", 
  },
];

export const competitionDetails: CompetitionDetail[] = [
  {
    id: "1",
    title: "Programming Contest",
    category: "Teknologi",
    deadline: "15 Agu 2024",
    ukm: "Tabletop",
    description: "Join our annual programming contest where you'll solve challenging algorithmic problems and showcase your coding skills. This competition is designed for students who are passionate about programming and want to test their problem-solving abilities.",
    requirements: [
      "Must be a registered university student",
      "Basic knowledge of programming languages (Python, Java, C++, or JavaScript)",
      "Laptop with development environment set up",
      "Valid student ID"
    ],
    prizes: [
      "1st Place: Rp 5,000,000 + Certificate + Trophy",
      "2nd Place: Rp 3,000,000 + Certificate + Trophy",
      "3rd Place: Rp 1,500,000 + Certificate + Trophy",
      "All participants receive participation certificates"
    ],
    timeline: [
      { date: "1 Juli 2024", event: "Registration Opens" },
      { date: "10 Agu 2024", event: "Registration Closes" },
      { date: "12 Agu 2024", event: "Technical Briefing" },
      { date: "15 Agu 2024", event: "Competition Day" },
      { date: "15 Agu 2024", event: "Award Ceremony" }
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890",
      website: "https://programming.uchampions.ac.id"
    },
    registrationFee: "Free",
    maxParticipants: "100 participants",
    location: "Computer Lab Building A, Floor 3"
  },
  {
    id: "2",
    title: "UI/UX Design Challenge",
    category: "Desain",
    deadline: "20 Agu 2024",
    ukm: "Tabletop",
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
      { date: "5 Juli 2024", event: "Registration Opens" },
      { date: "15 Agu 2024", event: "Registration Closes" },
      { date: "17 Agu 2024", event: "Design Brief Release" },
      { date: "20 Agu 2024", event: "Submission Deadline" },
      { date: "22 Agu 2024", event: "Results Announcement" }
    ],
    contactInfo: {
      email: "design@uchampions.ac.id",
      phone: "+62 812 3456 7891"
    },
    registrationFee: "Rp 25,000",
    maxParticipants: "50 teams (max 3 members per team)",
    location: "Design Studio, Creative Arts Building"
  }
  
];