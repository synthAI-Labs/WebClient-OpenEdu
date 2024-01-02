'use client';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center space-y-5">
          <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl space-y-1 font-extrabold">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text mb-5">
              <h1>
                Introducing{' '}
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text mb-5 bg-gradient-to-r from-purple-400 to-pink-600">
                  AI-Res
                </span>
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
        </div>
      </div>
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold"><a href="/about">About Us</a></h2>
          <p>
            We are an education startup leveraging the power of AI to
            revolutionize the learning experience. Our mission is to provide
            personalized and adaptive learning solutions to students of all
            ages.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>

          <div className="flex items-center mb-4">
            <p className="mr-2">AI-powered tutoring</p>
            <img
              src="/tutoring.png"
              alt="AI-powered tutoring"
              className="w-16 h-16 object-cover"
            />
          </div>

          <div className="flex items-center mb-4">
            <img
              src="/recommendation.png"
              alt="Smart content recommendations"
              className="w-16 h-16 object-cover mr-2"
            />
            <p>Smart content recommendations</p>
          </div>

          <div className="flex items-center mb-4">
            <p className="mr-2">Automated assessments</p>
            <img
              src="/assessment.png"
              alt="Automated assessments"
              className="w-16 h-16 object-cover"
            />
          </div>

          <div className="flex items-center">
            <img
              src="/classroom.png"
              alt="Virtual classrooms"
              className="w-16 h-16 object-cover mr-2"
            />
            <p>Virtual classrooms</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
