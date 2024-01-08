'use client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

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
        <section className="mb-8">
          <div className="text-2xl font-bold mb-4">Key Features</div>
          <p className="text-lg">
            Open-EDU offers a range of powerful features to make your learning experience exceptional.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <FeatureSection
              imagePath="/tutoring.png"
              title="Personalized Learning"
              description="Tailor the learning experience to each student's needs, providing a personalized and effective educational journey."
            />

            <FeatureSection
              imagePath="/tutoringtwo.png"
              title="Interactive Sessions"
              description="Engage students with interactive sessions, fostering a dynamic learning environment that promotes active participation."
            />

            <FeatureSection
              imagePath="/tutoringthree.png"
              title="Real-time Feedback"
              description="Provide instant feedback to students, enabling them to track their progress and make improvements in real-time."
            />
          </div>

        </section>
        <section className="mb-8 mt-40">
          <div className="text-2xl font-bold mb-4">What Users Say</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Open-EDU has transformed the way I learn. The personalized AI tutoring is simply amazing."
              author="John Doe"
            />

            <TestimonialCard
              quote="The 1:1 learning approach at Open-EDU has made a significant difference in my understanding of complex subjects."
              author="Jane Smith"
            />

            <TestimonialCard
              quote="I appreciate the real-time feedback feature. It helps me stay on track and improve my learning outcomes."
              author="Alex Johnson"
            />
            {/* Repeat the above structure for additional testimonials */}
          </div>
        </section>
      </main>
    </div>
  );
};

const FeatureSection = ({ imagePath, title, description }: { imagePath: string, title: string, description: string }) => (
  <div className="bg-white p-4 rounded-md shadow-md mb-8">
    <img
      src={imagePath} // Add the path to your feature image
      alt={title}
      width={400}
      height={400}
      className="mb-4 mx-auto"
    />
    <div className="text-xl font-semibold mb-2">{title}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author }: { quote: string, author: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-8">
    <p className="text-gray-600 mb-2">&quot;{quote}&quot;</p>
    <p className="text-gray-800 font-bold">{author}</p>
  </div>
);

export default App;
