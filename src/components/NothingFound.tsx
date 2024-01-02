import Image from 'next/image';
import { Button } from './ui/button';

const NothingFound = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative">
        <Image alt="nothing found" src="/nodata.png" width={300} height={300} />
      </div>
      <p className="text-md text-muted-foreground">
        No data. Please check URL again.
      </p>
      <p className="mt-4 text-lg">
        Not an Error? <Button variant={'link'}>Report Now</Button>
      </p>
    </div>
  );
};

export default NothingFound;
