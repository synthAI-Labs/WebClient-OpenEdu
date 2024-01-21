'use client';
import NothingFound from '@/components/NothingFound';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2Icon } from 'lucide-react';
import { useState } from 'react';

const Page = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function sendEmail() {
    try {
      setLoading(true);

      const name = document.getElementById('name') as HTMLInputElement;
      const email = document.getElementById('email') as HTMLInputElement;
      const message = document.getElementById('message') as HTMLInputElement;

      const data = {
        name: name.value,
        email: email.value,
        message: message.value,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          credentials: 'include',
        },
        
      );

      const res = await response.json();

      if (res.status === 200) {
        toast({
          title: 'Success',
          description: res.message,
        });
        window.location.href = '/support/success';
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" my-9 flex items-center justify-center h-screen lg:w-8/12 md:w-8/12 sm:w-8/12">
      <div className="grid w-full gap-4">
        <div>
          <h1 className="text-4xl font-bold">FAQ</h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is OpenEdu completely free?</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>Yes, OpenEdu is free and open source.</li>
                  <li>
                    We also offer a subscription plan for additional features.
                  </li>
                  <li>
                    In the future, certain premium features may be introduced.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why should I choose OpenEdu for learning?
              </AccordionTrigger>
              <AccordionContent>
                OpenEdu is free, open source, and allows you to understand its
                workings.
                {/* <li>You can actively contribute to the platform.</li>
                  <li>We provide a personal AI tutor to assist you in your studies.</li> */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How does OpenEdu work?</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>Create an account to get started.</li>
                  <li>
                    Explore available courses and enroll in them to begin
                    learning.
                  </li>
                  <li>
                    Upon course completion, you&apos;ll receive a certificate.
                  </li>
                  <li>
                    You can also create your own courses and share them with
                    others (feature release planned for the future).
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is ProjectIt?</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>ProjectIt is a program under OpenEdu.</li>
                  <li>
                    It offers a 3-month cohort where participants learn and
                    build projects from scratch with the guidance of mentors.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value="item-5">
              <AccordionTrigger>How can I subscribe for additional features?</AccordionTrigger>
              <AccordionContent>
                <p>You can subscribe to our premium plan [here](#subscription-link).</p>
              </AccordionContent>
            </AccordionItem> */}
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I get help if I face issues with the platform?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, our support team is available to assist you. You can
                  create issue on github, fill out form below, or just email.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className=" my-6">
          <h1 className="text-4xl text-muted-foreground">
            {' '}
            Still Have Questions?
          </h1>
          <h1 className="text-3xl font-bold">Email US?</h1>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Contact US</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input required id="name" type="text" placeholder="name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                type="email"
                placeholder="m@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">How can we help you?</Label>
              <Textarea
                required
                id="message"
                placeholder="Hi, How can it help me in my studies?"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => sendEmail()} className="w-full">
              {loading ? (
                <p>
                  <Loader2Icon className=" animate-spin" />
                </p>
              ) : (
                <>Send Message</>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
