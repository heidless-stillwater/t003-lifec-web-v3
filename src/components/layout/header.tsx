
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "../theme-switcher";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={closeMenu}
        className={cn(
          "font-medium transition-colors hover:text-primary",
          pathname === link.href ? "text-primary" : "text-muted-foreground",
          isMobile ? "block text-lg py-3 px-4" : "text-sm"
        )}
      >
        {link.label}
      </Link>
    ));

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-gray-800 dark:text-white">
              EmpowerPath
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {renderNavLinks()}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:1234567890" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4" />
              1234 567 890
            </a>
            <Button asChild>
              <Link href="/contact">Start Here</Link>
            </Button>
            <ThemeSwitcher />
          </div>

          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-3/4 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                       <Sparkles className="w-8 h-8 text-primary" />
                      <span className="font-headline text-2xl font-bold">EmpowerPath</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={closeMenu}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex-grow flex flex-col items-center justify-center gap-4">
                    {renderNavLinks(true)}
                  </nav>
                  <div className="p-4 border-t text-center">
                    <Button asChild className="w-full mb-4">
                      <Link href="/contact" onClick={closeMenu}>Start Here</Link>
                    </Button>
                     <a href="tel:1234567890" className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
                      <Phone className="w-4 h-4" />
                      1234 567 890
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

    