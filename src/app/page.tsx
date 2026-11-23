import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Materials from "@/components/sections/Materials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Materials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
