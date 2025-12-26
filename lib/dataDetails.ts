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
  registrationLink?: string;
};

export const competitionDetails: CompetitionDetail[] = [
  {
    id: "1",
    title: "STORIES OF GRACE",
    category: "SHORT MOVIE",
    deadline: "22 Feb 2026",
    ukm: "UKM PMK",
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
      { date: "19 Nov 2025 - 22 Feb 2026", event: "Pendaftaran" },
      { date: "25 Feb 2026", event: "Pengumpulan Karya" },
      { date: "2 Mar 2026", event: "Pengumuman Finalis" },
      { date: "7 Mar 2026", event: "Pengumuman Akhir" },
      { date: " ", event: " " }
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890"
    },
    registrationFee: "Rp 100,000",
    maxParticipants: "5 (Per Team)",
    location: "Online Zoom",
    registrationLink: "https://forms.gle/ReUvEHU29yPwUMwWA"
  },
  {
    id: "2",
    title: "REKAM CERITA",
    category: "ARTICLE WRITING",
    deadline: "5 Jan 2026",
    ukm: "UKM BALAWARTA",
    description: "Lomba artikel nasional Rekam Cerita dengan tema Mengasah Pena, Menyuarakan Suara! merupakan kolaborasi UKM Balawarta Universitas Ciputra dan UC Champion untuk mendorong budaya literasi kritis di kalangan mahasiswa serta pelajar. Melalui kompetisi ini, peserta diajak mengekspresikan gagasan reflektif mengenai isu sosial, lingkungan, dan budaya melalui tulisan kreatif dan bermakna. Kegiatan ini bertujuan menciptakan ruang yang mengembangkan kreativitas, kepemimpinan, serta keberanian berkarya, sekaligus memperkuat jejaring literasi kampus di tingkat nasional.",
    requirements: [
      "Peserta merupakan mahasiswa aktif (PTN/PNS) atau siswa SMA/sederajat di seluruh Indonesia",
      "Peserta dapat mendaftar secara individu, bukan tim",
      "Setiap peserta hanya diperbolehkan mengirim satu karya artikel",
      "Peserta wajib mengikuti seluruh rangkaian acara, termasuk technical meeting dan awarding", 
    ],
    prizes: [
      "1st Place: Rp500.000",
      "2nd Place: Rp300.000",
      "3rd Place: Rp250.000",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
     
    ],
    timeline: [
      { date: "15 Dec 2025 - 5 Jan 2026", event: "Early Bird Registration" },
      { date: "9 - 21 Feb 2026", event: "Penjurian Karya" },
      { date: "19 Feb 2026", event: "Technical Meeting Peserta" },
      { date: "22 Februari 2026", event: "Awarding & Pengumuman" },
      { date: " ", event: " " }
    ],
    contactInfo: {
      email: "",
      phone: "+62 812 3456 7890"
    },  
    registrationFee: "Rp 15,000 (Early Bird)",
    maxParticipants: "Individu",
    location: "Online Zoom",
    registrationLink: "https://forms.gle/ivR9o5o1dHWAJGZr5"
  },
  {
    id: "3",
    title: "UCDC SCHOOL",
    category: "DEBATE",
    deadline: "28 Jan 2026",
    ukm: "UKM UCDS",
    description: "UCDC School merupakan kompetisi debat yang diinisiasi oleh UKM Universitas Ciputra Debate Society (UCDS). Kompetisi ini dirancang khusus bagi siswa SMA/sederajat sebagai wadah pengembangan keterampilan berpikir kritis, komunikasi efektif, kerja sama tim, serta keberanian berpendapat sejak dini. Menggunakan format Asian Parliamentary Style Debate dan mengusung tema “Anak Muda Berani Bersuara: Etis, Kritis, dan Analitis”, UCDC School mengangkat isu-isu relevan seputar generasi muda. Melalui kompetisi ini, UCDC School bertujuan memberikan pengalaman debat berstandar nasional hingga internasional sekaligus membentuk generasi muda yang kritis, adaptif, dan berpikiran terbuka",
    requirements: [
      "Peserta merupakan siswa aktif SMA/SMK/MA atau sederajat.",
      "Setiap tim terdiri dari 3 orang pembicara dari sekolah yang sama.",
      "Peserta wajib mengikuti Asian Parliamentary Style Debate sesuai aturan lomba.",
      "Debat menggunakan Bahasa Indonesia.",
      "Peserta wajib mematuhi seluruh peraturan dan tata tertib lomba yang telah ditetapkan."    
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
      { date: "27 December 2026", event: "Open Registration" },
      { date: "28 Januari 2026", event: "Close Registration" },
      { date: "11 Februari 2026", event: "Technical Meeting" },
      { date: "14 Februari 2026", event: "Pre-Elimination Round" },
      { date: "15 Februari 2026", event: "Elimination Round" }
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890"
    },
    registrationFee: "Rp 250.000 (Early Bird)",
    maxParticipants: "3 (Per Team)",
    location: "Online",
    registrationLink: "https://forms.gle/zwXyyKwzo1JxxCe47"
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