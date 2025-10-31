"use client";

import Link from "next/link";
import CircularGallery from '../../components/CircularGallery'
import RollingGallery from '../../components/RollingGallery'
import LogoLoop from '../../components/LogoLoop'
import "./styles.css";

export default function About() {
  
  const TEMP_LOGO_PATH = 'Asset/Logo/ .webp';
  
  const partnerLogos = [
    {
      src: TEMP_LOGO_PATH,
      alt: "Partner 1",
    },
    {
      src: TEMP_LOGO_PATH,
      alt: "Partner 2",
    },
    {
      src: TEMP_LOGO_PATH,
      alt: "Partner 3",
    },
    {
      src: TEMP_LOGO_PATH,
      alt: "Partner 4",
    },
    {
      src: TEMP_LOGO_PATH,
      alt: "Partner 5",
    },
    {
      src: TEMP_LOGO_PATH,
      alt: "Partner 6",
    },
    {
      src: TEMP_LOGO_PATH,
      alt: "Partner 7",
    },
    {
      src: TEMP_LOGO_PATH,
      alt: "Partner 8",
    }
  ];

  return (
    <>
      <div
        className="about-background"
        style={{
          backgroundImage: `url('Asset/Aboutpage/about_backgroundss.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

      <div className="about-container">

          <div className="about-title-container">
            <img src="Asset/Aboutpage/cloud_left1.svg" alt="" className="cloud_left1"/>
            <img src="Asset/Aboutpage/cloud_left2.svg" alt="" className="cloud_left2"/>
            <img
              src="Asset/Aboutpage/about_title.svg"
              alt="about-title"
              className="about-title"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="about-description-container">
            <img src="Asset/Aboutpage/cloud_right1.svg" alt="" className="cloud_right1"/>
            <img src="Asset/Aboutpage/cloud_right2.svg" alt="" className="cloud_right2"/>
            <img
              src="Asset/Aboutpage/about_description.svg"
              alt="about-description"
              className="about-description"
              loading="lazy"
              decoding="async"
            />
          </div>
    
          <div className="partners-container">

            <img src="Asset/Aboutpage/star_left.svg" alt="" className="star_left"/>
            <img src="Asset/Aboutpage/cake_right.svg" alt="" className="cake_right"/>
            <img 
              src="Asset/Aboutpage/partners_title.svg" 
              alt="partner-title" 
              className="partners-title"
              loading="lazy"
              decoding="async"
              />

            <div className="partners-rectangle-container">

            <div className="partners-rectangle">
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text"></span>
              </div>
            </div>

            <div className="partners-rectangle">
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text"></span>
              </div>
            </div>

            <div className="partners-rectangle">
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text"></span>
              </div>
            </div>

            <div className="partners-rectangle">
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text"></span>
              </div>
            </div>

            </div>
          </div>

          <div className="sponsor-container">

            <img src="Asset/Aboutpage/mochi_left.svg" alt="" className="mochi_left"/>
            <img src="Asset/Aboutpage/mochi_right.svg" alt="" className="mochi_right"/>

            <img 
            src="Asset/Aboutpage/sponsor_title.svg" 
            alt="partner-title" 
            className="sponsor-title"
            loading="lazy"
            decoding="async"
            />

            <div className="sponsor-rectangle-container">

              <div className="sponsor-rectangle">
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text"> </span>
              </div>
            </div>

            <div className="sponsor-rectangle">
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text"> </span>
              </div>
            </div>

            <div className="sponsor-rectangle">
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text"> </span>
              </div>
            </div>

            <div className="sponsor-rectangle">
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text"> </span>
              </div>
            </div>

          </div>
          </div>

          
      
      </div>   
        <img src="/Asset/Aboutpage/mochi_bottom.svg" alt="" className="mochi-bottom" />
      </div>       
    </>
  );
}
