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
    title: "STORIES OF GRACE",
    category: "CREATIVE",
    deadline: "OPENED",
    ukm: "PMK",
  },

  {
    id: "2",
    title: "REKAM CERITA",
    category: "CREATIVE",
    deadline: "CLOSED",
    ukm: "Balawarta",
  },
  {
    id: "3",
    title: "NEOSANTARA FEST",
    category: "BUDAYA",
    deadline: "CLOSED",
    ukm: "Teater X Tari",
  },
  {
    id: "4",
    title: "UCDC Schools 2026",
    category: "DEBATE",
    deadline: "CLOSED",
    ukm: "UCDS",
  },
  {
    id: "5",
    title: "LOMBA POSTER INTERNASIONAL",
    category: "CREATIVE",
    deadline: "CLOSED",
    ukm: "UCBC",
  },
  {
    id: "6",
    title: "KICKSTART CREATIVITY",
    category: "CREATIVE",
    deadline: "CLOSED",
    ukm: "Taekwondo",
  },
  {
    id: "7",
    title: "BOUNCEBACK", //ini judul kompetisi
    category: "DANCE", //kek buat di badge yg filtering gitu jadi bisa jadi kek ukm or kategori e
    deadline: "CLOSED", //ini deadline kompetisi kapan terakhir daftar
    ukm: "BIG DANCE CREW", //ukm e apa
  },
  {
    id: "8",
    title: "UC VORTEX ARENA 2026",
    category: "ESPORTS",
    deadline: "CLOSED",
    ukm: "E-Sports",
  },
];
