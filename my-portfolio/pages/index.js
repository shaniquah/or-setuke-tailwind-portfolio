import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Projects from '@/components/Projects'
import Email from "@/components/EmailMe";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black  ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Achievements/>
        <About />
        <Projects/>
        <Email/>
      </div>
        <Footer />
    </main>
  );
}
