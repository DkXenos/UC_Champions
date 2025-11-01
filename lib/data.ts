export type Competition = {
  id: string;
  title: string;
  category: string;
  deadline: string;
  ukm: string;
};

export const featuredCompetitions: Competition[] = [
  {
    id: "1",
    title: "BOUNCEBACK", //ini judul kompetisi
    category: "Dance", //kek buat di badge yg filtering gitu jadi bisa jadi kek ukm or kategori e
    deadline: "Offline", //ini deadline kompetisi kapan terakhir daftar
    ukm: "BIG DANCE CREW", //ukm e apa
  },
  {
    id: "2",
    title: "REKAM CERITA",
    category: "Creative",
    deadline: "Online",
    ukm: "Balawarta", 
  },
  {
    id: "3",
    title: "NEOSANTARA FEST",
    category: "Budaya",
    deadline: "Online",
    ukm: "Teater X Tari", 
  },
  {
    id: "4",
    title: "UCHSDC",
    category: "Debate",
    deadline: "Hybrid",
    ukm: "UCDC", 
  },
  {
    id: "5",
    title: "LOMBA POSETER INTERNASIONAL",
    category: "Creative",
    deadline: "Online",
    ukm: "UCBC", 
  },
  {
    id: "6",
    title: "KICKSTART CREATIVITY",
    category: "Creative",
    deadline: "Online",
    ukm: "Taekwondo", 
  },
  {
    id: "7",
    title: "STORIES OF GRACE",
    category: "Creative",
    deadline: "Online",
    ukm: "PMK", 
  },
  {
    id: "8",
    title: "UC VORTEX ARENA 2026",
    category: "Esports",
    deadline: "Online",
    ukm: "E-Sports", 
  },
];