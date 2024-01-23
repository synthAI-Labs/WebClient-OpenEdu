'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import {
  ArrowDownToLine,
  CheckCircle,
  DollarSign,
  KanbanSquare,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Testimonials = [
  {
    quote:
      'Open-EDU has transformed the way I learn. The personalized AI tutoring is simply amazing.',
    author: 'John Doe',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/boy1.png`,
    position: 'Student',
  },
  {
    quote:
      'The 1:1 learning approach at Open-EDU has made a significant difference in my understanding of complex subjects.',
    author: 'Jane Smith',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/girl1.png`,
    position: 'Student',
  },
  {
    quote:
      'I appreciate the real-time feedback feature. It helps me stay on track and improve my learning outcomes.',
    author: 'Alex Johnson',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/boy2.png`,
    position: 'Student',
  },
  {
    quote:
      'Open-EDU has transformed the way I learn. The personalized AI tutoring is simply amazing.',
    author: 'John Doe',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/boy1.png`,
    position: 'Student',
  },
  {
    quote:
      'The 1:1 learning approach at Open-EDU has made a significant difference in my understanding of complex subjects.',
    author: 'Jane Smith',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/girl1.png`,
    position: 'Student',
  },
  {
    quote:
      'I appreciate the real-time feedback feature. It helps me stay on track and improve my learning outcomes.',
    author: 'Alex Johnson',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/boy2.png`,
    position: 'Student',
  },
];

const perks = [
  {
    name: 'Free to use',
    Icon: DollarSign,
    description:
      'Get your own personal AI tutor for free. No hidden charges or subscriptions',
  },
  {
    name: 'Guranteed Quality',
    Icon: CheckCircle,
    description:
      'Verified by our team for quality standards and best satisfaction. ',
  },
  {
    name: 'Project based learning',
    Icon: KanbanSquare,
    description:
      'We believe in learning by doing. Our project based learning approach helps you learn by building real world projects.',
  },
  {
    name: 'Secure',
    Icon: ShieldCheck,
    description:
      'We take your privacy seriously. Your data is encrypted and stored securely.',
  },
];

const App = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center space-y-5">
          <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl space-y-1 font-extrabold">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text mb-5">
              Introducing{' '}
              <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
                Open-EDU
              </h1>
            </div>
            Your personal Ai for{' '}
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
              <TypewriterComponent
                options={{
                  strings: ['learning', 'teaching', 'assessments'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="my-9">
            <Link
              href="/signup"
              className={cn(' ', buttonVariants({ variant: 'default' }))}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <main className="p-4 flex flex-col items-center justify-center">
        {/* Feature Cards */}
        <section className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20 py-20 border-t border-green-200 bg-green-50">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 mg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8 mt-40">
          <div className="text-2xl font-bold mb-4">What Users Say</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full max-w-xs"
            >
              <CarouselContent>
                {Testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className=" w-72">
                      <CardHeader>
                        <CardTitle>
                          <Avatar>
                            <AvatarImage src={testimonial.image} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>{testimonial.quote}</CardContent>
                      <CardHeader>
                        <CardTitle>{testimonial.author}</CardTitle>
                        <CardDescription>
                          {testimonial.position}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {/* Repeat the above structure for additional testimonials */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
