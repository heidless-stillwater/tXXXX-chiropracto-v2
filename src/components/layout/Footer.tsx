import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "../icons/logo";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About Us */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Logo className="h-8 w-8 text-primary" />
               <h3 className="text-xl font-headline font-bold">ChiroLife</h3>
            </div>
            <p className="text-muted-foreground">
              Providing top-tier chiropractic care to help you live a pain-free life. Our dedicated team is here to support your journey to wellness.
            </p>
          </div>

          {/* Column 2: Contact & Legal */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Contact & Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Woodberry Down, London N4 2TG</li>
              <li><a href="mailto:test@test.com" className="hover:text-foreground">test@test.com</a></li>
              <li><a href="tel:1234567890" className="hover:text-foreground">1234 567 890</a></li>
              <li><a href="https://website.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">website.com</a></li>
              <li className="pt-2"><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-foreground text-muted-foreground">About Us</Link></li>
              <li><Link href="#services" className="hover:text-foreground text-muted-foreground">Services</Link></li>
              <li><Link href="#testimonials" className="hover:text-foreground text-muted-foreground">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest tips and offers.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} ChiroLife. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
