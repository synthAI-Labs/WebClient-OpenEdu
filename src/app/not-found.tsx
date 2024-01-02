import { Button } from '@/components/ui/button';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative">
        <Image alt="404 Error" src="/404.png" width={300} height={300} />
      </div>
      <div className=" text-center mt-9">
        <h1 className="text-4xl font-bold">404</h1>
        <h1 className="text-2xl font-bold">Page Not Found</h1>
      </div>
      <Button className="text-lg">Visit Home</Button>
    </div>
  );
};

export default NotFound;
