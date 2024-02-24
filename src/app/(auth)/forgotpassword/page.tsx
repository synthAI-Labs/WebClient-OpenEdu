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
import { useState } from 'react';
import { LoaderIcon } from 'lucide-react';

const profileFormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ForgotPasswordEmailProps {
  status: number;
  message: string;
}

const ForgotPasswordEmail = () => {
  const [isloading, setLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  });

  async function onSubmit(data: ProfileFormValues) {
    try {
      setLoading(true);
      const body = {
        userEmail: data.email,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/password/forgot`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
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
        console.log('failed');
      } else if (response.status === 200) {
        toast({
          title: 'Success',
          description: response.message,
          type: 'foreground',
        });
        window.location.href = `/forgotpassword/${data.email}`;
      }
    } catch {
      toast({
        title: 'ERROR: 500',
        description: 'Something Went Wrong. Try again later',
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className=" lg:w-8/12 md:w-8/12 sm:w-8/12 mt-32">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Forgot Password</CardTitle>
        <CardDescription>
          No worries! Let's figure it out together. For now enter your email
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
            />{' '}
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
                  <p>Verify My Email</p>
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

export default ForgotPasswordEmail;
