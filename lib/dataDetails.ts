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

export const competitionDetails: CompetitionDetail[] = [
  {
    id: "1",
    title: "STORIES OF GRACE",
    category: "SHORT MOVIE",
    deadline: "22 Feb 2026",
    ukm: "PMK",
    description: "Lomba Short Movie Kristen merupakan kompetisi film pendek berskala nasional yang diselenggarakan oleh UKM PMK Universitas Ciputra Surabaya yang bersifat individu maupun tim. Lomba ini bertujuan menjadi wadah bagi mahasiswa Kristen dari berbagai daerah di Indonesia untuk mengekspresikan penerapan nilai-nilai iman dengan ilmu pengetahuan melalui media visual yang kreatif dan kontekstual berdurasi 2-5 menit. Melalui karya-karya yang dibuat, peserta diharapkan mampu menyampaikan pesan rohani, kesaksian pribadi, atau refleksi kehidupan dari sudut pandang kekristenan yang berdampak bagi sesama.",
    requirements: [
      "Mahasiswa aktif dari seluruh Indonesia (individu/tim maksimal 5 orang)",
      "Karya harus sesuai dengan tema “Setiap Kisah adalah Kasih Karunia”, serta mencerminkan nilai iman, kasih, dan kesaksian hidup Kristen.",
      "Durasi karya adalah 2–5 menit, berformat MP4/MOV 1080p rasio 16:9, menggunakan bahasa Indonesia (boleh bahasa daerah dengan subtitle Indonesia)",
      "Wajib merupakan Karya orisinal",
      "Karya tidak boleh mengandung unsur SARA, pornografi, atau kekerasan berlebihan",
    ],
    prizes: [
      "1st Place: Rp1.000.000 + Sertifikat Juara 1",
      "2nd Place: Rp750.000 + Sertifikat Juara 2",
      "3rd Place: Rp500.000 + Sertifikat Juara 3",
      "Juara Favorit: Rp250.000 + Sertifikat Juara Favorit",
      "Peserta Internal UC: KP Kompetisi + Sertifikat Online",
      "Seluruh Peserta: Sertifikat Online",
    ],
    timeline: [
      { date: "19 November 2025 - 22 Februari 2026", event: "Pendaftaran" },
      { date: "25 Februari 2026", event: "Pengumpulan Karya" },
      { date: "2 Maret 2026", event: "Pengumuman Finalis" },
      { date: "7 Maret 2026", event: "Pengumuman Akhir" },
      { date: " ", event: " " }
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890"
    },
    registrationFee: "Rp 100,000",
    maxParticipants: "5 (Per Team)",
    location: "Online Zoom"
  },
  {
    id: "2",
    title: "UI/UX Design Challenge",
    category: "Desain",
    deadline: "25 Nov 2025",
    ukm: "Tabletop",
    description: "Showcase your creativity and design thinking skills in our UI/UX Design Challenge. Design innovative user interfaces and experiences for real-world problems.",
    requirements: [
      "Mahasiswa aktif dari seluruh Indonesia (individu/tim maksimal 5 orang)",
      "Karya harus sesuai dengan tema “Setiap Kisah adalah Kasih Karunia”, serta mencerminkan nilai iman, kasih, dan kesaksian hidup Kristen.",
      "Durasi karya adalah 2–5 menit, berformat MP4/MOV 1080p rasio 16:9, menggunakan bahasa Indonesia (boleh bahasa daerah dengan subtitle Indonesia)",
      "Wajib merupakan Karya orisinal",
      "Karya tidak boleh mengandung unsur SARA, pornografi, atau kekerasan berlebihan",
    ],
    prizes: [
      "1st Place: Rp 4,000,000 + Internship Opportunity",
      "2nd Place: Rp 2,500,000 + Design Software License",
      "3rd Place: Rp 1,000,000 + Online Course Access",
      "Best Innovation Award: Rp 500,000"
    ],
    timeline: [
      { date: "5 Okt 2025", event: "Registration Opens" },
      { date: "20 Nov 2025", event: "Registration Closes" },
      { date: "22 Nov 2025", event: "Design Brief Release" },
      { date: "25 Nov 2025", event: "Submission Deadline" },
      { date: "27 Nov 2025", event: "Results Announcement" }
    ],
    contactInfo: {
      email: "design@uchampions.ac.id",
      phone: "+62 812 3456 7891"
    },
    registrationFee: "Rp 25,000",
    maxParticipants: "50 teams (max 3 members per team)",
    location: "Design Studio, Creative Arts Building"
  },
  {
    id: "3",
    title: "UC VORTEX ARENA",
    category: "Esport",
    deadline: "25 Okt 2025",
    ukm: "ESPORTS",
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
      { date: "15 Sep 2025", event: "Registration Opens" },
      { date: "20 Okt 2025", event: "Registration Closes" },
      { date: "22 Okt 2025", event: "Business Brief Release" },
      { date: "25 Okt 2025", event: "Submission Deadline" },
      { date: "30 Okt 2025", event: "Results Announcement" }
    ],
    contactInfo: {
      email: "design@uchampions.ac.id",
      phone: "+62 812 3456 7891"
    },
    registrationFee: "Rp 25,000",
    maxParticipants: "50 teams (max 3 members per team)",
    location: "Design Studio, Creative Arts Building"
  },
  
];

/*
TEMPLATE FOR NEW COMPETITIONS:
{
  id: "",
  title: "",
  category: "",
  deadline: "",
  ukm: "",
  description: "",
  requirements: [
    ""
  ],
  prizes: [
    "1st Place: ",
    "2nd Place: ",
    "3rd Place: ",
    "Best Award: "
  ],
  timeline: [
    { date: "Date", event: "Registration Opens" },
    { date: "Date", event: "Registration Closes" },
    { date: "Date", event: "Event" },
    { date: "Date", event: "Submission Deadline" },
    { date: "Date", event: "Results Announcement" }
  ],
  contactInfo: {
    email: "",
    phone: ""
  },
  registrationFee: "Rp ",
  maxParticipants: "",
  location: ""
}
*/