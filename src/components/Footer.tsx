'use client';

import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { BookOpenText, GlobeIcon, SendToBack } from 'lucide-react';
import Image from 'next/image';
import { toast } from './ui/use-toast';

interface SubProps {
  status: string;
  message: string;
}
const Footer = () => {
  const handleOnSubscribe = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    try {
      if (
        email.value == '' ||
        !email.value.includes('@') ||
        !email.value.includes('.') ||
        email.value.length < 5 ||
        email.value.length > 100 ||
        email.value == null ||
        email.value == undefined
      ) {
        toast({
          title: 'Error',
          type: 'foreground',
          variant: 'destructive',
          description: 'Please enter a valid email address',
        });
        return;
      }
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.value }),
      }).then(async (res) => {
        const response: SubProps = await res.json();
        if (response.status == '200') {
          toast({
            title: 'Success',
            type: 'foreground',
            description: response.message,
          });
        } else {
          toast({
            title: 'Error, Unable to subscribe',
            type: 'foreground',
            variant: 'destructive',
            description: response.message,
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        type: 'foreground',
        variant: 'destructive',
        description: 'Unable to subscribe. Please try again later. ERROR: ',
      });
    }
  };
  return (
    <footer className="flex-grow-0">
      <div className="border-t border-gray-200">
        <div className="flex justify-center items-center">
          <div>
            <Link href="/">
              <Image
                src={'/OpenEdu-logos_black copy.png'}
                alt="logo"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 px-7">
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="text-xl flex flex-col justify-center items-center font-semibold mb-2">
                Links
              </div>
              <div className="mt-4 flex flex-col justify-center items-center ">
                <div>
                  <Link
                    href="/"
                    className={cn(
                      'mt-2 shadow-md',
                      buttonVariants({ variant: 'outline' }),
                    )}
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    href="/learn"
                    className={cn(
                      'mt-2 shadow-md',
                      buttonVariants({ variant: 'outline' }),
                    )}
                  >
                    Learn
                  </Link>
                </div>
                <div>
                  <Link
                    href="/support"
                    className={cn(
                      'mt-2 shadow-md',
                      buttonVariants({ variant: 'outline' }),
                    )}
                  >
                    Contact
                  </Link>
                </div>
                <div>
                  <Link
                    href="/signup"
                    className={cn(
                      'mt-2 shadow-md',
                      buttonVariants({ variant: 'default' }),
                    )}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="text-xl font-semibold mb-2">Newsletter</div>
              <p className="text-gray-600">
                Subscribe to our newsletter to get the latest updates.
              </p>
              <div className="mt-4">
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 p-2 w-full rounded-md"
                  placeholder="Email Address"
                  required
                />
                <Button
                  onClick={() => handleOnSubscribe()}
                  className={cn(
                    'font-semibold p-2 w-full rounded-md mt-4 shadow-lg',
                    buttonVariants({ variant: 'default' }),
                  )}
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="text-xl font-semibold mb-2">Contribute</div>
              <p className="text-gray-600">
                We are always looking for contributors to help us improve our
                platform.
              </p>
              <div className="mt-4">
                <div>
                  <Link
                    href="https://github.com/synthAI-Labs/webclient-openedu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'mt-2 shadow-md',
                      buttonVariants({ variant: 'outline' }),
                    )}
                  >
                    Website <GlobeIcon size={18} className="ml-2" />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://github.com/synthAI-Labs/server-OpenEdu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'mt-2 shadow-md',
                      buttonVariants({ variant: 'outline' }),
                    )}
                  >
                    Server <SendToBack size={18} className="ml-2" />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://ai-res-server.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'mt-2 shadow-md',
                      buttonVariants({ variant: 'outline' }),
                    )}
                  >
                    Documentation <BookOpenText size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 mx-4 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All Rights Reserved SynthAI
                Labs
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <div className="flex space-x-8">
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/cookie"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
