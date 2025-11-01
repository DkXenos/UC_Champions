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
  firstPlace: Winner;
  secondPlace: Winner;
  thirdPlace: Winner;
}

export const finishedCompetitions: FinishedCompetition[] = [
  {
    id: "finished-1",
    title: "BOUNCEBACK",
    category: "Dance",
    endDate: "NOT ANNOUNCED",
    firstPlace: {
      name: "NOT ANNOUNCED",
    },
    secondPlace: {
      name: "NOT ANNOUNCED",
    },
    thirdPlace: {
      name: "NOT ANNOUNCED",
    },
  },
  {
    id: "finished-2",
    title: "REKAM CERITA",
    category: "Creative",
    endDate: "NOT ANNOUNCED",
    firstPlace: {
      name: "NOT ANNOUNCED",
    },
    secondPlace: {
      name: "NOT ANNOUNCED",
    },
    thirdPlace: {
      name: "NOT ANNOUNCED",
    },
  },
  {
    id: "finished-3",
    title: "NEOSANTARA FEST",
    category: "Budaya",
    endDate: "NOT ANNOUNCED",
    firstPlace: {
      name: "NOT ANNOUNCED",
    },
    secondPlace: {
      name: "NOT ANNOUNCED",
    },
    thirdPlace: {
      name: "NOT ANNOUNCED",
    },
  },
  {
    id: "finished-4",
    title: "UCHSDC",
    category: "Debate",
    endDate: "NOT ANNOUNCED",
    firstPlace: {
      name: "NOT ANNOUNCED",
    },
    secondPlace: {
      name: "NOT ANNOUNCED",
    },
    thirdPlace: {
      name: "NOT ANNOUNCED",
    },
  },
  {
    id: "finished-5",
    title: "LOMBA POSETER INTERNASIONAL",
    category: "Creative",
    endDate: "NOT ANNOUNCED",
    firstPlace: {
      name: "NOT ANNOUNCED",
    },
    secondPlace: {
      name: "NOT ANNOUNCED",
    },
    thirdPlace: {
      name: "NOT ANNOUNCED",
    },
  },
  {
    id: "finished-6",
    title: "KICKSTART CREATIVITY",
    category: "Creative",
    endDate: "NOT ANNOUNCED",
    firstPlace: {
      name: "NOT ANNOUNCED",
    },
    secondPlace: {
      name: "NOT ANNOUNCED",
    },
    thirdPlace: {
      name: "NOT ANNOUNCED",
    },
  },
  {
    id: "finished-7",
    title: "STORIES OF GRACE",
    category: "Creative",
    endDate: "NOT ANNOUNCED",
    firstPlace: {
      name: "NOT ANNOUNCED",
    },
    secondPlace: {
      name: "NOT ANNOUNCED",
    },
    thirdPlace: {
      name: "NOT ANNOUNCED",
    },
  },
  {
    id: "finished-8",
    title: "UC VORTEX ARENA 2026",
    category: "Esports",
    endDate: "NOT ANNOUNCED",
    firstPlace: {
      name: "NOT ANNOUNCED",
    },
    secondPlace: {
      name: "NOT ANNOUNCED",
    },
    thirdPlace: {
      name: "NOT ANNOUNCED",
    },
  },
];