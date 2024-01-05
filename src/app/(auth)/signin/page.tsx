'use client';

import NotFound from '@/app/not-found';
import NothingFound from '@/components/NothingFound';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { checkValues, storeValues } from '@/scripts/check-user-auth';
import { UserProfile } from '@/scripts/types/dashboard';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-label';
import { Loader2Icon, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const SignIn = () => {
  // if (process.browser) {
  //   const alreadyLoggedIn: boolean = checkValues();
  //   if (alreadyLoggedIn) {
  //     window.location.href = '/dashboard';
  //   }
  // }

  const [loading, setLoading] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  async function loginUser() {
    try {
      setLoading(true);

      const email = document.getElementById('email') as HTMLInputElement;
      const password = document.getElementById('password') as HTMLInputElement;

      if (!checkbox) {
        toast({
          title: 'Error',
          type: 'foreground',
          variant: 'destructive',
          description: 'Please accept the terms and conditions',
        });
        return;
      }

      const data = {
        email: email.value,
        password: password.value,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status === 201) {
        const user: UserProfile = await response.json();

        if (process.browser) {
          const valueStored = storeValues(
            user.token,
            user.id.toString(),
            user.photo,
            true,
          );
          if (valueStored) {
            window.location.href = '/dashboard';
          } else {
            alert('Error storing values');
          }
        }
      } else {
        return <NothingFound />;
      }
    } catch (error) {
      toast({
        title: 'Something Went Wrong',
        description: error as string,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className=" lg:w-8/12 md:w-8/12 sm:w-8/12">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to Log into your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div> */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox
            id="terms1"
            onCheckedChange={(checked: CheckedState) =>
              setCheckbox(checked === true)
            }
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept <Link href={'/terms'}>terms and conditions</Link>, and
              <Link href={'/privacy'}> privacy policy</Link>
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        <div>
          <Link href={'/signup'}> Dont have an account? </Link>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => loginUser()} className="w-full">
          {loading ? (
            <Loader2Icon className=" animate-spin" />
          ) : (
            <>
              LOG IN <LogIn className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
