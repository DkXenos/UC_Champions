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
  contactPersonImage?: string;
};

export const competitionDetails: CompetitionDetail[] = [
  {
    id: "1",
    title: "STORIES OF GRACE",
    category: "SHORT MOVIE",
    deadline: "22 Feb 2026",
    ukm: "UKM PMK",
    description:
      "Lomba Short Movie Kristen merupakan kompetisi film pendek berskala nasional yang diselenggarakan oleh UKM PMK Universitas Ciputra Surabaya yang bersifat individu maupun tim. Lomba ini bertujuan menjadi wadah bagi mahasiswa Kristen dari berbagai daerah di Indonesia untuk mengekspresikan penerapan nilai-nilai iman dengan ilmu pengetahuan melalui media visual yang kreatif dan kontekstual berdurasi 2-5 menit. Melalui karya-karya yang dibuat, peserta diharapkan mampu menyampaikan pesan rohani, kesaksian pribadi, atau refleksi kehidupan dari sudut pandang kekristenan yang berdampak bagi sesama.",
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
      { date: " ", event: " " },
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890",
    },
    registrationFee: "Rp 100,000",
    maxParticipants: "5 (Per Team)",
    location: "Online Zoom",
    registrationLink: "https://forms.gle/ReUvEHU29yPwUMwWA",
    contactPersonImage: "/Asset/CompetitionDetail/ContactPerson/pmk.png",
  }, 
  {
    id: "2",
    title: "REKAM CERITA",
    category: "ARTICLE WRITING",
    deadline: "14 Feb 2026",
    ukm: "UKM BALAWARTA",
    description:
      "Lomba artikel nasional Rekam Cerita dengan tema Mengasah Pena, Menyuarakan Suara! merupakan kolaborasi UKM Balawarta Universitas Ciputra dan UC Champion untuk mendorong budaya literasi kritis di kalangan mahasiswa serta pelajar. Melalui kompetisi ini, peserta diajak mengekspresikan gagasan reflektif mengenai isu sosial, lingkungan, dan budaya melalui tulisan kreatif dan bermakna. Kegiatan ini bertujuan menciptakan ruang yang mengembangkan kreativitas, kepemimpinan, serta keberanian berkarya, sekaligus memperkuat jejaring literasi kampus di tingkat nasional.",
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
      { date: "15 Dec 2025 - 8 Feb 2026", event: "Registration" },
      { date: "9 - 21 Feb 2026", event: "Penjurian Karya" },
      { date: "19 Feb 2026", event: "Technical Meeting Peserta" },
      { date: "22 Februari 2026", event: "Awarding & Pengumuman" },
      { date: " ", event: " " },
    ],
    contactInfo: {
      email: "",
      phone: "+62 812 3456 7890",
    },
    registrationFee: "Rp 15,000 (Early Bird)",
    maxParticipants: "Individu",
    location: "Online Zoom",
    registrationLink: "https://forms.gle/ivR9o5o1dHWAJGZr5",
    contactPersonImage: "/Asset/CompetitionDetail/ContactPerson/bala.png",
  },
  {
    id: "3",
    title: "UCDC SCHOOL",
    category: "DEBATE",
    deadline: "10 Feb 2026",
    ukm: "UKM UCDS",
    description:
      "UCDC School merupakan kompetisi debat yang diinisiasi oleh UKM Universitas Ciputra Debate Society (UCDS). Kompetisi ini dirancang khusus bagi siswa SMA/sederajat sebagai wadah pengembangan keterampilan berpikir kritis, komunikasi efektif, kerja sama tim, serta keberanian berpendapat sejak dini. Menggunakan format Asian Parliamentary Style Debate dan mengusung tema “Anak Muda Berani Bersuara: Etis, Kritis, dan Analitis”, UCDC School mengangkat isu-isu relevan seputar generasi muda. Melalui kompetisi ini, UCDC School bertujuan memberikan pengalaman debat berstandar nasional hingga internasional sekaligus membentuk generasi muda yang kritis, adaptif, dan berpikiran terbuka",
    requirements: [
      "Peserta merupakan siswa aktif SMA/SMK/MA atau sederajat.",
      "Setiap tim terdiri dari 3 orang pembicara dari sekolah yang sama.",
      "Peserta wajib mengikuti Asian Parliamentary Style Debate sesuai aturan lomba.",
      "Debat menggunakan Bahasa Indonesia.",
      "Peserta wajib mematuhi seluruh peraturan dan tata tertib lomba yang telah ditetapkan.",
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
      { date: "10 Februari 2026", event: "Close Registration" },
      { date: "11 Februari 2026", event: "Technical Meeting" },
      { date: "14 Februari 2026", event: "Pre-Elimination Round" },
      { date: "15 Februari 2026", event: "Elimination Round" },
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890",
    },
    registrationFee: "Rp 250.000 (Early Bird)",
    maxParticipants: "3 (Per Team)",
    location: "Online",
    registrationLink: "https://forms.gle/zwXyyKwzo1JxxCe47",
    contactPersonImage: "/Asset/CompetitionDetail/ContactPerson/ucdc.png",
  },
  {
    id: "4",
    title: "KICKSTART CREATIVITY",
    category: "CREATIVE",
    deadline: "28 Feb 2026",
    ukm: "UKM TAEKWONDO",
    description:
      "UKM Taekwondo Universitas Ciputra Surabaya bersama UC Champion menyelenggarakan kompetisi desain sampul Kickstart Creativity. Kompetisi ini berfungsi sebagai wadah kreatif yang mempertemukan bidang seni desain dan self-defense. Peserta diberikan kesempatan untuk mengekspresikan ide dan menghasilkan karya yang akan dimanfaatkan secara nyata dalam program pengabdian masyarakat. Dengan diselenggarakan secara online dan berskala internasional, Kickstart Creativity diharapkan dapat membuka partisipasi global sekaligus menjadi langkah strategis dalam meningkatkan kualitas media pembelajaran self-defense.",
    requirements: [
      "Kompetisi Kickstart Creativity terbuka bagi peserta Internasional.",
      "Setiap peserta hanya diperbolehkan mengunggah satu karya untuk setiap satu kali proses registrasi",
      "Kompetisi hanya menerima pendaftaran individu, bukan tim atau kelompok",
      "Peserta wajib memberikan data yang valid (nama lengkap, email, dan kontak aktif)",
      "Peserta wajib mengikuti seluruh ketentuan-ketentuan yang telah ditetapkan demi kelancaran kegiatan.",
    ],
    prizes: [
      "1st Place: 750.000",
      "2nd Place: 500.000",
      "3rd Place: 250.000",
      " ",
      " ",
      " ",
    ],
    timeline: [
      { date: "5 - 19 Januari 2026", event: "Early Bird" },
      { date: "20 - 28 Januari 2026", event: "Normal Bird" },
      { date: "5 Januari - 1 Maret 2026", event: "Submission" },
      { date: "12 Maret 2026", event: "Awarding" },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890",
    },
    registrationFee: "Rp 40.000 (Early Bird)",
    maxParticipants: "1 (Individual)",
    location: "Online",
    registrationLink: "https://forms.gle/DVu4V1mE8sULCA5G7",
    contactPersonImage: "/Asset/CompetitionDetail/ContactPerson/tkw.png",
  },
  {
    id: "5",
    title: "POSTER INTERNASIONAL",
    category: "CREATIVE",
    deadline: "24 Feb 2026",
    ukm: "UKM UCBC",
    description:
      "UCBC International Poster Competition 2026 is an international poster competition organized by Universitas Ciputra Buddhist Community (UCBC). This event provides a platform for students and the general public worldwide to express creative ideas and universal values through visual art. Focusing not only on design quality but also on meaningful moral and spiritual messages, the competition aims to promote compassion, empathy, inner healing, and peace, while encouraging cross-cultural and interfaith understanding through visual communication.",
    requirements: [
      "The competition is open to students and the general public of all religions and nationalities.",
      "Each participant may submit one (1) poster only.",
      "Submissions must be original, unpublished, and not entered in other competitions.",
      "Poster language is flexible; English or bilingual is recommended.",
      "Works must not contain SARA issues, violence, pornography, or hate speech.",
    ],
    prizes: [
      "1st Place: Rp 1,000,000",
      "2nd Place: Rp 650,000",
      "3rd Place: Rp 350,000",
      " ",
      " ",
      " ",
    ],
    timeline: [
      { date: "1 - 24 February 2026", event: "Registration" },
      { date: "24 February 2026", event: "Deadline Submission" },
      { date: "24 February 2026", event: "Judging Period" },
      { date: "25 February 2026", event: "Winner Announcement" },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
    ],
    contactInfo: {
      email: "programming@uchampions.ac.id",
      phone: "+62 812 3456 7890",
    },
    registrationFee: "Rp 25.000",
    maxParticipants: "1 (Individual)",
    location: "Online",
    registrationLink: "https://forms.gle/NU1axjHzK6C22WRN8",
    contactPersonImage: "/Asset/CompetitionDetail/ContactPerson/ucbc.png",
  },
  {
    id: "6",
    title: "NEOSANTARA FEST",
    category: "BUDAYA",
    deadline: "30 Apr 2026",
    ukm: "UKM Tari X Teater",
    description:
      "Neosantara Fest merupakan lomba yang diselenggarakan oleh UKM Teater Gemintang dan UKM Tari Tradisional Universitas Ciputra. Lomba ini dikategorikan menjadi lomba monolog, tari tradisional, dan cipta baca puisi. Setiap kategori dirancang untuk menjadi wadah bagi para siswa/i SMA/SMK dan sederajat untuk mempresentasikan wajah baru budaya Indonesia. Melalui acara ini, Neosantara Fest bertujuan menjadi wadah apresiasi, ekspresi, dan pengembangan kreativitas seni budaya bagi generasi muda Indonesia, sekaligus memperkenalkan dan melestarikan kekayaan budaya nusantara melalui karya seni yang inovatif, komunikatif, dan bermakna",
    requirements: [
      "Peserta merupakan siswa aktif SMA/SMK/MA atau sederajat.",
      "Peserta wajib mengisi formulir pendaftaran secara lengkap dan benar serta sesuai dengan cabang lombaqa",
      "Karya yang dikirim tidak mengandung unsur SARA, pornografi, kekerasan berlebihan, ujaran kebencian, dan lain-lain.",
      "Karya dikumpulkan dalam bentuk video melalui Google Drive dan link harus dapat diakses (tidak private)",
    ],
    prizes: [
      "1st Place: Rp 500.000 (Tari) / 400.000 (Monolog & Puisi) + E-certificate",
      "2nd Place: Rp 400.000 (Tari) / 300.000 (Monolog & Puisi) + E-certificate ",
      "3rd Place: Rp 300.000 (Tari) / 200.000 (Monolog & Puisi) + E-certificate ",
      " ",
      " ",
      " ",
    ],
    timeline: [
      { date: "25 February - 30 April 2026", event: "Registration" },
      { date: "25 February - 30 April 2026", event: "Submission" },
      { date: "1 May 2026", event: "Judging" },
      { date: "2 May 2026", event: "Awarding" },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
    ],
    contactInfo: {
      email: "example@email.com",
      phone: "+62 812 3456 7890",
    },
    registrationFee: "Free",
    maxParticipants: "5 (Per Team)",
    location: "Online",
    registrationLink: "https://forms.gle/ZySbWWLNFWYqmGrA6",
    contactPersonImage: "/Asset/CompetitionDetail/ContactPerson/txt.png",
  },
  {
    id: "7",
    title: "BOUNCEBACK",
    category: "DANCE",
    deadline: "14 May 2026",
    ukm: "UKM BDC",
    description:
      "BOUNCEBACK merupakan lomba tahunan yang telah berjalan selama tiga tahun dari UKM Dance Universitas Ciputra, yaitu Big Dance Crew (BDC). Lomba ini berfokus pada kompetisi tari dengan dua genre utama, yaitu Modern Dance dan K-Pop Dance, serta terdiri dari tiga kategori lomba: K-Pop Solo/Duo, K-Pop Group, dan Modern Group Dance. Setiap kategori dirancang untuk menjadi wadah bagi para penari berbakat dalam menampilkan kemampuan, kreativitas, dan karakter mereka di atas panggung. Melalui acara ini, BDC bertujuan untuk mengembangkan bakat para penari, mengasah keterampilan mereka, dan menumbuhkan rasa percaya diri dengan energi serta semangat yang positif",
    requirements: [
      "Lomba dibuka untuk umum (No Age Limit)",
      "Performance tidak diperbolehkan untuk mengandung unsur SARA",
      "Penggunaan lagi clean edit atau no explicit",
      "Tidak boleh menggunakan properti yang dapat mengotori panggung"
    ],
    prizes: [
      "Modern Dance: Rp 3.500.000 (Champion) / 2.500.000 (Runner Up)",
      "K-Pop Group: Rp 2.500.000 (Champion) / 1.500.000 (Runner Up)",
      "K-Pop Solo/Duo: Rp 1.500.000 (Champion) / 1.000.000 (Runner Up)",
      " ",
      " ",
    ],
    timeline: [
      { date: "1-15 April 2026", event: "Early Bird" },
      { date: "15 - 14 May 2026", event: "Normal Registration" },
      { date: "15 May 2026", event: "TM" },
      { date: "23 May 2026", event: "Hari-H" },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
      { date: " ", event: "   " },
    ],
    contactInfo: {
      email: "example@email.com",
      phone: "+62 812 3456 7890",
    },
    registrationFee: "40K/75K/185K \n(Dance / Solo-Duo / Group)",
    maxParticipants: "3-9 (Modern Dance) \n 1-2 (Solo-Duo) \n 3-9 (Group)",
    location: "V-Junction,\n 3rd Floor,\n Ciputra World Surabaya",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfUSPw0qV4dYBvalvxiX34q_HSUFfQ5g0M7fIYltw9BH-I1sA/viewform",
    contactPersonImage: "/Asset/CompetitionDetail/ContactPerson/bdc.png",
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
