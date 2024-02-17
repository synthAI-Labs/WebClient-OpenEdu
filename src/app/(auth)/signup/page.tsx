'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
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

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160).min(4),
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
  confirmPassword: z
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
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const SignUp = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  });

  function onSubmit(data: ProfileFormValues) {
    if (data.confirmPassword !== data.password) {
      toast({
        title: 'Error',
        type: 'foreground',
        variant: 'destructive',
        description: 'Passwords do not match',
      });
      return;
    } else {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
  }

  return (
    <Card className=" lg:w-8/12 md:w-8/12 sm:w-8/12">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign UP</CardTitle>
        <CardDescription>
          Enter your email below to Log into your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
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
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p>
              Don't have an account.
              <Button variant={'link'} className=" text-[16px]">
                {' '}
                <Link href={'/signup'}>Register</Link>
              </Button>
            </p>
            <div className=" flex justify-center items-center">
              <Button type="submit" className=" w-2/3 text-md">
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div className=" text-muted-foreground">
          <p>
            By Continuing, You agree to our{' '}
            <Button variant={'link'} className=" text-[16px]">
              <Link href="/terms">Terms and Condition</Link>
            </Button>
            ,{' '}
            <Button variant={'link'} className=" text-[16px]">
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            , and{' '}
            <Button variant={'link'} className=" text-[16px]">
              <Link href="/cookie">Cookie Policy</Link>
            </Button>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
