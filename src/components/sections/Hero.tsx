import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full py-24 md:py-32 lg:py-40 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Align Your Body, Align Your Life
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
          Experience personalized chiropractic care designed to restore balance, relieve pain, and enhance your overall well-being.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="#contact">Book an Appointment</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
