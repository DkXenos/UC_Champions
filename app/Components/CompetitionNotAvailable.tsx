import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Competition } from "../../lib/data";
import "../styles/notavailable.css";

interface CompetitionNotAvailableProps {
  competition: Competition;
}

export default function CompetitionNotAvailable({
  competition,
}: CompetitionNotAvailableProps) {
  return (
    <div className="notavailable-background">
      <div className="notavailable-container notavailable-decor">
        <div className="notavailable-content">
          <img
            src="/Asset/notavailable/jelibiru.svg"
            alt=""
            className="jelibiru"
          />
          <h1 className="notavailable-title">Oops! Nothing Here Yet</h1>
          <p className="notavailable-description">
            We're still working on the details for the Competition
          </p>
          <div className="notavailable-buttons notavailable-button-decor">
            <Link href="/Competitions" className="notavailable-btn-back">
              ← Back to Competitions
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <main className="bg-gray-50 min-h-screen py-20">
    //   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="mb-6">
    //       <Link
    //         href="/Competitions"
    //         className="text-indigo-600 hover:text-indigo-500 font-medium"
    //       >
    //         ← Back to Competitions
    //       </Link>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-md p-12 text-center">
    //       <div className="mb-6">
    //         <Badge variant="secondary" className="mb-4">
    //           {competition.category}
    //         </Badge>
    //         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    //           {competition.title}
    //         </h1>
    //       </div>

    //       <div className="mb-8">
    //         <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
    //           <span className="text-4xl text-gray-400">📋</span>
    //         </div>
    //         <h2 className="text-2xl font-bold text-gray-900 mb-4">Details Not Yet Available</h2>
    //         <p className="text-gray-600 max-w-2xl mx-auto mb-6">
    //           We're still working on the detailed information for this competition.
    //           Please check back later or contact the organizers for more information.
    //         </p>

    //         <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto mb-8">
    //           <div className="text-sm text-gray-600 space-y-2">
    //             <div><span className="font-semibold">Competition:</span> {competition.title}</div>
    //             <div><span className="font-semibold">Category:</span> {competition.category}</div>
    //             <div><span className="font-semibold">Deadline:</span> {competition.deadline}</div>
    //             <div><span className="font-semibold">Organized by:</span> {competition.ukm}</div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //         <Link
    //           href="/Competitions"
    //           className="inline-block bg-gray-200 text-gray-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-300 transition"
    //         >
    //           Browse Other Competitions
    //         </Link>
    //         <button className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
    //           Get Notified When Available
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
