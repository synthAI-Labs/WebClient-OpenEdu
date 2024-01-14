import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NoModuleErrorPage = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative">
        <Image alt="nothing found" src="/nodata.png" width={300} height={300} />
      </div>
      <p className="text-md text-muted-foreground">
        Looks like we weren&apos;t able to find module. Please check URL again.
      </p>
      <p className="mt-4 text-xl">
        Not an Error?
        <Link href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/support`}>
          <Button variant={'link'} className=" text-xl">
            Report Now
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default NoModuleErrorPage;
