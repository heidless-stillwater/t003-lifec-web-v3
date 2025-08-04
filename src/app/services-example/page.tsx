import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, Briefcase, Heart } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const services = [
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: 'Personal Growth',
    description: 'Unlock your potential and overcome personal barriers to live a more fulfilling life.',
    link: '/services'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: 'Career Transition',
    description: 'Navigate your career path with confidence, whether you are changing jobs or industries.',
    link: '/services'
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'Relationship Coaching',
    description: 'Improve communication and deepen connections in your personal and professional relationships.',
    link: '/services'
  },
];

export default function ServicesExamplePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">We offer a range of coaching services tailored to your unique journey.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-secondary/50 rounded-full p-4 w-fit mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="ghost" asChild>
                      <Link href={service.link}>Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
