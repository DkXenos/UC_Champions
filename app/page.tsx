"use client";

import "./styles/homepage.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "UC Champions",
      "description": "Official competition platform by Universitas Ciputra Student Council featuring Short Movie, Digital Poster, and Essay Writing competitions for Indonesian students.",
      "url": "https://www.ucchampion.com",
      "logo": "https://www.ucchampion.com/Asset/Logo/LOGO.webp",
      "sameAs": [
        "https://www.instagram.com/ucchampions",
        "https://www.youtube.com/@ucchampions"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["Indonesian", "English"]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="homepage"
        style={{
          backgroundImage: `url('Asset/Homepage/mainbg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img
          src="Asset/Homepage/leftcloudup.svg"
          alt="left cloud up"
          className="leftcloud"
          loading="lazy"
          decoding="async"
        />
        <img`
          src="Asset/Homepage/rightcloudup.svg"
          alt="right cloud up"
          className="rightcloud"
          loading="lazy"
          decoding="async"
        /> */}
        <div className="homepage-container ">
          <img
            src="Asset/Homepage/maintitle.svg"
            alt="UC Champions - Official Student Competition Platform Universitas Ciputra"
            className="img-title"
          />
          <div className="infobutton button-decor">
            <Link href="/About" className="button-info">
              WHAT'S UC CHAMPION?
            </Link>
          </div>
          <div className="videobg">
            <img
              src="Asset/Homepage/videobg.svg"
              alt="UC Champions Competition Promotional Video Frame"
              className="videoframe"
              loading="lazy"
              decoding="async"
            />
            <iframe
              width="560"
              height="315"
              src="https://drive.google.com/file/d/1ATzS0DRl-_oAABgwqWFnA1KAFH9xfiEW/preview"
              title="UC Champions 2024 - Official Competition Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video"
              loading="lazy"
            ></iframe>
          </div>

          <div className="bottomline">
            <img 
              src="Asset/Homepage/startline.svg" 
              alt="Competition Start Line Decoration" 
              className="startline"
              loading="lazy"
              decoding="async"
            />
            <img
              src="Asset/Homepage/leftdecor.webp"
              alt="Left Side Decorative Element"
              className="leftdecor"
              loading="lazy"
              decoding="async"
            />

            <img
              src="Asset/Homepage/icedecor.svg"
              alt="Ice Cream Decorative Element"
              className="icedecor"
              loading="lazy"
              decoding="async"
            />
            <img
              src="Asset/Homepage/rightdecor.webp"
              alt="Right Side Decorative Element"
              className="rightdecor"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </>
  );
}
