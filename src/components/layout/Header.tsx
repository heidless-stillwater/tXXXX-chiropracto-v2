"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "../theme-switcher";
import { useMediaQuery } from "@/hooks/use-media-query";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pro Tips", href: "#ai-pro-tips" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-card/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-[25px] w-[25px] text-primary" />
          <span className="font-headline text-[23px] font-bold text-foreground">
            ChiroLife
          </span>
        </Link>

        {isClient && isDesktop && (
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeSwitcher />
          {isClient && isDesktop && (
            <div className="hidden items-center gap-4 md:flex">
              <a href="tel:1234567890" className="text-lg font-semibold text-foreground">
                1234 567 890
              </a>
              <Button asChild size="lg" className="text-lg">
                <Link href="#contact">Start Here</Link>
              </Button>
            </div>
          )}
           {isClient && !isDesktop && (
             <div className="md:hidden">
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
           )}
        </div>
      </div>

      {isClient && !isDesktop && isMobileMenuOpen && (
        <div className="absolute left-0 w-full bg-card shadow-lg md:hidden">
          <nav className="flex flex-col items-center gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:1234567890" className="text-lg font-semibold text-foreground">
              1234 567 890
            </a>
            <Button asChild size="lg" className="mt-2 w-full text-lg" onClick={closeMobileMenu}>
              <Link href="#contact">Start Here</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
