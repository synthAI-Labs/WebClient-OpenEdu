import Head from 'next/head';

const Terms = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>OpenEdu Terms and Conditions</title>
        <meta
          name="description"
          content="OpenEdu Terms and Conditions of Use"
        />
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">
          OpenEdu Terms and Conditions of Use
        </h1>
        <p className="mb-4">Last Updated: January 4, 2024</p>
        <p className="mb-8">
          Welcome to OpenEdu, a product developed by SynthAi Labs, designed to
          provide free education through personalized AI tutors. Before using
          OpenEdu, please carefully read and understand the following terms and
          conditions of use. By accessing or using OpenEdu, you agree to be
          bound by these terms.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using OpenEdu, you agree to comply with and be bound
            by these terms and conditions of use. If you do not agree with any
            part of these terms, you may not use OpenEdu.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">2. Use of OpenEdu</h2>
          <li>
            Personal Use Only: OpenEdu is intended for personal, non-commercial
            use. You may not use OpenEdu for any commercial purposes without the
            express written consent of SynthAi Lab
          </li>
          <li>
            Registration: Some features of OpenEdu may require you to register
            for an account. When registering, you agree to provide accurate,
            current, and complete information. You are responsible for
            maintaining the confidentiality of your account and passwor
          </li>
          <li>
            User Content: You may have the opportunity to submit content, such
            as questions or feedback. By submitting content, you grant SynthAi
            Labs a worldwide, non-exclusive, royalty-free license to use,
            reproduce, modify, distribute, and display the conten
          </li>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">3. Privacy</h2>
          <p>
            Please review our Privacy Policy to understand how we collect, use,
            and disclose information about you. By using OpenEdu, you consent to
            the practices described in the Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">4. User Conduct</h2>
          <p>
            You agree to use OpenEdu in accordance with all applicable laws and
            regulations. You may not:
          </p>
          <li>Violate any applicable laws or regulations;</li>
          <li>Interfere with or disrupt the operation of OpenEdu;</li>
          <li>
            Attempt to gain unauthorized access to OpenEdu or its related
            systems;
          </li>
          <li>Engage in any conduct that may harm or exploit minors;</li>
          <li>
            Upload or transmit malicious code or interfere with the
            functionality of OpenEdu;
          </li>
          <li>
            Impersonate any person or entity, or falsely state or otherwise
            misrepresent your affiliation with a person or entity.
          </li>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">5. Intellectual Property</h2>
          <li>
            SynthAi Labs Property: All content, materials, and features of
            OpenEdu are the property of SynthAi Labs and are protected by
            intellectual property law
          </li>
          <li>
            User Content: By submitting content, you represent and warrant that
            you have the necessary rights to grant SynthAi Labs the license to
            use the content as described in these term
          </li>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, SynthAi Labs
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">7. Termination</h2>
          <p>
            SynthAi Labs reserves the right to terminate or suspend your access
            to OpenEdu at any time, for any reason, without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">8. Changes to Terms</h2>
          <p>
            SynthAi Labs reserves the right to modify these terms at any time.
            It is your responsibility to review these terms periodically.
            Continued use of OpenEdu after any modifications indicates your
            acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">9. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of [Jurisdiction], without regard to its conflict of law
            principles.
          </p>
          <p className="mb-8">
            If you have any questions or concerns about these terms, please
            contact us at [SynthAILabs@gmail.com](mailto:synthailabs@gmail.com).
          </p>
        </section>

        <p className="mb-8">Thank you for using OpenEdu!</p>
      </div>
    </div>
  );
};

export default Terms;
