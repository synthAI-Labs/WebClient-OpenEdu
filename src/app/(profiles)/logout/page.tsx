'use client';
import { Button } from '@/components/ui/button';
import { checkValues, deletedValues } from '@/scripts/check-user-auth';
import Link from 'next/link';

const Page = () => {
  if (process.browser) {
    const loggedIn = checkValues();
    const stillLoggedIn = deletedValues();

    if (loggedIn) {
      if (!stillLoggedIn) {
        return (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              You Logged Out Successfully
            </h1>
            <Link href={'/'}>
              <Button>Home Page</Button>
            </Link>
          </div>
        );
      } else {
        return (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <Link href={'/'}>
              <Button>Home Page</Button>
            </Link>
          </div>
        );
      }
    } else {
      window.location.href = '/signin';
    }
  }
};
export default Page;
