import Image from 'next/image';

const EmailSent = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative">
        <Image
          alt="Email sent"
          className="min-w-full min-h-full"
          src="/hippo-email-sent.png"
          width={300}
          height={300}
        />
      </div>
      <p className="text-md text-muted-foreground">
        Thank you for contacting us. We will get back to you soon.
      </p>
    </div>
  );
};

export default EmailSent;
