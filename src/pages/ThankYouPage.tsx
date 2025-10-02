import { Button, Card, CardContent, CardHeader, CardTitle } from '../components/ui';
import { useRouter } from '../components/Router';
import { CheckCircle2, Home } from 'lucide-react';

export function ThankYouPage() {
  const { navigateTo } = useRouter();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <Card className="bg-background ring-1 ring-white/10 text-center">
            <CardHeader>
              <div className="flex justify-center mb-2">
                <CheckCircle2 className="w-12 h-12 text-[#14B8A6]" />
              </div>
              <CardTitle className="text-foreground">Thank you!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Your message was sent successfully. I’ll get back to you as soon as possible.
              </p>
              <div className="flex gap-3 justify-center">
                <Button className="bg-[#14B8A6] text-white" onClick={() => navigateTo('home')}>
                  <Home className="w-4 h-4 mr-2" /> Go to Home
                </Button>
                <Button variant="outline" onClick={() => navigateTo('projects')}>Explore Projects</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
