import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AppShell from "@/components/AppShell";

function SectionGap() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-10 md:py-16">
      <div className="h-px bg-[#1a1a1a]" />
    </div>
  );
}

export default function Home() {
  return (
    <AppShell>
      <Navbar />
      <main>
        <Hero />
        <SectionGap />
        <About />
        <SectionGap />
        <Services />
        <SectionGap />
        <Work />
        <SectionGap />
        <Testimonials />
        <SectionGap />
        <Contact />
      </main>
      <Footer />
    </AppShell>
  );
}
