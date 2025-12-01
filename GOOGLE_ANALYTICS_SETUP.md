// Google Analytics Setup Guide
// 
// To add Google Analytics to your UC Champions website:
//
// 1. Create a Google Analytics account at https://analytics.google.com
// 2. Set up a GA4 property for your website
// 3. Get your Measurement ID (format: G-XXXXXXXXXX)
// 4. Uncomment and update the code below in app/layout.tsx:
//
// Add to the <head> section:
//
// <Script
//   src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
//   strategy="afterInteractive"
// />
// <Script id="google-analytics" strategy="afterInteractive">
//   {`
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
//     gtag('config', 'G-XXXXXXXXXX');
//   `}
// </Script>
//
// Replace G-XXXXXXXXXX with your actual Measurement ID
//
// Don't forget to import Script from 'next/script' at the top of layout.tsx:
// import Script from 'next/script'
