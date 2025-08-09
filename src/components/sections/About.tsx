import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-foreground mb-4">About ChiroLife</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              At ChiroLife, we are committed to providing exceptional chiropractic care in a warm and welcoming environment. Our goal is to help you achieve optimal health and wellness through natural, non-invasive treatments.
            </p>
            <p className="text-muted-foreground text-lg">
              Led by our experienced practitioners, we use the latest techniques to address a wide range of musculoskeletal issues. We believe in a personalized approach, creating treatment plans that are tailored to your specific needs and health goals. Your journey to a healthier, more vibrant life starts here.
            </p>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Chiropractor working with a patient"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="chiropractor patient"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
