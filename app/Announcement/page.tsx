"use client";

import { useState } from "react";
import "./styles.css";
import { finishedCompetitions, Winner } from "../../lib/winner";

export default function AnnouncementsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWinner, setSelectedWinner] = useState<Winner | null>(null);

  const handleOpenModal = (winner: Winner) => {
    setSelectedWinner(winner);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWinner(null);
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl ">
              Pengumuman Pemenang
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lihat para juara dari kompetisi-kompetisi yang telah berakhir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishedCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <span className="text-sm bg-green-100 text-green-800 font-semibold px-2.5 py-0.5 rounded-full">
                    {comp.category}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {comp.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Berakhir pada: {comp.endDate}
                  </p>
                </div>
                <div className="p-6 bg-gray-50">
                  <button
                    onClick={() => handleOpenModal(comp.winner)}
                    className="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Lihat Pemenang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedWinner && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Pemenang
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Nama:</span> {selectedWinner.name}
              </p>
              {selectedWinner.team && (
                <p>
                  <span className="font-semibold">Tim:</span> {selectedWinner.team}
                </p>
              )}
              {selectedWinner.project && (
                <p>
                  <span className="font-semibold">Projek:</span>{" "}
                  {selectedWinner.project}
                </p>
              )}
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-6 w-full bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}