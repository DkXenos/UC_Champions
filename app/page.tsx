"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            UC Champion 2026
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">
            Race Beyond the Limits.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/Competitions"
              className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              View All Competitions
            </Link>
            <Link
              href="/Announcement"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg border border-indigo-200 hover:bg-indigo-50 transition"
            >
              View Announcement
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="aspect-video">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/TXo3j1jmKlQ?si=fnflcHY8HbpbesEO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
