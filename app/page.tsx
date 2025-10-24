"use client";

import "./styles/homepage.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const leftDecorRef = useRef<HTMLImageElement>(null);
  const rightDecorRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Animate left decor from left side
    if (leftDecorRef.current) {
      gsap.from(leftDecorRef.current, {
        x: -500,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      });
    }

    // Animate right decor from right side
    if (rightDecorRef.current) {
      gsap.from(rightDecorRef.current, {
        x: 500,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      });
    }
  }, []);

  return (
    <>
      <div
        className="homepage"
        style={{
          backgroundImage: `url('Asset/Homepage/mainbg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
            src="Asset/Homepage/leftcloudup.svg"
            alt="left cloud up"
            className="leftcloud"
          />
          <img
            src="Asset/Homepage/rightcloudup.svg"
            alt="right cloud up"
            className="rightcloud"
          />
        <div className="homepage-container ">
          <img
            src="Asset/Homepage/maintitle.svg"
            alt="main-title"
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
              alt="videobg"
              className="videoframe"
            />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TXo3j1jmKlQ?si=fnflcHY8HbpbesEO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video"
            ></iframe>
          </div>

          <div className="bottomline">
            <img src="Asset/Homepage/startline.svg" alt="" />
            <img
              ref={leftDecorRef}
              src="Asset/Homepage/leftdecor.png"
              alt=""
              className="leftdecor"
            />
            
            <img
              src="Asset/Homepage/icedecor.svg"
              alt=""
              className="icedecor"
            />
            <img
              ref={rightDecorRef}
              src="Asset/Homepage/rightdecor.svg"
              alt=""
              className="rightdecor"
            />
          </div>
        </div>
      </div>
    </>
  );
}
