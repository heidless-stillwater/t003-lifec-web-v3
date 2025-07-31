import { generateProTip } from '@/ai/flows/generate-pro-tip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, RefreshCw } from 'lucide-react';
import { refreshProTip } from '@/app/actions';

export async function ProTipSection() {
  const { tip } = await generateProTip({});

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-xl border-primary/20 bg-background overflow-hidden">
          <CardHeader className="text-center p-8 bg-background">
            <div className="flex justify-center items-center mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50"></div>
                <div className="relative p-4 bg-background rounded-full">
                  <Lightbulb className="mx-auto h-10 w-10 text-primary" />
                </div>
              </div>
            </div>
            <CardTitle className="font-headline text-3xl mt-4">AI-Powered Pro Tip</CardTitle>
            <CardDescription className="text-muted-foreground">Fresh inspiration for your journey</CardDescription>
          </CardHeader>
          <CardContent className="text-center p-8">
            <blockquote className="text-lg md:text-xl text-foreground mb-8">
              <p>"{tip}"</p>
            </blockquote>
            <form action={refreshProTip}>
              <Button size="lg" className="rounded-full shadow-md hover:shadow-lg transition-shadow">
                <RefreshCw className="mr-2 h-4 w-4" />
                Get a New Tip
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
