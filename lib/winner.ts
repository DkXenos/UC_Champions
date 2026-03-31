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
    title: "REKAM CERITA",
    category: "CREATIVE",
    endDate: "27 Feb 2026",
    firstPlace: {
      name: "Alia Pramesti Olifia Rahman",
    },
    secondPlace: {
      name: "Challene Harijanto",
    },
    thirdPlace: {
      name: "Nunuk Sulistyowati",
    },
  },
  {
    id: "finished-3",
    title: "LOMBA POSTER INTERNASIONAL",
    category: "CREATIVE",
    endDate: "1 Mar 2026",
    firstPlace: {
      name: "Nanda Najla Arini",
    },
    secondPlace: {
      name: "Vanessa Valeri Andrea",
    },
    thirdPlace: {
      name: "Levia Johan",
    },
  },
  {
    id: "finished-4",
    title: "STORIES OF GRACE",
    category: "CREATIVE",
    endDate: "7 Mar 2026",
    firstPlace: {
      name: "29:11",
    },
    secondPlace: {
      name: "Tuhan yang Lewat",
    },
    thirdPlace: {
      name: "Tong Pu Bintang Su Menyala",
    },
  },
  {
    id: "finished-5",
    title: "KICKSTART CREATIVITY",
    category: "CREATIVE",
    endDate: "31 Mar 2026",
    firstPlace: {
      name: "Agnestasia Esther Ewitrawati",
    },
    secondPlace: {
      name: "Shaquille Muhammad",
    },
    thirdPlace: {
      name: "Reinaldo Wijaya",
    },
  },
  
  {
    id: "finished-6",
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
    id: "finished-7",
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
  
];