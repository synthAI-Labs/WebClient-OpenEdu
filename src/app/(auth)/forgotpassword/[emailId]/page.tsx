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
import { useState } from 'react';
import { set } from 'animejs';
import { LoaderIcon } from 'lucide-react';

interface PageProps {
  params: {
    emailId: string;
  };
}

interface ForgotPasswordEmailProps {
  status: number;
  message: string;
}

const profileFormSchema = z.object({
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters.',
    })
    .max(30, {
      message: 'Password must not be longer than 30 characters.',
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.',
    ),
  code: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const Page: React.FC<PageProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  });

  async function onSubmit(data: ProfileFormValues) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/password/forgot/confirm/:userEmail`,
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
      const response: ForgotPasswordEmailProps = await res.json();

      if (response.status == 403 || response.status == 500) {
        toast({
          title: response.status.toString(),
          description: response.message,
          type: 'foreground',
          variant: 'destructive',
        });
        return;
      } else if (response.status === 200) {
        toast({
          title: 'Success',
          description: response.message,
          type: 'foreground',
        });
        window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/signin`;
      }
    } catch {
      setIsLoading(false);
      toast({
        title: 'ERROR: 500',
        description: 'Something Went Wrong. Try again later',
      });
    } finally {
      setIsLoading(false);
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
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code: </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1234" {...field} />
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
                  <FormLabel>New Password: </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{' '}
            <div className=" flex justify-center items-center">
              <Button
                type="submit"
                className=" text-md w-2/3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <p className=" animate-spin">
                    <LoaderIcon />
                  </p>
                ) : (
                  <p>Change Password</p>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div>
          <p>
            Clicked on it By Mistake? Go back to{' '}
            <Button variant={'link'} className=" text-[16px]">
              {' '}
              <Link href={'/signin'}>Sign In</Link>
            </Button>
            or register using{' '}
            <Button variant={'link'} className=" text-[16px]">
              {' '}
              <Link href={'/signup'}>Register</Link>
            </Button>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Page;
