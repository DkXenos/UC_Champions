"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { featuredCompetitions } from "../../lib/data";
import { competitionDetails } from "../../lib/dataDetails";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import "./styles.css";
import CompetitionNotAvailable from "../Components/CompetitionNotAvailable";

// Loading component for Suspense
function LoadingCompetition() {
  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading competition details...</p>
      </div>
    </main>
  );
}

// Component that uses useSearchParams
function CompetitionDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  // Find detailed competition data
  const competition = competitionDetails.find((comp) => comp.id === id);
  const basicCompetition = featuredCompetitions.find((comp) => comp.id === id);

  // If no basic competition exists, show not found
  if (!basicCompetition) {
    return (
      <main className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Competition Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The competition you're looking for doesn't exist.
          </p>
          <Link
            href="/Competitions"
            className="inline-block text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Competitions
          </Link>
        </div>
      </main>
    );
  }

  // If no detailed data exists, show "not yet available" page
  if (!competition) {
    return <CompetitionNotAvailable competition={basicCompetition} />;
  }

  // Countdown calculation function
  const calculateTimeLeft = (deadline: string) => {
    // Parse the deadline (assuming format like "15 Agu 2024")
    const monthMap: { [key: string]: string } = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      Mei: "05",
      Jun: "06",
      Jul: "07",
      Agu: "08",
      Sep: "09",
      Okt: "10",
      Nov: "11",
      Des: "12",
    };

    console.log("Parsing deadline:", deadline);
    const parts = deadline.split(" ");
    console.log("Deadline parts:", parts);

    if (parts.length === 3) {
      const day = parts[0].padStart(2, "0");
      const month = monthMap[parts[1]] || "01";
      const year = parts[2];

      console.log(`Parsed date: ${year}-${month}-${day}`);

      const deadlineDate = new Date(`${year}-${month}-${day}T23:59:59`);
      console.log("Deadline date object:", deadlineDate);

      const now = new Date();
      console.log("Current date:", now);

      const difference = deadlineDate.getTime() - now.getTime();
      console.log("Time difference (ms):", difference);

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);

        return { days, hours, minutes, seconds, expired: false };
      }
    }
    console.log("Deadline has expired or invalid format");
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  };

  // Update countdown every second
  useEffect(() => {
    if (!competition) return;

    const updateCountdown = () => {
      const result = calculateTimeLeft(competition.deadline);
      setTimeLeft(result);
      setIsExpired(result.expired);
    };

    updateCountdown(); // Initial calculation
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [competition]);

  return (
    <>
      <main
        className="compdetail-main"
        style={{
          backgroundImage: `url('Asset/CompetitionDetail/mainbgimg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // minHeight: "100vh",
        }}
      >
        <div className="compDetail-container">
          {/* Back Button */}
          <div className="backtocomp-button">
            <Link href="/Competitions">← Back to Competitions</Link>
          </div>

          {/* Title Section with Background */}
          <div className="title-section">
            <div className="title-bg-wrapper">
              <img
                src="Asset/CompetitionDetail/titlebg.svg"
                alt="title background"
                className="title-bg-image"
              />
              <img
                src="Asset/CompetitionDetail/titlemobile.svg"
                alt="title background"
                className="title-bg-image-mobile"
              />

              <div className="title-content">
                <Badge variant="secondary" className="mb-4 badge-decor">
                  {competition.category}
                </Badge>
                <h1
                  className="competition-title title-decor"
                  data-text={competition.title}
                >
                  {competition.title}
                </h1>
                <div className="competition-meta">
                  <span>Deadline: {competition.deadline}</span>
                  <span>Organized by: {competition.ukm}</span>
                  {/* <span>{competition.location}</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* info section test */}
          <div className="info-section">
            {/* About Section */}
            <div className="about-wrapper">
              <img
                src="Asset/CompetitionDetail/aboutbg.svg"
                alt="about background"
                className="about-bg-image"
              />
              <img
                src="Asset/CompetitionDetail/about-3.png"
                alt="about background"
                className="about-bg-image-mobile"
              />
              <div className="about-content">
                <h2 className="section-title">About This Competition</h2>
                <p className="about-text">{competition.description}</p>
              </div>
            </div>

            {/* Quick Info Section */}
            <div className="info-wrapper">
              <img
                src="Asset/CompetitionDetail/infobg.svg"
                alt="info background"
                className="info-bg-image"
              />
              <div className="info-content">
                <h3 className="section-title">Quick Information</h3>
                <div className="info-item">
                  <span className="info-label">Registration Fee:</span>
                  <span className="info-value">
                    {competition.registrationFee}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Max Participants:</span>
                  <span className="info-value">
                    {competition.maxParticipants}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">{competition.location}</span>
                </div>
              </div>
            </div>
            <img
              src="Asset/CompetitionDetail/decor-kiri.png"
              alt="minecart"
              className="decor-kiri"
            />

            <img
              src="Asset/CompetitionDetail/minecart.png"
              alt="minecart"
              className="minecart"
            />
          </div>

          {/* Countdown Section */}
          <div className="countdown-section">
            {isExpired ? (
              <div className="countdown-expired">
                <div className="expired-text">Registration Closed</div>
                <p className="expired-subtext">
                  The registration deadline has passed
                </p>
              </div>
            ) : (
              <div className="countdown-wrapper">
                <div className="countdown-grid">
                  <div className="countdown-item countdown-decor">
                    <div className="countdown-number text-decor">
                      {timeLeft.days}
                    </div>
                    <div className="countdown-label text-decor">Days</div>
                  </div>
                  <div className="countdown-item countdown-decor">
                    <div className="countdown-number text-decor">
                      {timeLeft.hours}
                    </div>
                    <div className="countdown-label text-decor">Hours</div>
                  </div>
                  <div className="countdown-item countdown-decor">
                    <div className="countdown-number text-decor">
                      {timeLeft.minutes}
                    </div>
                    <div className="countdown-label text-decor">Minutes</div>
                  </div>
                  <div className="countdown-item countdown-decor">
                    <div className="countdown-number text-decor">
                      {timeLeft.seconds}
                    </div>
                    <div className="countdown-label text-decor">Seconds</div>
                  </div>
                </div>
                <h2 className="countdown-title">Registration Countdown</h2>
              </div>
            )}
          </div>

          {/* Secondary Board - Timeline and Prizes Only */}
          <div className="secondary-section">
            <img
              src="Asset/CompetitionDetail/secondaryboard.svg"
              alt="secondary board background"
              className="secondary-bg-image"
            />
            <img
              src="Asset/CompetitionDetail/secondarymobile-3.png"
              alt="secondary board background"
              className="secondary-bg-image-mobile"
            />
            <div className="secondary-content">
              {/* Timeline */}
              <div className="secondary-block">
                <img
                  src="Asset/CompetitionDetail/timelinebglast.svg"
                  alt="timelinebg"
                  className="timelinebg"
                />
                <div className="timeline-content">
                  <h2 className="timeline-title">Timeline</h2>
                  <div className="timeline-list">
                    {competition.timeline.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-details">
                          <div className="timeline-event">{item.event}</div>
                          <div className="timeline-date">{item.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cp-info">
                  <img
                    src="Asset/CompetitionDetail/cpbgnew.png"
                    alt="contact person background"
                    className="cpbg"
                  />
                </div>
              </div>

              {/* Prizes */}
              <div className="secondary-block">
                <img
                  src="Asset/CompetitionDetail/prizebg.svg"
                  alt="timelinebg"
                  className="prizebg"
                />
                <div className="prizes-list">
                  <h2 className="timeline-title">Prizes</h2>

                  {competition.prizes.map((prize, index) => (
                    <div key={index} className="prize-item">
                      {prize}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Section - Separate with requirementborder background */}
          <div className="requirement-section">
            <img
              src="Asset/CompetitionDetail/requirementborder.svg"
              alt="requirement border background"
              className="requirement-bg-image"
            />
            <img
              src="Asset/CompetitionDetail/reqbg-2.png"
              alt="requirement border background"
              className="requirement-bg-image-mobile"
            />
            <div className="requirement-content">
              <h2 className="section-title">Requirements</h2>
              <ul className="requirements-list">
                {competition.requirements.map((req, index) => (
                  <li key={index} className="requirement-item">
                    <span className="bullet">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div className="register-button-wrapper">
            <button className="register-button">
              Register Now
            </button>
          </div> */}
        </div>
        {/* Hero Section
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                href="/Competitions"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                ← Back to Competitions
              </Link>
            </div>

            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {competition.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {competition.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span>📅 Deadline: {competition.deadline}</span>
                <span>🏢 Organized by: {competition.ukm}</span>
                <span>📍 {competition.location}</span>
              </div>
            </div>
          </div>
        </section> */}

        {/* Content Sections */}
        {/* <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8"> */}
        {/* Main Content */}
        {/* <div className="lg:col-span-2 space-y-8"> */}
        {/* Description */}
        {/* <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    About This Competition
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {competition.description}
                  </p>
                </div> */}

        {/* Countdown Timer */}
        {/* <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-md p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">
                    Registration Countdown
                  </h2>
                  {isExpired ? (
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">
                        Registration Closed
                      </div>
                      <p className="text-indigo-200">
                        The registration deadline has passed
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-indigo-200 mb-4">
                        Time remaining until registration closes
                      </p>
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-3xl font-bold">
                            {timeLeft.days}
                          </div>
                          <div className="text-sm text-indigo-200">Days</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-3xl font-bold">
                            {timeLeft.hours}
                          </div>
                          <div className="text-sm text-indigo-200">Hours</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-3xl font-bold">
                            {timeLeft.minutes}
                          </div>
                          <div className="text-sm text-indigo-200">Minutes</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-3xl font-bold">
                            {timeLeft.seconds}
                          </div>
                          <div className="text-sm text-indigo-200">Seconds</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div> */}

        {/* Requirements */}
        {/* <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {competition.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

        {/* Timeline */}
        {/* <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Timeline
                  </h2>
                  <div className="space-y-4">
                    {competition.timeline.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {item.event}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {item.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}

        {/* Sidebar */}
        {/* <div className="space-y-6"> */}
        {/* Quick Info */}
        {/* <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Quick Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">
                        Registration Fee:
                      </span>
                      <div className="text-gray-600">
                        {competition.registrationFee}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Max Participants:
                      </span>
                      <div className="text-gray-600">
                        {competition.maxParticipants}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Location:
                      </span>
                      <div className="text-gray-600">
                        {competition.location}
                      </div>
                    </div>
                  </div>
                </div> */}

        {/* Prizes */}
        {/* <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Prizes
                  </h3>
                  <div className="space-y-2">
                    {competition.prizes.map((prize, index) => (
                      <div
                        key={index}
                        className="text-sm text-gray-700 p-2 bg-yellow-50 rounded border-l-4 border-yellow-400"
                      >
                        {prize}
                      </div>
                    ))}
                  </div>
                </div> */}

        {/* Contact Info */}
        {/* <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">
                        Email:
                      </span>
                      <div className="text-indigo-600">
                        {competition.contactInfo.email}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Phone:
                      </span>
                      <div className="text-gray-600">
                        {competition.contactInfo.phone}
                      </div>
                    </div>
                  </div>
                </div> */}

        {/* Register Button */}
        {/* <button className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}

// Main component with Suspense boundary
export default function CompetitionDetailPage() {
  return (
    <Suspense fallback={<LoadingCompetition />}>
      <CompetitionDetailContent />
    </Suspense>
  );
}
