import { Button } from '@/components/ui/button';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="h-full flex flex-row gap-y-4 items-center justify-center pt-32 min-w-full max-w-full">
      <div className="relative">
        <Image alt="404 Error" src="/404CatPick.png" width={500} height={500} />
      </div>
      <div className=" flex flex-col ml-9">
        <div className=" text-center mt-9 mb-3">
          <h1 className="text-4xl font-bold">404</h1>
          <h1 className="text-2xl font-bold">Page Not Found</h1>
        </div>
        <div className=" space-y-1 mb-4">
          <p className="text-lg text-center">
            Amidst the digital realm, a wanderer lost,
          </p>
          <p className="text-lg text-center">
            In the vast expanse, where paths entwine and crossed.
          </p>
          <p className="text-lg text-center">
            404, it echoes, a whisper in the void,
          </p>
          <p className="text-lg text-center">
            Seek not despair, but a journey to avoid.
          </p>
        </div>

        <Button className="text-lg">Visit Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
