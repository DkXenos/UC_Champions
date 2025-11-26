"use client";

import { useEffect, useState, useTransition, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import "./PageLoader.css";

function PageLoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  // Show loader immediately on mount
  useEffect(() => {
    // Keep showing for at least 600ms
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Show loader instantly on any route change
  useEffect(() => {
    // Set loading immediately
    setLoading(true);

    // Minimum display time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Always show during navigation
  if (!loading && !isPending) return null;

  return (
    <div
      className="page-loader-overlay"
      style={{
        backgroundImage: `url('Asset/Homepage/mainbg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="page-loader-content">
        <div className="logo-spinner-wrapper">
          <img
            src="/Asset/Logo/LOGO.webp"
            alt="UC Champions Logo"
            className="spinning-logo"
          />
          <div className="spinner-ring"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}

export default function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderContent />
    </Suspense>
  );
}
