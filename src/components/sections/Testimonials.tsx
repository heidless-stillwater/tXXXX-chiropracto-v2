import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    text: "I've been going to ChiroLife for months and have never felt better. The personalized care and attention to detail are second to none. My chronic back pain is finally gone!",
  },
  {
    name: "Michael B.",
    avatar: "MB",
    text: "The team at ChiroLife is fantastic. They are professional, knowledgeable, and truly care about their patients' well-being. I highly recommend them to anyone seeking chiropractic care.",
  },
  {
    name: "Jessica P.",
    avatar: "JP",
    text: "After a car accident, I was in constant pain. ChiroLife's rehabilitation program was a lifesaver. They helped me recover and get back to my normal life. Thank you!",
  },
    {
    name: "David H.",
    avatar: "DH",
    text: "I was skeptical about chiropractic care, but the results speak for themselves. My posture has improved, and the tension headaches I used to get are a thing of the past.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground">What Our Patients Say</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Real stories from people we've helped on their journey to wellness.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <Avatar>
                          <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold ml-4">{testimonial.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
