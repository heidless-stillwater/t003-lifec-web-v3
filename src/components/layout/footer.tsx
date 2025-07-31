import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, Globe } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="font-headline text-2xl font-bold">
                EmpowerPath Coaching
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Helping you unlock your potential and live your best life.
            </p>
             <div className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
               <Globe className="w-4 h-4 text-primary" />
               <a href="https://website.com" target="_blank" rel="noopener noreferrer">website.com</a>
            </div>
          </div>
          <div className="md:col-start-2 lg:col-start-auto">
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <a href="tel:1234567890">1234 567 890</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <a href="mailto:test@test.com">test@test.com</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Woodberry Down, London N4 2TG</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EmpowerPath Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
