import Image from 'next/image';

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center mt-32">
      <div className="relative">
        <Image alt="loading" src="/loading.png" width={300} height={300} />
      </div>
      <p className="text-md text-muted-foreground">
        Please Wait. We are processing your request.
      </p>
    </div>
  );
};

export default Loader;
