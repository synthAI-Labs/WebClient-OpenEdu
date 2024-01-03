import React from 'react';

const Page = () => {
  return (
    <div className=" mt-5 flex items-center justify-center h-screen">
      <div className="w-full max-w-3xl p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About OpenEDU</h1>
          {/* <img src="/images/about_openedu.jpg" alt="OpenEDU Platform" className="w-full rounded mb-4" /> */}
          <p className="text-gray-600">
            OpenEDU is a revolutionary education platform developed by SynthAI
            Labs, committed to providing quality tech education for free with
            the assistance of AI personal tutors.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          {/* <img src="/images/mission.jpg" alt="Mission" className="w-full rounded mb-4" /> */}
          <p className="text-gray-600">
            At OpenEDU, our mission is to make high-quality technical education
            accessible to everyone. We believe in the power of open source and
            leverage AI technology to provide a personalized learning experience
            for our users.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Built by SynthAI Labs</h2>
          {/* <img src="/images/synthai_labs.jpg" alt="SynthAI Labs" className="w-full rounded mb-4" /> */}
          <p className="text-gray-600">
            SynthAI Labs is a forward-thinking technology company that focuses
            on creating innovative solutions. OpenEDU is one of our proud
            creations, developed in-house with a passion for education and
            technology.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          {/* <img src="/images/how_it_works.jpg" alt="How It Works" className="w-full rounded mb-4" /> */}
          <p className="text-gray-600">
            OpenEDU employs AI personal tutors to understand the learning needs
            of each user. This personalized approach ensures that users get the
            most out of their educational journey, learning at their own pace
            and style.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          {/* <img src="/images/get_started.jpg" alt="Get Started" className="w-full rounded mb-4" /> */}
          <p className="text-gray-600">
            Join OpenEDU today and embark on a journey of knowledge and skill
            development. Our commitment to providing free, quality education
            sets us apart, and with the power of AI, learning has never been
            more personalized and effective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
