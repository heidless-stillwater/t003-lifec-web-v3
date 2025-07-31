import { Card, CardContent } from '@/components/ui/card';
import { Quote, User, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Working with EmpowerPath Coaching was a transformative experience. I gained clarity on my goals and the confidence to pursue them. I can't recommend them enough!",
    name: 'Alex Johnson',
    title: 'Marketing Director',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
  {
    quote: "The career transition coaching was invaluable. I landed my dream job in a new industry, a move I wouldn't have had the courage to make on my own. Truly life-changing.",
    name: 'Samantha Lee',
    title: 'Software Engineer',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
  {
    quote: "I learned practical stress management techniques that I use every day. My work-life balance has improved dramatically, and I feel more present and focused.",
    name: 'Michael Chen',
    title: 'Entrepreneur',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
  {
    quote: "My communication skills have improved tenfold, which has positively impacted both my personal and professional relationships. The insights I gained were profound.",
    name: 'Jessica Davis',
    title: 'Art Director',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
   {
    quote: "The leadership coaching helped me become a more effective and empathetic manager. My team is more engaged, and our results have never been better.",
    name: 'David Rodriguez',
    title: 'Operations Manager',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
  {
    quote: "An incredible investment in myself. The coaching process helped me break through old patterns and build a life that feels authentic and joyful. I'm forever grateful.",
    name: 'Emily White',
    title: 'Graphic Designer',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: rating }, (_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="bg-background">
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Client Success Stories</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from those who have transformed their lives with EmpowerPath Coaching.
            </p>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/50 mb-4" />
                  <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                </CardContent>
                <div className="bg-secondary/30 p-6 flex flex-col items-center text-center rounded-b-lg">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4 border-4 border-background shadow-md"
                    data-ai-hint="person portrait"
                  />
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.title}</p>
                  {renderStars(testimonial.rating)}
                </div>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
