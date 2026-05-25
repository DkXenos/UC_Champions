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
    title: "CIPTA BACA PUISI NEOSANTARA FEST",
    category: "BUDAYA",
    endDate: "2 May 2026",
    firstPlace: {
      name: "Dinda Ayu Varellina",
    },
    secondPlace: {
      name: "Deby Rahmad Tika",
    },
    thirdPlace: {
      name: "Andrew Septian Cahyo",
    },
  },
   {
    id: "finished-7",
    title: "MONOLOG NEOSANTARA FEST",
    category: "BUDAYA",
    endDate: "2 May 2026",
    firstPlace: {
      name: "Nadya Rahma Saputri ",
    },
    secondPlace: {
      name: "Dyah Ayu Firdasari",
    },
    thirdPlace: {
      name: "Dinda Ayu Varelina",
    },
  },
   {
    id: "finished-8",
    title: "TARI TRADISIONAL NEOSANTARA FEST",
    category: "BUDAYA",
    endDate: "2 May 2026",
    firstPlace: {
      name: "Arunika ",
    },
    secondPlace: {
      name: "Rumah Rentak Budaya",
    },
    thirdPlace: {
      name: "Tatra Kosayu ",
    },
  },

  
  {
    id: "finished-9",
    title: "KPOP SOLO/DUO BOUNCEBACK",
    category: "DANCE",
    endDate: "23 May 2026",
    firstPlace: {
      name: "ABELZ",
    },
    secondPlace: {
      name: "DK",
    },
    thirdPlace: {
      name: "-",
    },
  },
  {
    id: "finished-10",
    title: "KPOP GROUP BOUNCEBACK",
    category: "DANCE",
    endDate: "23 May 2026",
    firstPlace: {
      name: "YOUNG CHIC",
    },
    secondPlace: {
      name: "HIPSTER MONEY",
    },
    thirdPlace: {
      name: "-",
    },
  },
  {
    id: "finished-11",
    title: "MODERN DANCE BOUNCEBACK",
    category: "DANCE",
    endDate: "23 May 2026",
    firstPlace: {
      name: "LAST MINUTE STREET CREW",
    },
    secondPlace: {
      name: "UNDOZEN",
    },
    thirdPlace: {
      name: "-",
    },
  },
  
];