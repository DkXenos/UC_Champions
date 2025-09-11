export interface Winner {
  name: string;
  team?: string;
  project?: string;
}

export interface FinishedCompetition {
  id: string;
  title: string;
  category: string;
  endDate: string;
  winner: Winner;
}

export const finishedCompetitions: FinishedCompetition[] = [
  {
    id: "finished-1",
    title: "UC App Dev Competition 2023",
    category: "Technology",
    endDate: "December 15, 2023",
    winner: {
      name: "John Doe",
      team: "The Coders",
      project: "Innovative Mobile App",
    },
  },
  {
    id: "finished-2",
    title: "Business Case Challenge 2023",
    category: "Business",
    endDate: "November 30, 2023",
    winner: {
      name: "Jane Smith",
      team: "Strategic Thinkers",
      project: "Sustainable Business Model",
    },
  },
  {
    id: "finished-3",
    title: "Design Jam 2023",
    category: "Creative",
    endDate: "October 20, 2023",
    winner: {
      name: "Alex Johnson",
      project: "Next-Gen UI/UX for Social Good",
    },
  },
];