import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>OpenEdu Privacy Policy</title>
        <meta name="description" content="OpenEdu Privacy Policy" />
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">OpenEdu Privacy Policy</h1>

        <p className="mb-4">Last Updated: January 4, 2024</p>

        <p className="mb-8">
          Welcome to OpenEdu, a product developed by SynthAi Labs. This Privacy
          Policy outlines how we collect, use, disclose, and protect your
          information when you use OpenEdu.
        </p>

        {/* Section 1: Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <li>
            {' '}
            Personal Information: When you register for an account or use
            certain features of OpenEdu, we may collect personal information
            such as your name, email address, and other relevant details.
          </li>
          <li>
            {' '}
            Usage Information: We collect information about your interactions
            with OpenEdu, including the pages you visit, the content you view,
            and other actions taken within the platform.
          </li>
          <li>
            {' '}
            Device Information: We may collect information about the device you
            use to access OpenEdu, including the type of device, operating
            system, and device identifiers.
          </li>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <li>
            Provide and Improve OpenEdu: We use the information we collect to
            operate and improve OpenEdu, personalize your experience, and
            develop new features.
          </li>

          <li>
            Communicate with You: We may use your email address to send you
            important updates, newsletters, or other communications related to
            OpenEdu.
          </li>

          <li>
            Analytics: We use analytics tools to understand how users interact
            with OpenEdu and to analyze trends.
          </li>
        </section>

        {/* Section 3: Information Sharing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Information Sharing
          </h2>
          <li>
            Third-Party Service Providers: We may share your information with
            third-party service providers who assist us in providing,
            maintaining, and improving OpenEdu.
          </li>

          <li>
            Legal Compliance: We may disclose your information if required by
            law or in response to a valid legal request.
          </li>

          <li>
            Business Transfers: In the event of a merger, acquisition, or sale
            of all or a portion of our assets, your information may be
            transferred as part of the transaction.
          </li>
        </section>

        {/* Section 4: Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          We take reasonable measures to protect the security of your
          information. However, please be aware that no security measures are
          perfect, and we cannot guarantee the security of your information.
        </section>

        {/* Section 5: Your Choices */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
          <li>
            Account Information: You can update or delete your account
            information at any time by accessing your account settings.
          </li>

          <li>
            Marketing Communications: You can opt-out of receiving marketing
            communications by following the unsubscribe instructions in the
            communication or contacting us.
          </li>
        </section>

        {/* Section 6: Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Children&apos;s Privacy
          </h2>
          OpenEdu is not intended for use by individuals under the age of 13. If
          you are a parent or guardian and believe that your child has provided
          us with personal information, please contact us.
        </section>

        {/* Section 7: Changes to Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Changes to Privacy Policy
          </h2>
          We reserve the right to modify this Privacy Policy at any time. We
          will notify you of any changes by posting the updated policy on the
          OpenEdu website.
        </section>

        {/* Section 8: Contact Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at
          [SynthAILabs@gmail.com](mailto:synthailabs@gmail.com).
        </section>

        <p>
          By using OpenEdu, you consent to the practices described in this
          Privacy Policy. Thank you for choosing OpenEdu for your educational
          needs!
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
