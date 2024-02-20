'use client';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  CheckCircle,
  DollarSign,
  KanbanSquare,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';

const perks = [
  {
    name: 'Free to use',
    Icon: DollarSign,
    description:
      'Get your own personal AI tutor for free. No hidden charges or subscriptions',
  },
  {
    name: 'Guaranteed Quality',
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
      <motion.div
        className="flex items-center justify-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-5">
          <motion.div
            className="text-4xl flex flex-col md:flex-row lg:flex-row space-y-1 font-extrabold"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div
              className="flex flex-col justify-center items-start pl-14 md:pl-24 lg:pl-24"
              style={{ maxWidth: '50vw', minWidth: '50vw' }}
            >
              <h1 className="text-4xl">Welcome To</h1>
              <h1 className="text-7xl text-primary mb-2 mt-1">Open-EDU</h1>
              Your personal Ai for{' '}
              <div className="text-5xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
                <TypewriterComponent
                  options={{
                    strings: ['learning', 'teaching', 'assessments'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="my-5"
              >
                <Link
                  href="/signup"
                  className={cn(' ', buttonVariants({ variant: 'default' }))}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="max-w-50vw min-w-50vw"
              style={{ position: 'relative' }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src="/studyKid.png"
                alt="Hero Image of Kid Studying"
                className="mb-4"
                style={{ zIndex: 0 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <motion.main
        className="p-4 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 
        |---------------------|
        | TRUSTED BY SECTION  |
        |---------------------|
        */}
        <motion.section
          className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20 py-20 border-t border-green-200 bg-green-50"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          // animate={{ opacity: 1 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
            translateX: 0,
          }}
          // transition={{ duration: 1, delay: 0.5 }}
          // transition={{ delay: 1 }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">Trusted by over 1000+ users</h1>
            <p className="text-muted-foreground mb-9">
              Making an impact in real life with over 1000+ users...
            </p>
          </div>
          <div className="flex justify-between space-x-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 lg:mr-20 flex-col h-16 w-16 flex items-center justify-center"
            >
              <h1 className="text-2xl">1000+</h1>
              satisfied users
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-col h-16 w-16 flex items-center justify-center"
            >
              <h1 className="text-2xl">20+</h1>
              projects done
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mr-2 lg:mr-20 flex-col h-16 w-16 flex items-center justify-center"
            >
              <h1 className="text-2xl">24k</h1>
              received in funding
            </motion.div>
          </div>
        </motion.section>
        {/* 
        |---------------------|
        | Powered BY SECTION  |
        |---------------------|
        */}
        <motion.section
          className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20 py-20 border-t"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          // animate={{ opacity: 1 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
            translateX: 0,
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">Supported By</h1>
            <p className="text-muted-foreground mb-9">
              All the companies we have partnered with to bring it to life...
            </p>
          </div>
          <motion.div
            className="px-6 flex flex-col md:flex-col lg:flex-row justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
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
          </motion.div>
        </motion.section>
        {/* 
        |---------------------------|
        | Feature Cards BY SECTION  |
        |---------------------------|
        */}
        <motion.section
          className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20 py-20 border-t border-green-200 bg-green-50"
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          // animate={{ opacity: 1 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
            translateX: 0,
          }}
        >
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-0">
            {perks.map((perk) => (
              <motion.div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
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
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default App;
