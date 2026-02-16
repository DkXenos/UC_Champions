"use client";

import Snowfall from "react-snowfall";
import { useState, useEffect } from "react";
import "./styles.css";
import {
  finishedCompetitions,
  Winner,
  FinishedCompetition,
} from "../../lib/winner";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

export default function AnnouncementsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompetition, setSelectedCompetition] =
    useState<FinishedCompetition | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const itemsPerPage = 6;

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(finishedCompetitions.map((comp) => comp.category))),
  ];

  // Filter competitions based on search and category
  const filteredCompetitions = finishedCompetitions
    .filter(
      (comp) =>
        selectedCategory === "All" || comp.category === selectedCategory,
    )
    .filter((comp) =>
      comp.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredCompetitions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredCompetitions.slice(startIndex, endIndex);

  const handleOpenModal = (competition: FinishedCompetition) => {
    setSelectedCompetition(competition);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCompetition(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              isActive={currentPage === i}
              style={{ cursor: "pointer" }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    } else {
      // Show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
            isActive={currentPage === 1}
            style={{ cursor: "pointer" }}
          >
            1
          </PaginationLink>
        </PaginationItem>,
      );

      // Show ellipsis if needed before current page
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              isActive={currentPage === i}
              style={{ cursor: "pointer" }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }

      // Show ellipsis if needed after current page
      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      // Show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
            isActive={currentPage === totalPages}
            style={{ cursor: "pointer" }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <>
      <Snowfall color="#e4f8ffff" />

      <div
        className="announcement"
        style={{
          backgroundImage: `url('/Asset/Announcement/main-bg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="top-section">
          <img src="Asset/Announcement/title.png" alt="" className="title-bg" />
          <img
            src="Asset/Announcement/section-juara.webp"
            alt=""
            className="juara-img"
          />
          <img
            src="Asset/Homepage/startline.svg"
            alt=""
            className="track-img"
          />
          <img
            src="Asset/Announcement/bankanan.png"
            alt=""
            className="bankanan"
          />
          <img
            src="Asset/Announcement/ban-kiri.png"
            alt=""
            className="bankiri"
          />
        </div>
        <div className="bottom-section">
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="SEARCH HERE"
            />
          </div>

          <img
            src="Asset/Announcement/bgsearchbar.webp"
            alt=""
            className="search-bg"
          />

          <div className="categories-container">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={
                  selectedCategory === category ? "default" : "secondary"
                }
                onClick={() => setSelectedCategory(category)}
                className={`categories-card ${selectedCategory === category ? "active" : ""}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        <section className="winner-section">
          <div className="winner-container">
            <div className="winner-grid">
              {currentItems.map((comp) => (
                <div key={comp.id} className="winner-card">
                  <div className="winner-content">
                    <span className="button-decor category-name">
                      {comp.category}
                    </span>
                    <h3 className="competition-title">{comp.title}</h3>
                    <p className="end-date">Ends at: {comp.endDate}</p>
                  </div>
                  <div className="button-section">
                    <button
                      onClick={() => handleOpenModal(comp)}
                      className="winner-button button-decor"
                    >
                      SEE WINNERS
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-wrapper">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(Math.max(1, currentPage - 1));
                        }}
                        style={{
                          cursor: currentPage === 1 ? "not-allowed" : "pointer",
                          opacity: currentPage === 1 ? 0.5 : 1,
                          pointerEvents: currentPage === 1 ? "none" : "auto",
                        }}
                      />
                    </PaginationItem>

                    {renderPaginationItems()}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(
                            Math.min(totalPages, currentPage + 1),
                          );
                        }}
                        style={{
                          cursor:
                            currentPage === totalPages
                              ? "not-allowed"
                              : "pointer",
                          opacity: currentPage === totalPages ? 0.5 : 1,
                          pointerEvents:
                            currentPage === totalPages ? "none" : "auto",
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
          <img
            src="Asset/Announcement/bottom-decor.webp"
            alt=""
            className="bottomdecor"
          />
        </section>

        {isModalOpen && selectedCompetition && (
          <div className="popup-overlay" onClick={handleCloseModal}>
            <div
              className="popup-box popup-decor"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="Asset/Announcement/winner-title.png"
                alt=""
                className="winner-title"
              />
              <div className="podium-section border-decor">
                <div className="winner-names">
                  <h1 className="third-place">
                    {selectedCompetition.thirdPlace.name}
                  </h1>
                  <h1 className="first-place">
                    {selectedCompetition.firstPlace.name}
                  </h1>
                  <h1 className="second-place">
                    {selectedCompetition.secondPlace.name}
                  </h1>
                </div>

                <img
                  src="Asset/Announcement/podium-winner.png"
                  alt=""
                  className="podium-winner"
                />
              </div>
              <button
                onClick={handleCloseModal}
                className="winner-close-button button-decor"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </>
    // <main className="bg-gray-50 min-h-screen">
    //   <section className="py-16">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center mb-12">
    //         <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl ">
    //           Pengumuman Pemenang
    //         </h1>
    //         <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
    //           Lihat para juara dari kompetisi-kompetisi yang telah berakhir.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {currentItems.map((comp) => (
    //           <div
    //             key={comp.id}
    //             className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
    //           >
    //             <div className="p-6 flex-grow">
    //               <span className="text-sm bg-green-100 text-green-800 font-semibold px-2.5 py-0.5 rounded-full">
    //                 {comp.category}
    //               </span>
    //               <h3 className="mt-4 text-xl font-semibold text-gray-900">
    //                 {comp.title}
    //               </h3>
    //               <p className="mt-2 text-sm text-gray-500">
    //                 Berakhir pada: {comp.endDate}
    //               </p>
    //             </div>
    //             <div className="p-6 bg-gray-50">
    //               <button
    //                 onClick={() => handleOpenModal(comp)}
    //                 className="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
    //               >
    //                 Lihat Pemenang
    //               </button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Pagination */}
    //       {totalPages > 1 && (
    //         <div className="mt-12">
    //           <Pagination>
    //             <PaginationContent>
    //               <PaginationItem>
    //                 <PaginationPrevious
    //                   onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
    //                   style={{
    //                     cursor: currentPage === 1 ? "not-allowed" : "pointer",
    //                     opacity: currentPage === 1 ? 0.5 : 1,
    //                   }}
    //                 />
    //               </PaginationItem>

    //               {renderPaginationItems()}

    //               <PaginationItem>
    //                 <PaginationNext
    //                   onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
    //                   style={{
    //                     cursor: currentPage === totalPages ? "not-allowed" : "pointer",
    //                     opacity: currentPage === totalPages ? 0.5 : 1,
    //                   }}
    //                 />
    //               </PaginationItem>
    //             </PaginationContent>
    //           </Pagination>
    //         </div>
    //       )}
    //     </div>
    //   </section>

    //   {isModalOpen && selectedCompetition && (
    //     <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex justify-center items-center p-4">
    //       <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
    //         <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
    //           Pemenang - {selectedCompetition.title}
    //         </h2>

    //         <div className="space-y-6">
    //           {/* 1st Place */}
    //           <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-400">
    //             <div className="flex items-center mb-2">
    //               <span className="text-3xl mr-3">🥇</span>
    //               <h3 className="text-xl font-bold text-gray-900">1st Place</h3>
    //             </div>
    //             <div className="ml-11 space-y-1 text-gray-700">
    //               <p>
    //                 <span className="font-semibold">Nama:</span> {selectedCompetition.firstPlace.name}
    //               </p>
    //               {selectedCompetition.firstPlace.team && (
    //                 <p>
    //                   <span className="font-semibold">Tim:</span> {selectedCompetition.firstPlace.team}
    //                 </p>
    //               )}
    //               {selectedCompetition.firstPlace.project && (
    //                 <p>
    //                   <span className="font-semibold">Projek:</span> {selectedCompetition.firstPlace.project}
    //                 </p>
    //               )}
    //             </div>
    //           </div>

    //           {/* 2nd Place */}
    //           <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-2 border-gray-400">
    //             <div className="flex items-center mb-2">
    //               <span className="text-3xl mr-3">🥈</span>
    //               <h3 className="text-xl font-bold text-gray-900">2nd Place</h3>
    //             </div>
    //             <div className="ml-11 space-y-1 text-gray-700">
    //               <p>
    //                 <span className="font-semibold">Nama:</span> {selectedCompetition.secondPlace.name}
    //               </p>
    //               {selectedCompetition.secondPlace.team && (
    //                 <p>
    //                   <span className="font-semibold">Tim:</span> {selectedCompetition.secondPlace.team}
    //                 </p>
    //               )}
    //               {selectedCompetition.secondPlace.project && (
    //                 <p>
    //                   <span className="font-semibold">Projek:</span> {selectedCompetition.secondPlace.project}
    //                 </p>
    //               )}
    //             </div>
    //           </div>

    //           {/* 3rd Place */}
    //           <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-2 border-orange-400">
    //             <div className="flex items-center mb-2">
    //               <span className="text-3xl mr-3">🥉</span>
    //               <h3 className="text-xl font-bold text-gray-900">3rd Place</h3>
    //             </div>
    //             <div className="ml-11 space-y-1 text-gray-700">
    //               <p>
    //                 <span className="font-semibold">Nama:</span> {selectedCompetition.thirdPlace.name}
    //               </p>
    //               {selectedCompetition.thirdPlace.team && (
    //                 <p>
    //                   <span className="font-semibold">Tim:</span> {selectedCompetition.thirdPlace.team}
    //                 </p>
    //               )}
    //               {selectedCompetition.thirdPlace.project && (
    //                 <p>
    //                   <span className="font-semibold">Projek:</span> {selectedCompetition.thirdPlace.project}
    //                 </p>
    //               )}
    //             </div>
    //           </div>
    //         </div>

    //         <button
    //           onClick={handleCloseModal}
    //           className="mt-6 w-full bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition"
    //         >
    //           Tutup
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </main>
  );
}
