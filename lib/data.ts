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
    category: "DANCE", //kek buat di badge yg filtering gitu jadi bisa jadi kek ukm or kategori e
    deadline: "Offline", //ini deadline kompetisi kapan terakhir daftar
    ukm: "BIG DANCE CREW", //ukm e apa
  },
  {
    id: "2",
    title: "REKAM CERITA",
    category: "CREATIVE",
    deadline: "Online",
    ukm: "Balawarta", 
  },
  {
    id: "3",
    title: "NEOSANTARA FEST",
    category: "BUDAYA",
    deadline: "Online",
    ukm: "Teater X Tari", 
  },
  {
    id: "4",
    title: "UCHSDC",
    category: "DEBATE",
    deadline: "Hybrid",
    ukm: "UCDC", 
  },
  {
    id: "5",
    title: "LOMBA POSETER INTERNASIONAL",
    category: "CREATIVE",
    deadline: "Online",
    ukm: "UCBC", 
  },
  {
    id: "6",
    title: "KICKSTART CREATIVITY",
    category: "CREATIVE",
    deadline: "Online",
    ukm: "Taekwondo", 
  },
  {
    id: "7",
    title: "STORIES OF GRACE",
    category: "CREATIVE",
    deadline: "Online",
    ukm: "PMK", 
  },
  {
    id: "8",
    title: "UC VORTEX ARENA 2026",
    category: "ESPORTS",
    deadline: "Online",
    ukm: "E-Sports", 
  },
];