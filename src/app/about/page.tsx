import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const values = [
  "Empowerment through Action",
  "Radical Empathy and Understanding",
  "Unwavering Belief in Your Potential",
  "Partnership in Growth",
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">About EmpowerPath Coaching</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about the passion, philosophy, and person behind the coaching.
            </p>
          </section>

          <section className="grid lg:grid-cols-5 gap-12 items-center mb-16">
            <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="https://placehold.co/600x750.png" 
                alt="Jane Doe, Life Coach" 
                width={600} 
                height={750} 
                className="object-cover w-full h-full"
                data-ai-hint="professional woman portrait"
              />
            </div>
            <div className="lg:col-span-3">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Meet Jane Doe, Your Partner in Growth</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Hello! I'm Jane, and my mission is to help you build a life you love. My journey into life coaching began after a decade in high-pressure corporate environments. I saw firsthand how easy it is to lose sight of what truly matters amidst the daily grind. I realized my true passion wasn't just hitting targets, but helping the people around me thrive, both personally and professionally.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                This realization led me to pursue formal training and certification as a life coach. Today, I combine my corporate leadership experience with proven coaching methodologies to offer a practical, empathetic, and results-oriented approach. I don't just offer advice; I partner with you to uncover your own strengths, clarify your vision, and build actionable plans to make that vision a reality.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Start Your Journey Today</Link>
              </Button>
            </div>
          </section>

          <section className="bg-secondary/50 rounded-lg p-8 md:p-12">
             <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">My Core Values</h2>
              <p className="text-lg text-muted-foreground mt-2">These principles guide every coaching relationship.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{value}</h3>
                    <p className="text-muted-foreground text-sm">A foundational belief that informs our collaborative process and ensures you are always in the driver's seat of your own life's journey.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
