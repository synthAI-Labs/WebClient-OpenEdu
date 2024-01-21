'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { setVerifiedInLocalStorage } from '@/scripts/check-user-auth';
import { UserProfile } from '@/scripts/types/dashboard';
import { Loader2Icon } from 'lucide-react';
import { useState } from 'react';

interface PageProps {
  params: {
    emailAddress: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [loading, setLoading] = useState(false);

  async function verifyEmail() {
    try {
      setLoading(true);

      const verificationCode = document.getElementById(
        'verificationCode',
      ) as HTMLInputElement;
      const email = document.getElementById('email') as HTMLInputElement;

      const data = verificationCode.value;
      const emailAddress = email.value;
      console.log(data);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signup/confirm/${emailAddress}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              code: data,
            },
            credentials: 'include'
          },
        );

        if (!response.ok) {
          toast({
            title: 'ERROR',
            description: 'Wrong verification code',
          });
        }

        const user: UserProfile = await response.json();

        if (user.emailVerified) {
          toast({
            title: 'SUCCESS',
            description: 'Email verified',
          });
          let setVerified = false;
          if (process.browser) {
            setVerified = setVerifiedInLocalStorage(true);
          }
          if (setVerified) {
            window.location.href = '/dashboard';
          } else
            toast({
              title: 'ERROR',
              description: 'Unable to store values',
            });
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'ERROR',
          description: 'Something went wrong',
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Verify Your Email</CardTitle>
        <CardDescription>
          Enter the code sent to your email to verify your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Input id="email" type="email" placeholder="Enter email" />
        </div>
        <div className="grid gap-2">
          <Input id="verificationCode" type="number" placeholder="Enter code" />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => verifyEmail()} className="w-full">
          {loading ? (
            <p>
              Verifying...{' '}
              <span className="animate-spin">
                <Loader2Icon />
              </span>
            </p>
          ) : (
            <>Verify Email</>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Page;
