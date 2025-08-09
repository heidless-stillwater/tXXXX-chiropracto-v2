import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Zap, HeartPulse, Bone, ShieldCheck, Smile } from "lucide-react";

const services = [
  {
    icon: <Bone className="h-10 w-10 text-primary" />,
    title: "Spinal Adjustments",
    description: "Core chiropractic treatment to correct alignment, improve function, and relieve pain."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Pain Management",
    description: "Targeted care for chronic pain, headaches, and sciatica through non-invasive techniques."
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: "Wellness Care",
    description: "Proactive treatments to maintain spinal health and prevent future issues."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Injury Rehabilitation",
    description: "Specialized programs to help you recover from sports, work, or auto-related injuries."
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "Postural Correction",
    description: "Analysis and correction of posture to reduce strain and improve overall health."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground">Our Services</h2>
          <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of services to meet your unique health needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center pb-4">
                {service.icon}
                <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
           <Card className="md:col-span-2 lg:col-span-1 flex flex-col text-center items-center p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center pb-4">
                <Smile className="h-10 w-10 text-primary" />
                <CardTitle className="font-headline mt-4">Lifestyle & Nutritional Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Guidance on diet, exercise, and habits to complement your treatment and support long-term wellness.</CardDescription>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
