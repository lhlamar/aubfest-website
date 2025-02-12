import { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lineup from "@/components/Lineup";
import About from "@/components/About";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import Rules from "@/components/Rules";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm"
import "./globals.css"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <h1 className="text-center">Coming soon! :)</h1>
      </body>
    </html>
  );
}
