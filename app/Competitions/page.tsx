"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { featuredCompetitions } from "../../lib/data";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

export default function CompetitionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    "All",
    ...Array.from(new Set(featuredCompetitions.map((comp) => comp.category))),
  ];

  const filteredCompetitions = featuredCompetitions
    .filter(
      (comp) =>
        selectedCategory === "All" || comp.category === selectedCategory
    )
    .filter((comp) =>
      comp.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredCompetitions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCompetitions = filteredCompetitions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <main className="bg-gray-50">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Semua Kompetisi
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Jelajahi semua kompetisi yang tersedia dan temukan yang tepat
              untukmu.
            </p>
          </div>

          <div className="mb-8 max-w-lg mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari lomba berdasarkan nama..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div className="mb-8 flex justify-center flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                onClick={() => setSelectedCategory(category)}
                className="cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <Badge variant="secondary">{comp.category}</Badge>
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

          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePreviousPage();
                    }}
                    className="text-gray-950"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNextPage();
                    }}
                    className="text-gray-950"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </main>
  );
}