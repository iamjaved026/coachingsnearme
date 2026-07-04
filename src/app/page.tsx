import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Discovery from "@/components/Discovery";
import SearchExperience from "@/components/SearchExperience";
import BatchWorkspace from "@/components/BatchWorkspace";
import Schedule from "@/components/Schedule";
import Reviews from "@/components/Reviews";
import Trust from "@/components/Trust";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Discovery />
        <SearchExperience />
        <BatchWorkspace />
        <Schedule />
        <Reviews />
        <Trust />
        <Founder />
        <FAQ />
        <Download />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
