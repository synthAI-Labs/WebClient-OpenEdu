'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { UserProfile } from '@/interfaces/dashboard';
import { storeValues } from '@/scripts/check-user-auth';
import { LoaderIcon } from 'lucide-react';
import { useState } from 'react';

const profileFormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters.',
    })
    .max(30, {
      message: 'Password must not be longer than 30 characters.',
    }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface SignInResponse {
  status: number;
  message: string;
  data: UserProfile;
}
const SignIn = () => {
  const [isloading, setisLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  });

  async function onSubmit(data: ProfileFormValues) {
    try {
      setisLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          credentials: 'include',
        },
      );
      console.log('response made', JSON.stringify(data));
      const response: SignInResponse = await res.json();

      if (response.status == 403 || response.status == 500) {
        toast({
          title: response.status.toString(),
          description: response.message,
          type: 'foreground',
          variant: 'destructive',
        });
        return;
      } else if (response.status === 200) {
        const user: UserProfile = await response.data;
        console.log(user);
        if (process.browser) {
          const valueStored = storeValues(user, false);
          if (valueStored) {
            window.location.href = `${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard`;
          } else {
            toast({
              title: 'Error',
              description: 'Unable to store values',
            });
            return;
          }
          toast({
            title: response.message,
          });
        }
      }
    } catch {
      setisLoading(false);
      toast({
        title: 'ERROR: 500',
        description: 'Something Went Wrong. Try again later',
      });
    } finally {
      setisLoading(false);
    }
  }

  return (
    <Card className=" lg:w-8/12 md:w-8/12 sm:w-8/12 mt-32">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to Log into your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="OpenEdu@Example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" flex justify-center items-center">
              <Button
                type="submit"
                className=" text-md w-2/3"
                disabled={isloading}
              >
                {isloading ? (
                  <p className=" animate-spin">
                    <LoaderIcon />
                  </p>
                ) : (
                  <p>Sign IN</p>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start">
        <div>
          <p>
            Don&apos;t have an account.
            <Button variant={'link'} className=" text-[16px]">
              {' '}
              <Link href={'/signup'}>Register</Link>
            </Button>
          </p>
        </div>
        <div>
          <p>
            <Button variant={'link'} className=" text-[16px]">
              <Link href={'/forgotpassword'}> Forgot Your Password?</Link>
            </Button>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
