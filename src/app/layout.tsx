// layout.tsx
 // this now includes everything
 import "./globals.css";
import Script from "next/script";
import { Roboto, Ubuntu, Nunito } from "next/font/google";
import Header from "@/components/Header";
import About from "@/components/About";
import BootstrapClient from "@/components/Bootstrap";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${ubuntu.className} ${nunito.className}`}>
      <BootstrapClient />
        <Header />
        {children}

        {/* Vendor JS */}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        {/* <Script src="/assets/vendor/aos/aos.js" /> */}
        <Script src="/assets/vendor/typed.js/typed.umd.js" />
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" />
        <Script src="/assets/vendor/waypoints/noframework.waypoints.js" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />

        {/* Main JS */}
        <Script src="/assets/js/main.js"
        strategy="afterInteractive"
        />
      </body>
    </html>
  );
}