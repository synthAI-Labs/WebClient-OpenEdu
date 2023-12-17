import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <header className="bg-blue-500 text-white p-4 h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to EduAI</h1>
        <p className="text-lg">Empowering Education with Artificial Intelligence</p>
      </header>
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
            <p>AI-powered tutoring</p>
            <img src="/images/tutoring.png" alt="AI-powered tutoring" className="w-10 h-10 ml-2" />
          </div>
          <div className="flex items-center">
            <img src="/images/recommendations.png" alt="Smart content recommendations" className="w-10 h-10 mr-2" />
            <p>Smart content recommendations</p>
          </div>
          <div className="flex items-center">
            <p>Automated assessments</p>
            <img src="/images/assessments.png" alt="Automated assessments" className="w-10 h-10 ml-2" />
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
