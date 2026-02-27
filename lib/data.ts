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
    deadline: "OPENED",
    ukm: "Balawarta",
  },
  {
    id: "3",
    title: "UCDC SCHOOLS 2026",
    category: "DEBATE",
    deadline: "OPENED",
    ukm: "UCDS",
  },
  {
    id: "4",
    title: "KICKSTART CREATIVITY",
    category: "CREATIVE",
    deadline: "OPENED",
    ukm: "Taekwondo",
  },
  {
    id: "5",
    title: "LOMBA POSTER INTERNASIONAL",
    category: "CREATIVE",
    deadline: "OPENED",
    ukm: "UCBC",
  },
  {
    id: "6",
    title: "NEOSANTARA FEST",
    category: "BUDAYA",
    deadline: "OPENED",
    ukm: "Teater X Tari",
  },
  {
    id: "7",
    title: "BOUNCEBACK", //ini judul kompetisi
    category: "DANCE", //kek buat di badge yg filtering gitu jadi bisa jadi kek ukm or kategori e
    deadline: "CLOSED", //ini deadline kompetisi kapan terakhir daftar
    ukm: "BIG DANCE CREW", //ukm e apa
  },
];
