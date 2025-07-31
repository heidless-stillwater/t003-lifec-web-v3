import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    id: 'personal-growth',
    title: 'Foundation',
    price: '$499',
    period: '/month',
    description: 'For individuals starting their journey of self-discovery.',
    features: [
      'Two 60-minute sessions per month',
      'Unlimited email support',
      'Personalized action plan',
      'Values and strengths assessment',
    ],
    isPopular: false,
  },
  {
    id: 'career-transition',
    title: 'Accelerator',
    price: '$799',
    period: '/month',
    description: 'For professionals aiming to fast-track their growth.',
    features: [
      'Four 60-minute sessions per month',
      'Priority email & text support',
      'In-depth career strategy mapping',
      'Performance tracking tools',
      'Resume & interview coaching',
    ],
    isPopular: true,
  },
  {
    id: 'relationship',
    title: 'Catalyst',
    price: '$599',
    period: '/month',
    description: 'For enhancing your connections with others.',
    features: [
        'Three 60-minute sessions per month',
        'Unlimited email support',
        'Communication style analysis',
        'Conflict resolution framework',
    ],
    isPopular: false,
  },
  {
    id: 'mindfulness',
    title: 'Momentum',
    price: '$549',
    period: '/month',
    description: 'For managing stress and cultivating presence.',
    features: [
      'Two 90-minute sessions per month',
      'Guided meditation library access',
      'Personalized mindfulness exercises',
      'Weekly progress check-ins',
    ],
    isPopular: false,
  },
  {
    id: 'leadership',
    title: 'Elevate',
    price: '$999',
    period: '/month',
    description: 'For leaders aiming to maximize their impact.',
    features: [
      'Four 60-minute sessions per month',
      'On-demand coaching calls (15-min)',
      'Leadership style assessment',
      '360-degree feedback review',
      'Executive presence development',
    ],
    isPopular: false,
  },
  {
    id: 'custom',
    title: 'Transformation',
    price: 'Custom',
    period: '',
    description: 'A comprehensive program for deep, lasting change.',
    features: [
      'Fully customized program design',
      'Flexible session scheduling & frequency',
      'Unlimited support channels',
      'Access to all coaching resources',
    ],
    isPopular: false,
    custom: true
  },
];

export default function PricingPage() {
  return (
    <div className="bg-background">
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Pricing Plans</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Invest in yourself. Choose a plan that aligns with your goals and commitment to growth.
            </p>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.title} 
                id={plan.id}
                className={`flex flex-col ${plan.isPopular ? 'border-2 border-primary shadow-2xl transform lg:scale-105' : 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300'}`}
              >
                {plan.isPopular && (
                  <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-bold rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={plan.isPopular ? 'default' : 'secondary'}>
                    <Link href="/contact">{plan.custom ? 'Inquire Now' : 'Get Started'}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </section>
          
          <div className="text-center mt-16 bg-secondary/50 p-8 rounded-lg">
            <h3 className="font-headline text-2xl font-bold mb-4">Not Sure Which Plan is Right for You?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every journey is unique. Let's chat about your specific goals and find the perfect fit.
              Book a complimentary, no-obligation consultation today.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
