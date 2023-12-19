"use client"
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center space-y-5">
          <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl space-y-1 font-extrabold">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-5">
              <h1>BloomIQ</h1>
            </div>
            AI solutions for your{" "}
            <TypewriterComponent
              options={{
                strings: [
                  "learning",
                  "teaching",
                  "assessments",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p>
            We are an education startup leveraging the power of AI to revolutionize the learning experience.
            Our mission is to provide personalized and adaptive learning solutions to students of all ages.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <div className="flex items-center">
            <p className="mr-2">AI-powered tutoring</p>
            <img src="/images/tutoring.png" alt="AI-powered tutoring" className="w-10 h-10" />
          </div>
          <div className="flex items-center">
            <img src="/images/recommendations.png" alt="Smart content recommendations" className="w-10 h-10 mr-2" />
            <p>Smart content recommendations</p>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Automated assessments</p>
            <img src="/images/assessments.png" alt="Automated assessments" className="w-10 h-10" />
          </div>
          <div className="flex items-center">
            <img src="/images/classrooms.png" alt="Virtual classrooms" className="w-10 h-10 mr-2" />
            <p>Virtual classrooms</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
