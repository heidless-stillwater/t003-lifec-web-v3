import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, Briefcase, Heart, Quote, Check } from 'lucide-react';
import { ProTipSection } from '@/components/ai/pro-tip-section';

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

const homePricing = [
    {
        title: 'Foundation',
        price: '$499',
        period: '/month',
        description: 'For individuals starting their journey of self-discovery.',
        features: [ 'Two 60-minute sessions per month', 'Unlimited email support' ],
        isPopular: false,
    },
    {
        title: 'Accelerator',
        price: '$799',
        period: '/month',
        description: 'For professionals aiming to fast-track their growth.',
        features: [ 'Four 60-minute sessions per month', 'Priority email & text support' ],
        isPopular: true,
    },
    {
        title: 'Elevate',
        price: '$999',
        period: '/month',
        description: 'For leaders aiming to maximize their impact.',
        features: [ 'Four 60-minute sessions per month', 'On-demand coaching calls' ],
        isPopular: false,
    },
];

const testimonials = [
  {
    quote: "Working with EmpowerPath Coaching was a transformative experience. I gained clarity on my goals and the confidence to pursue them. I can't recommend them enough!",
    name: 'Alex Johnson',
    title: 'Marketing Director',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center bg-secondary/30 overflow-hidden">
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
           <div className="container mx-auto px-4 relative">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up">
              Find Your Path, Unleash Your Potential
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              With EmpowerPath Coaching, discover your potential, redefine your goals, and create the life you've always wanted with personalized life coaching.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/contact">Start Here <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
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
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Invest in Your Growth</h2>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Flexible plans designed for your unique path to success.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {homePricing.map((plan) => (
                        <Card key={plan.title} className={`flex flex-col ${plan.isPopular ? 'border-2 border-primary shadow-2xl' : 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300'}`}>
                            {plan.isPopular && (
                                <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-bold rounded-t-lg">Most Popular</div>
                            )}
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{plan.title}</CardTitle>
                                <div>
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground mb-4">{plan.description}</p>
                                <ul className="space-y-2">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" variant={plan.isPopular ? 'default' : 'secondary'}>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/pricing">View All Plans</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">Discover how coaching can transform your life. Your journey to clarity and empowerment starts with a single conversation.</p>
                <Button asChild size="lg">
                    <Link href="/contact">Book a Free Consultation</Link>
                </Button>
            </div>
        </section>

        {/* AI Pro Tips Section */}
        <ProTipSection />

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image src="https://placehold.co/600x600.png" alt="Life Coach" width={600} height={600} className="object-cover w-full h-full" data-ai-hint="portrait professional woman"/>
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Meet Your Coach</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  With years of experience helping individuals navigate life's challenges, I am dedicated to providing you with the tools and support you need to thrive. My approach is rooted in empathy, action, and a firm belief in your potential.
                </p>
                <p className="text-muted-foreground mb-6">
                  As your partner in growth, I am committed to helping you unlock your best self.
                </p>
                <Button asChild size="lg" variant="secondary" className="shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/about">More About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-lg border-2 border-primary/20 bg-background">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-primary mb-4" />
                    <p className="text-lg italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                    <div className="font-bold text-right text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground text-right">{testimonial.title}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/testimonials">Read More Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
             <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
             <p className="text-lg max-w-2xl mx-auto mb-8 text-primary-foreground/80">
               Your best day is waiting. Take the first step towards a more empowered and fulfilling life.
             </p>
             <Button asChild size="lg" variant="secondary" className="rounded-full shadow-lg hover:shadow-xl transition-shadow text-primary-foreground bg-accent hover:bg-accent/90">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
          </div>
        </section>

      </main>
    </div>
  );
}
