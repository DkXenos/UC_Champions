"use client";

import Link from "next/link";
import CircularGallery from '../../components/CircularGallery'

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              About UC Champions
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-500">
              Your central hub for discovering and participating in student
              competitions at Ciputra University.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="space-y-8 text-lg text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h2>
                <p>
                  Our mission is to provide a seamless and centralized platform
                  that connects Ciputra University students with a wide range of
                  competitions. We aim to foster a vibrant competitive spirit,
                  encourage skill development, and celebrate the achievements of
                  our talented students.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  What We Offer
                </h2>
                <p>
                  UC Champions simplifies the process of finding and joining
                  competitions. Whether you're interested in technology,
                  business, arts, or any other field, our platform provides
                  up-to-date information, registration details, and winner
                  announcements, all in one place.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Join Our Community
                </h2>
                <p>
                  We believe that every student has the potential to be a
                  champion. Explore the opportunities available on our platform,
                  challenge yourself, and showcase your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Our Media Partner
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
              atau ini jg bisa dikasi buat list list ukm yang berpartisipasi.
            </p>
          </div>
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
