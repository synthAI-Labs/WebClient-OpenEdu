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
          <div className='my-9'>
            <Link href="/signup" className={cn(" ", buttonVariants({ variant: 'default' }))}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <main className="p-4">
        <section className="mb-8">
          <div className="text-2xl font-bold mb-4">Key Features</div>
          <p className="text-lg">
            Open-EDU is an AI-powered tutoring platform that provides
            personalized learning experiences to students.
          </p>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Feature 1 */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <img
                src="/tutoring.png" // Add the path to your feature image
                alt="Feature 1"
                width={400}
                height={400}
                className="mb-4 mx-auto"
              />
              <div className="text-xl font-semibold mb-2">
                Personalized Learning
              </div>
              <p className="text-gray-600">
                Tailor the learning experience to each student&apos;s needs,
                providing a personalized and effective educational journey.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <img
                src="/tutoringtwo.png" // Add the path to your feature image
                alt="Feature 2"
                width={400}
                height={400}
                className="mb-4 mx-auto"
              />
              <div className="text-xl font-semibold mb-2">
                Interactive Sessions
              </div>
              <p className="text-gray-600">
                Engage students with interactive sessions, fostering a dynamic
                learning environment that promotes active participation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <img
                src="/tutoringthree.png" // Add the path to your feature image
                alt="Feature 3"
                width={400}
                height={400}
                className="mb-4 mx-auto"
              />
              <div className="text-xl font-semibold mb-2">
                Real-time Feedback
              </div>
              <p className="text-gray-600">
                Provide instant feedback to students, enabling them to track
                their progress and make improvements in real-time.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <div className="text-2xl font-bold mb-4">Testimonials</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 mb-2">
                &quot;Open-EDU has transformed the way I learn. The personalized
                AI tutoring is simply amazing.&quot;
              </p>
              <p className="text-gray-800 font-bold">John Doe</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 mb-2">
                &quot;The 1:1 learning approach at Open-EDU has made a
                significant difference in my understanding of complex
                subjects.&quot;
              </p>
              <p className="text-gray-800 font-bold">Jane Smith</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 mb-2">
                &quot;I appreciate the real-time feedback feature. It helps me
                stay on track and improve my learning outcomes.&quot;
              </p>
              <p className="text-gray-800 font-bold">Alex Johnson</p>
            </div>
            {/* Repeat the above structure for additional testimonials */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
