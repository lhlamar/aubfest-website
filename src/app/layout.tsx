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
      <div className="bg-background text-primary_text scroll-smooth">
      <Header />
      <section id="hero" className="h-screen flex items-center justify-center">
        <Hero />
      </section>
      <section id="lineup" className="h-screen flex items-center justify-center">
        <Lineup />
      </section>
      <section id="about" className="h-screen flex items-center justify-center">
        <About />
      </section>
      <section id="location" className="h-screen flex items-center justify-center">
        <Location />
      </section>
      <section id="schedule" className="h-screen flex items-center justify-center">
        <Schedule />
      </section>
      <section id="rules" className="h-screen flex items-center justify-center">
        <Rules />
      </section>
      <section id="faq" className="h-screen flex items-center justify-center">
        <FAQ />
      </section>
      <section id="get-involved" className="h-screen flex items-center justify-center">
        <ContactForm />
      </section>
      <Footer />
    </div>
      </body>
    </html>
  );
}
