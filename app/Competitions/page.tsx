"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./styles.css";
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
import Footer from "../Components/footer";

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
    <>
    <main className="competition-page">

        <div className="competition-container" 
        style={{
          backgroundImage: `url('Asset/Competitionpage/competition_bg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        >

           <img
            className="img-title"
            src="Asset/Competitionpage/title_competition.svg"
            alt="main-title"
            loading="lazy"
            decoding="async"
          />

          <div className="search-container">
            <img src="Asset/Competitionpage/cloud_left1.svg" alt="" className="cloud_left" />
            <img src="Asset/Competitionpage/cloud_right2.svg" alt="" className="cloud_right" />
 
            <input
              className="search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="SEARCH HERE"
            />
          </div>

          <div className="categories-container">
            {categories.map((category) => (
              <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              onClick={() => setSelectedCategory(category)}
              className={`categories-card ${selectedCategory === category ? "active" : ""}`}
              >
              {category}
              </Badge>
            ))}
          </div>

          <div className="competition-detail-container">
            {paginatedCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="competition-detail-card"
              >
                <div className="detail-card">
                  <Badge variant="secondary" className="categories-in-detail">{comp.category}</Badge>
                  <h3 className="title-text">
                    {comp.title}
                  </h3>
                  <p className="deadline-text">
                    DEADLINE: {comp.deadline}
                  </p>
                  <div>
                    <Link
                      href={`/CompetitionDetail?id=${comp.id}`}
                      className="detail-text"
                    >
                      LIHAT DETAIL &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePreviousPage();
                    }}
                    className="pagination-arrow"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="pagination-number">
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
                    className="pagination-arrow"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <img src="Asset/Competitionpage/portal.svg" alt="portal" className="img-portal" loading="lazy" decoding="async" />
          <img src="Asset/Competitionpage/car.svg" alt="car" className="img-car" loading="lazy" decoding="async" />
         

          <div className="stacked-images">
            <img src="Asset/Homepage/startline.svg" alt="" className="img1" loading="lazy" decoding="async" /> 
          </div>

        </div>

    </main>
    </>
  );
}