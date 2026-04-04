"use client"; // Add this at the very top
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos"; // You may need to: npm install aos
import "aos/dist/aos.css"; 

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return null;
}