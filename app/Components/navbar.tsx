"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../App.css";
import "../styles/navbar.css";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const pathname = usePathname();
  const container = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useGSAP(
    () => {
      const title = titleRef.current;
      if (title) {
        const screenWidth = window.innerWidth;

        gsap.set(title, { x: screenWidth });

        gsap.to(title, {
          x: -title.offsetWidth,
          duration: 5,
          repeat: -1,
          ease: "linear",
        });
      }
    },
    { scope: container, dependencies: [] }
  );

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Competitions", label: "Competitions" },
    { href: "/Announcement", label: "Announcement" },
    { href: "/About", label: "About" },
  ];

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="Asset/Logo/LOGO.webp" alt="logo" />
          </div>
          {/* Desktop Navigation */}
          <ul className="nav main-nav-list">
            <li className="nav-item">
              <Link href="/" className="button-navbar">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Competitions" className="button-navbar">
                COMPETITIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Announcement" className="button-navbar">
                ANNOUNCEMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/About" className="button-navbar">
                ABOUT
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-line ${isMenuOpen ? 'open-top' : ''}`} />
            <div className={`hamburger-line ${isMenuOpen ? 'open-middle' : ''}`} />
            <div className={`hamburger-line ${isMenuOpen ? 'open-bottom' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Below Navbar */}
      <div className={`mobile-menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link
            href="/"
            onClick={closeMenu}
            className={
              pathname === "/"
                ? "button-navbar-selected mobile-nav-link"
                : "button-navbar mobile-nav-link"
            }
          >
            <p className={pathname === "/" ? "mobile-nav-text active" : "mobile-nav-text default"}>
              HOME
            </p>
          </Link>
          <Link
            href="/Competitions"
            onClick={closeMenu}
            className={
              pathname === "/Competitions"
                ? "button-navbar-selected mobile-nav-link"
                : "button-navbar mobile-nav-link"
            }
          >
            <p className={pathname === "/Competitions" ? "mobile-nav-text active" : "mobile-nav-text default"}>
              COMPETITIONS
            </p>
          </Link>
          <Link
            href="/Announcement"
            onClick={closeMenu}
            className={
              pathname === "/Announcement"
                ? "button-navbar-selected mobile-nav-link"
                : "button-navbar mobile-nav-link"
            }
          >
            <p className={pathname === "/Announcement" ? "mobile-nav-text active" : "mobile-nav-text default"}>
              ANNOUNCEMENT
            </p>
          </Link>
          <Link
            href="/About"
            onClick={closeMenu}
            className={
              pathname === "/About"
                ? "button-navbar-selected mobile-nav-link"
                : "button-navbar mobile-nav-link"
            }
          >
            <p className={pathname === "/About" ? "mobile-nav-text active" : "mobile-nav-text default"}>
              ABOUT
            </p>
          </Link>
        </div>
      </div>

      <div
        ref={container}
        style={{}}
        className="containerbottom"
      >
        <img
          src="Asset/navbar/navbarbottom.svg"
          alt="navbabottom"
          className="navbar-bottom"
        />
        <h1
          ref={titleRef}
          className="bottom-title"
          style={{ position: "absolute", whiteSpace: "nowrap" }}
        >
          WELCOME TO UC CHAMPION 2026
        </h1>
      </div>
      <div>
        <img
          src="Asset/navbar/navbarbottomdecor.svg"
          alt="navbabottom"
          className="navbar-bottom-decor"
        />
      </div>
    </>
  );
}

{
  /* <>
      <div className="fixed top-0 z-[1000]">
        <nav
          className="relative w-screen z-[10] h-[60px] sm:h-[113px] flex items-center justify-between px-6 sm:px-8"
        >
          <div className="flex-1 relative z-20 flex items-center">
            <Link href="/">
              <img
                src="/Asset/Logo/LOGO.webp"
                alt="logo"
                className="h-10 w-auto block"
                style={{ zIndex: 20 }}
              />
            </Link>
          </div>

          <div className="hidden md:flex font-roboto font-extrabold items-center gap-4">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "group button-navbar-selected p-1 lg:p-2 xl:p-2 rounded-full border-solid border-2 sm:px-6"
                  : "group button-navbar p-1 lg:p-2 xl:p-2 rounded-full border-solid border-2 sm:px-6"
              }
            >
              <p
                className={
                  pathname === "/"
                    ? "text-[#FFF0B8]"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8]"
                }
              >
                BERANDA
              </p>
            </Link>
            <Link
              href="/about"
              className={
                pathname !== "/about"
                  ? "group button-navbar p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
                  : "group button-navbar-selected p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
              }
            >
              <p
                className={
                  pathname === "/about"
                    ? "text-[#FFF0B8]"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8]"
                }
              >
                TENTANG
              </p>
            </Link>
            <Link
              href="/schedule"
              className={
                pathname !== "/schedule"
                  ? "group button-navbar p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
                  : "group button-navbar-selected p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
              }
            >
              <p
                className={
                  pathname === "/schedule"
                    ? "text-[#FFF0B8]"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8]"
                }
              >
                JADWAL
              </p>
            </Link>
            <Link
              href="/rules"
              className={
                pathname !== "/rules"
                  ? "group button-navbar p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
                  : "group button-navbar-selected p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
              }
            >
              <p
                className={
                  pathname === "/rules"
                    ? "text-[#FFF0B8]"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8]"
                }
              >
                PERATURAN
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </> */
}
