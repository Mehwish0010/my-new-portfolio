import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Divider() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
      <div className="h-px bg-[#1a1a1a]" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Work />
        <Divider />
        <Testimonials />
        <Divider />
        <Process />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
