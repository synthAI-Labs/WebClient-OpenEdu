// pages/cookie-policy.js

import Head from 'next/head';

const CookiePolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>OpenEdu Cookie Policy</title>
        <meta name="description" content="OpenEdu Cookie Policy" />
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">OpenEdu Cookie Policy</h1>

        <p className="mb-4">Last Updated: January 4, 2024</p>

        <p className="mb-8">
          Welcome to OpenEdu, a product developed by SynthAi Labs. This Cookie
          Policy explains how we use cookies and similar technologies to provide
          you with a better experience when using OpenEdu.
        </p>

        {/* Section 1: What Are Cookies? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
          Cookies are small text files that are stored on your device (computer,
          tablet, or mobile phone) when you visit a website. They are widely
          used to make websites work more efficiently and to provide information
          to the website owners.
        </section>

        {/* Section 2: How We Use Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
          a. Authentication: We use cookies to authenticate users and maintain
          their sessions when they are logged into OpenEdu. This is essential
          for the proper functioning of user accounts and access to personalized
          content. b. Security: Cookies are used for security purposes, such as
          detecting and preventing unauthorized access to user accounts. c.
          Preferences: We use cookies to remember your preferences, such as
          language settings and display preferences, to enhance your user
          experience.
        </section>

        {/* Section 3: Types of Cookies We Use */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Types of Cookies We Use
          </h2>
          a. Essential Cookies: These cookies are necessary for the proper
          functioning of OpenEdu. They enable core functionality such as user
          authentication and account management. b. Performance Cookies: These
          cookies collect information about how users interact with OpenEdu,
          such as which pages are visited most often. This information helps us
          improve the performance and usability of the platform. c.
          Functionality Cookies: These cookies allow OpenEdu to remember choices
          you make, such as your language preference, to provide a more
          personalized experience.
        </section>

        {/* Section 4: Authentication-Based Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Authentication-Based Cookies
          </h2>
          We use authentication-based cookies to securely verify your identity
          and maintain your session when you are logged into OpenEdu. These
          cookies are essential for providing you with access to personalized
          content.
        </section>

        {/* Section 5: Third-Party Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Third-Party Cookies
          </h2>
          We may use third-party services, such as analytics tools, that may use
          cookies to collect information about your use of OpenEdu. This
          information is used to analyze trends and improve the platform.
        </section>

        {/* Section 6: Managing Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Managing Cookies</h2>
          Most web browsers allow you to control and block cookies through their
          settings. However, please be aware that blocking certain cookies may
          impact the functionality of OpenEdu.
        </section>

        {/* Section 7: Changes to Cookie Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Changes to Cookie Policy
          </h2>
          We will inform you of any changes to our cookie practices, especially
          concerning authentication-based cookies. If there are changes to our
          plans related to cookies, we will provide notice in the future.
        </section>

        {/* Section 8: Contact Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          If you have any questions or concerns about this Cookie Policy, please
          contact us at [SynthAILabs@gmail.com](mailto:synthailabs@gmail.com).
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
