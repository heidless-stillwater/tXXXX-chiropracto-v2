import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold mb-4">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Don't let pain hold you back any longer. Schedule your consultation today and take the first step towards a healthier, happier you.
        </p>
        <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
          <Link href="#contact">Book Your Appointment Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default Cta;
