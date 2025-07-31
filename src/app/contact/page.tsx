'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll be in touch with you shortly.",
    });
    form.reset();
  }

  return (
    <div className="bg-background">
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to take the first step? Let's connect. I offer a free, no-obligation consultation to discuss your goals.
            </p>
          </section>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="1234 567 890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="personal-growth">Personal Growth Coaching</SelectItem>
                                <SelectItem value="career-transition">Career Transition Coaching</SelectItem>
                                <SelectItem value="relationship-coaching">Relationship Coaching</SelectItem>
                                <SelectItem value="mindfulness-stress-management">Mindfulness & Stress Management</SelectItem>
                                <SelectItem value="leadership-performance">Leadership & Performance Coaching</SelectItem>
                                <SelectItem value="custom-program">Custom Coaching Programs</SelectItem>
                                <SelectItem value="not-sure">I'm not sure</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell me a little about what you'd like to achieve..." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2">
                <div className="bg-secondary/50 p-8 rounded-lg space-y-8 h-full">
                    <h3 className="font-headline text-2xl font-bold">Contact Information</h3>
                    <div className="space-y-4 text-muted-foreground">
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h4 className="font-bold text-foreground">Email</h4>
                                <a href="mailto:test@test.com" className="hover:text-primary transition-colors">test@test.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h4 className="font-bold text-foreground">Phone</h4>
                                <a href="tel:1234567890" className="hover:text-primary transition-colors">1234 567 890</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h4 className="font-bold text-foreground">Location</h4>
                                <p>Woodberry Down, London N4 2TG</p>
                                <p className="text-sm">Coaching available worldwide via video call.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
