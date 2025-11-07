"use client";

import { useState } from "react";
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

export default function AnnouncementsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompetition, setSelectedCompetition] =
    useState<FinishedCompetition | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(finishedCompetitions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = finishedCompetitions.slice(startIndex, endIndex);

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
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
              style={{ cursor: "pointer" }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            onClick={() => handlePageChange(1)}
            isActive={currentPage === 1}
            style={{ cursor: "pointer" }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      // Show ellipsis if current page is far from start
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
              style={{ cursor: "pointer" }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Show ellipsis if current page is far from end
      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            onClick={() => handlePageChange(totalPages)}
            isActive={currentPage === totalPages}
            style={{ cursor: "pointer" }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <>
      <div
        className="announcement"
        style={{
          backgroundImage: `url('Asset/Announcement/mainbg.svg')`,
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="top-section">
          <img src="Asset/Announcement/title.svg" alt="" className="title-bg" />
          <img
            src="Asset/Announcement/section-juara.svg"
            alt=""
            className="juara-img"
          />
          <img
            src="Asset/Homepage/startline.svg"
            alt=""
            className="track-img"
          />
          <img
            src="Asset/Announcement/ban-kanan.png"
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
          <img src="Asset/Announcement/bgsearchbar.svg" alt="" className="search-bg" />
        </div>
        <section className="py-16 cards">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 winner-cards">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 card-layout">
              {currentItems.map((comp) => (
                <div
                  key={comp.id}
                  className="rounded-lg shadow-md overflow-hidden flex flex-col winner-card"
                >
                  <div className="p-6 flex-grow card">
                    <span className="button-decor">
                      {comp.category}
                    </span>
                    <h3 className="comp-title mt-4 text-xl font-semibold">
                      {comp.title}
                    </h3>
                    <p className="mt-2 text-sm end-date">
                      Berakhir pada: {comp.endDate}
                    </p>
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
              <div className="pagination">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        style={{
                          cursor: currentPage === 1 ? "not-allowed" : "pointer",
                          opacity: currentPage === 1 ? 0.5 : 1,
                        }}
                      />
                    </PaginationItem>

                    {renderPaginationItems()}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        style={{
                          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                          opacity: currentPage === totalPages ? 0.5 : 1,
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>

          <div className="bottom-decor">
            <img src="Asset/Announcement/buttom-decor.svg" alt="" className="buttom-decor" />
          </div>
        </section>

        {isModalOpen && selectedCompetition && (
  <div className="modal-overlay" onClick={handleCloseModal}>
    <div
      className="modal-card"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="font-extrabold text-[#e9709f] text-2xl uppercase pixel-font">
        WINNERS
      </h2>
      <p className="text-[#d56b82] font-semibold text-sm mt-1">
        ENDED: {selectedCompetition.date}
      </p>

      <div className="flex justify-center gap-5 mt-5">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[#a64764] text-xs mb-1">PIDIDI<br />PUDING</p>
          <img src="Asset/Medals/3rd.svg" alt="3rd" className="w-14" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[#a64764] text-xs mb-1">AVIOTHIIC</p>
          <img src="Asset/Medals/1st.svg" alt="1st" className="w-16" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[#a64764] text-xs mb-1">PIDIDI<br />PIDADA</p>
          <img src="Asset/Medals/2nd.svg" alt="2nd" className="w-14" />
        </div>
      </div>

      <button
        onClick={handleCloseModal}
        className="mt-6 bg-[#f5b5ca] text-white font-semibold py-1 px-6 rounded-full hover:bg-[#f39ab7] transition"
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
