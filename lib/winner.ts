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
    title: "UCDC SCHOOLS 2026",
    category: "DEBATE",
    endDate: "16 Feb 2026",
    firstPlace: {
      name: "Sunshine",
    },
    secondPlace: {
      name: "Fanbase Pak Hardy",
    },
    thirdPlace: {
      name: "nama tim",
    },
  },
  {
    id: "finished-2",
    title: "BOUNCEBACK",
    category: "DANCE",
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
    title: "REKAM CERITA",
    category: "CREATIVE",
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
    title: "NEOSANTARA FEST",
    category: "BUDAYA",
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
    title: "LOMBA POSTER INTERNASIONAL",
    category: "CREATIVE",
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
    category: "CREATIVE",
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
    category: "CREATIVE",
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
    category: "ESPORTS",
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