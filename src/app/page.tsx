'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
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
import React, { useEffect, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen  min-w-full">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center space-y-5">
          <div className=" text-4xl flex flex-col md:flex-row lg:flex-row space-y-1 font-extrabold">
            <div
              className="flex flex-col justify-center items-start pl-14 md:pl-24 lg:pl-24"
              style={{ maxWidth: '50vw', minWidth: '50vw' }}
            >
              <h1 className=" text-4xl">Welcome To</h1>
              <h1 className=" text-7xl text-primary mb-2 mt-1">Open-EDU</h1>
              Your personal Ai for{' '}
              <div className=" text-5xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
                <TypewriterComponent
                  options={{
                    strings: ['learning', 'teaching', 'assessments'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="my-5">
                <Link
                  href="/signup"
                  className={cn(' ', buttonVariants({ variant: 'default' }))}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div
              className="max-w-50vw min-w-50vw"
              style={{ position: 'relative' }}
            >
              {/* <motion.img
                src="/paperPlane1.png"
                alt="Paper plane"
                className=" mt-40"
                width={50}
                height={50}
                style={{ zIndex: 1, position: 'absolute' }}
                animate={{
                  x: [0, -100, -150, -125, -50, 50, 125, 150, 100, 0],
                  y: [0, -50, -70, -55, -30, 30, 55, 70, 50, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <motion.img
                src="/paperPlane2.png"
                alt="Paper plane"
                className=" mt-40"
                width={50}
                height={50}
                style={{ zIndex: 1, position: 'absolute' }}
                animate={{
                  x: [0, -100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              /> */}
              <img
                src="/studyKid.png"
                alt="Hero Image of Kid Studying"
                className=" mb-4"
                style={{ zIndex: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
      <main className="p-4 flex flex-col items-center justify-center">
        {/* 
        |---------------------|
        | TRUSTED BY SECTION  |
        |---------------------|
        */}
        <section className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20 py-20 border-t border-green-200 bg-green-50">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">Trusted by over 1000+ users</h1>
            <p className="text-muted-foreground mb-9">
              Making an impact in real life with over 1000+ users...
            </p>
          </div>
          <div className="flex justify-between space-x-4 gap-8">
            <div className=" ml-2 lg:mr-20 flex-col h-16 w-16 flex items-center justify-center">
              <h1 className="text-2xl">1000+</h1>
              satisfied users
            </div>
            <div className="flex-col h-16 w-16 flex items-center justify-center">
              <h1 className="text-2xl">20+</h1>
              projects done
            </div>
            <div className="mr-2 lg:mr-20 flex-col h-16 w-16 flex items-center justify-center">
              <h1 className="text-2xl">24k</h1>
              recieved in funding
            </div>
          </div>
        </section>
        {/* 
        |---------------------|
        | Powered BY SECTION  |
        |---------------------|
        */}
        <section className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20 py-20 border-t">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">Supported By</h1>
            <p className="text-muted-foreground mb-9">
              All the companies we have partnered with to bring it to life...
            </p>
          </div>
          <div className="px-6 flex flex-col md:flex-col lg:flex-row justify-center">
            <Image
              src={'/tublian-removebg-preview.png'}
              alt="Company Logo"
              width={400}
              height={50}
            />
            <Image
              src={'/GoogleForStartups.png'}
              alt="Company Logo"
              width={400}
              height={50}
            />
            <Image
              src={'/SynthAI Labs-logos_black.png'}
              alt="Company Logo"
              width={400}
              height={50}
            />
          </div>
        </section>
        {/* 
        |---------------------------|
        | Feature Cards BY SECTION  |
        |---------------------------|
        */}
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
        {/* 
        |-------------------------------|
        | Testimonial Cards BY SECTION  |
        |-------------------------------|
        */}
        {/* <section className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20 py-20 border-t">
          <div className="text-2xl font-bold mb-4">What Users Say</div>
          <div className="px-6 flex flex-col md:flex-col lg:flex-row justify-center space-x-4 gap-8 sm:grid sm:grid-cols-1 sm:gap-8">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="min-w-full"
            >
              <CarouselContent>
                {Testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <Avatar>
                            <AvatarImage src={testimonial.image} />
                            <AvatarFallback className=" p-4">CN</AvatarFallback>
                          </Avatar>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <blockquote>"{testimonial.quote}"</blockquote>
                      </CardContent>
                      <CardHeader className=" items-end">
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
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default App;

// <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl space-y-1 font-extrabold">
//             <div className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text mb-5">
//               Introducing{' '}
//               <h1 className="text-3xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
//                 Open-EDU
//               </h1>
//             </div>
//             Your personal Ai for{' '}
//             <div className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
//               <TypewriterComponent
//                 options={{
//                   strings: ['learning', 'teaching', 'assessments'],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </div>
//           </div>
//           <div className="my-9">
//             <Link
//               href="/signup"
//               className={cn(' ', buttonVariants({ variant: 'default' }))}
//             >
//               Get Started
//             </Link>
