import Link from 'next/link';

export default function Home() {
  // This is placeholder data. You will fetch this from your database later.
  const featuredCompetitions = [
    {
      id: '1',
      title: 'Programming Contest',
      category: 'Teknologi',
      deadline: '15 Agu 2024',
    },
    {
      id: '2',
      title: 'UI/UX Design Challenge',
      category: 'Desain',
      deadline: '20 Agu 2024',
    },
    {
      id: '3',
      title: 'Business Plan Competition',
      category: 'Bisnis',
      deadline: '25 Agu 2024',
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Temukan dan Ikuti Lomba Impianmu
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">
            Platform terpusat untuk semua informasi kompetisi mahasiswa di Universitas Ciputra.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/Competitions"
              className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Lihat Semua Lomba
            </Link>
            <Link
              href="/dashboard"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg border border-indigo-200 hover:bg-indigo-50 transition"
            >
              Dashboard Peserta
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Competitions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Lomba Unggulan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCompetitions.map((comp) => (
              <div key={comp.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <span className="text-sm bg-indigo-100 text-indigo-800 font-semibold px-2.5 py-0.5 rounded-full">
                    {comp.category}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {comp.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Deadline: {comp.deadline}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/Competitions/${comp.id}`}
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Lihat Detail &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/Competitions"
              className="text-lg font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Lihat semua kompetisi &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}