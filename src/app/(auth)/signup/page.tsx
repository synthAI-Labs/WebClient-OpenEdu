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
import { checkValues, storeValues } from '@/scripts/check-user-auth';
import { Label } from '@radix-ui/react-label';
import { GithubIcon, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// TODO: Add password confirmation, API ROUTES

const SignUp = () => {
  if (process.browser) {
    const alreadyLoggedIn: boolean = checkValues();
    if (alreadyLoggedIn) {
      window.location.href = '/dashboard';
    }
  }

  const [loading, setLoading] = useState(false);

  async function signUpUser() {
    try {
      setLoading(true);

      const email = document.getElementById('email') as HTMLInputElement;
      const password = document.getElementById('password') as HTMLInputElement;
      const confirmPassword = document.getElementById(
        'confirmpassword',
      ) as HTMLInputElement;
      const UserName = document.getElementById('UserName') as HTMLInputElement;
      const Name = document.getElementById('Name') as HTMLInputElement;

      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
      }

      console.log(email.value, password.value, UserName.value, Name.value);

      const data = {
        email: email.value,
        password: password.value,
        name: Name.value,
        username: UserName.value,
      };

      console.log(data);

      const response = await fetch(
        `https://ai-res-server-development.onrender.com/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status === 201) {
        const user = await response.json();

        if (process.browser) {
          const valueStored = storeValues(user.token, user.id);
          if (valueStored) {
            window.location.href = '/dashboard';
          } else {
            alert('Error storing values');
          }
        }
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          Create an account, NOT WORKING
        </CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            Github NOT WORKING
          </Button>
          <Button variant="outline">
            {/* <Icons.google className="mr-2 h-4 w-4" /> */}
            Google NOT WORKING
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
        </div>
        <div className="grid gap-2">
          <Label htmlFor="text">Name</Label>
          <Input id="Name" type="string" placeholder="John Doe" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="text">UserName</Label>
          <Input id="UserName" type="string" placeholder="JohnDoe_1" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john.doe@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="*******" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input id="confirmpassword" type="password" placeholder="*******" />
        </div>
        <div>
          <Link href={'/signin'}> Already have an account? </Link>
        </div>
      </CardContent>
      <CardFooter>
        {/* <Button className="w-full">Create account</Button> */}
        <Button onClick={() => signUpUser()} className="w-full">
          {loading ? (
            <p>loading</p>
          ) : (
            <>
              Create Account <LogIn className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
