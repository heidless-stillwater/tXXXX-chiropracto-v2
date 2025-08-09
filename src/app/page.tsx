import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Cta from "@/components/sections/Cta";
import AiProTips from "@/components/sections/AiProTips";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Cta />
        <AiProTips />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
