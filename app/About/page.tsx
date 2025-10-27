"use client";

import Link from "next/link";
import CircularGallery from '../../components/CircularGallery'
import RollingGallery from '../../components/RollingGallery'
import LogoLoop from '../../components/LogoLoop'
import "./styles.css";

export default function About() {
  
  const TEMP_LOGO_PATH = 'Asset/Logo/LOGO.webp';
  
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
          backgroundImage: `url('Asset/Aboutpage/about_backgrounds.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

      <div className="about-container">

          <img
            src="Asset/Aboutpage/about_title.svg"
            alt="about-title"
            className="about-title"
          />
    
          <img
            src="Asset/Aboutpage/about_description.svg"
            alt="about-description"
            className="about-description"
          />
          
          <div className="partners-container">

            <img 
            src="Asset/Aboutpage/partners_title.svg" 
            alt="partner-title" 
            className="partners-title"
            />

            {/* data media partner kak.. */}

            <div className="partners-rectangle-container">

              <div className="partners-rectangle">
              <img 
                src="Asset/Aboutpage/rectangle.svg" 
                alt="partners rectangle" 
                className="partners_rectangle"
              />
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text">LOGO</span>
              </div>
            </div>

            <div className="partners-rectangle">
              <img 
                src="Asset/Aboutpage/rectangle.svg" 
                alt="partners rectangle" 
                className="partners_rectangle"
              />
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text">LOGO</span>
              </div>
            </div>

            <div className="partners-rectangle">
              <img 
                src="Asset/Aboutpage/rectangle.svg" 
                alt="partners rectangle" 
                className="partners_rectangle"
              />
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text">LOGO</span>
              </div>
            </div>

            <div className="partners-rectangle">
              <img 
                src="Asset/Aboutpage/rectangle.svg" 
                alt="partners rectangle" 
                className="partners_rectangle"
              />
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text">LOGO</span>
              </div>
            </div>

            </div>
          </div>

          <div className="sponsor-container">

            <img 
            src="Asset/Aboutpage/sponsor_title.svg" 
            alt="partner-title" 
            className="sponsor-title"
            />

            {/* data sponsor kak.. */}

            <div className="partners-rectangle-container">

              <div className="partners-rectangle">
              <img 
                src="Asset/Aboutpage/rectangle.svg" 
                alt="partners rectangle" 
                className="partners_rectangle"
              />
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text">LOGO</span>
              </div>
            </div>

            <div className="partners-rectangle">
              <img 
                src="Asset/Aboutpage/rectangle.svg" 
                alt="partners rectangle" 
                className="partners_rectangle"
              />
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text">LOGO</span>
              </div>
            </div>

            <div className="partners-rectangle">
              <img 
                src="Asset/Aboutpage/rectangle.svg" 
                alt="partners rectangle" 
                className="partners_rectangle"
              />
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text">LOGO</span>
              </div>
            </div>

            <div className="partners-rectangle">
              <img 
                src="Asset/Aboutpage/rectangle.svg" 
                alt="partners rectangle" 
                className="partners_rectangle"
              />
              <div className="partners-rectangle-overlay">
                <span className="partners-overlay-text">LOGO</span>
              </div>
            </div>

          </div>
          </div>
        </div>   
      </div>       
    </>
  );
}
