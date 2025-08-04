import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Briefcase, Heart, BrainCircuit, BarChart, Wrench, ArrowRight, Check } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';


const services = [
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: 'Personal Growth Coaching',
    description: 'Embark on a journey of self-discovery to unlock your full potential, build confidence, and overcome personal barriers.',
    features: [
      'Values & strengths assessment',
      'Goal setting & accountability',
      'Overcoming limiting beliefs'
    ],
    link: '/pricing#personal-growth',
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: 'Career Transition Coaching',
    description: 'Navigate your professional path with clarity. Whether changing jobs or starting a new venture, we\'ll create a strategic roadmap.',
    features: [
        'Career path exploration',
        'Resume & interview coaching',
        'Effective networking strategies'
    ],
    link: '/pricing#career-transition',
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: 'Relationship Coaching',
    description: 'Enhance connections by improving communication, setting boundaries, and fostering deeper understanding.',
    features: [
        'Effective communication skills',
        'Conflict resolution techniques',
        'Building deeper connections'
    ],
    link: '/pricing#relationship',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: 'Mindfulness & Stress Management',
    description: 'Develop practical techniques to manage stress, increase focus, and cultivate a state of calm and presence.',
    features: [
        'Stress reduction techniques',
        'Cultivating present-moment awareness',
        'Developing emotional regulation'
    ],
    link: '/pricing#mindfulness',
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: 'Leadership & Performance Coaching',
    description: 'For professionals looking to elevate their impact. We focus on developing leadership skills and boosting performance.',
    features: [
        'Defining your leadership style',
        'Team motivation strategies',
        'Executive presence coaching'
    ],
    link: '/pricing#leadership',
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: 'Custom Coaching Programs',
    description: 'Have a unique challenge? We can design a completely customized coaching program tailored to your individual needs.',
    features: [
        'Fully tailored coaching plan',
        'Flexible session scheduling',
        'Targeted goal achievement'
    ],
    link: '/contact',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow bg-background">
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Our Coaching Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored programs designed to help you achieve your goals and create lasting, positive change.
            </p>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto bg-secondary/50 rounded-full p-5 w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 text-left text-sm text-muted-foreground">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="justify-center pt-6">
                  <Button asChild>
                    <Link href={service.link}>
                      {service.title === 'Custom Coaching Programs' ? 'Inquire Now' : 'View Pricing'} 
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </main>
    <Footer />
    </div>
  );
}
