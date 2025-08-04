import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, Briefcase, Heart } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProTipSection } from '@/components/ai/pro-tip-section';
import Image from 'next/image';

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

const testimonials = [
  {
    quote: "Working with EmpowerPath was a transformative experience. I gained clarity on my goals and the confidence to pursue them.",
    name: 'Alex Johnson',
    title: 'Marketing Director',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    quote: "The career transition coaching was invaluable. I landed my dream job in a new industry, a move I wouldn't have had the courage to make on my own.",
    name: 'Samantha Lee',
    title: 'Software Engineer',
    avatar: 'https://placehold.co/100x100.png',
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[500px] flex items-center text-center text-white bg-gradient-to-r from-gray-900 to-gray-700">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 opacity-30" 
            style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }} 
            data-ai-hint="inspirational landscape"
          ></div>
          <div className="relative z-10 container mx-auto px-4 animate-fade-in-up">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold mb-4">Find Your Path.</h1>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold mb-6">Live Your Purpose.</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
              EmpowerPath Coaching helps you unlock your true potential and create a life you love.
              Let's start your journey together.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
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
                <Link href="/services-example">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Success Stories</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">See how we've helped others transform their lives.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6 flex items-center gap-6">
                    <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-background shadow-md"
                        data-ai-hint="person portrait"
                      />
                    <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                      <p>"{testimonial.quote}"</p>
                      <footer className="mt-4 not-italic font-bold text-foreground">{testimonial.name}, <span className="font-normal text-muted-foreground">{testimonial.title}</span></footer>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/testimonials">Read More Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* AI Pro Tip Section */}
        <ProTipSection />

      </main>
      <Footer />
    </div>
  );
}
