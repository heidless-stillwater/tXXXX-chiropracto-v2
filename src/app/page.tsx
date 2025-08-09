import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Cta from "@/components/sections/Cta";
import AiProTips from "@/components/sections/AiProTips";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Cta />
      <AiProTips />
      <Testimonials />
      <Contact />
    </>
  );
}
