'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { GlobeIcon, SendToBack } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex-grow-0">
      <div className="border-t border-gray-200">
        <div className="pb-8 pt-16">
          <div className="flex justify-center">Logo</div>
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
                      'mt-2',
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
                      'mt-2',
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
                      'mt-2',
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
                      'mt-2',
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
                  type="text"
                  className="border border-gray-300 p-2 w-full rounded-md"
                  placeholder="Email Address"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 w-full rounded-md mt-4">
                  Subscribe
                </button>
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
                    href="/"
                    className={cn(
                      'mt-2',
                      buttonVariants({ variant: 'outline' }),
                    )}
                  >
                    Website <GlobeIcon size={18} className="ml-2" />
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className={cn(
                      'mt-2',
                      buttonVariants({ variant: 'outline' }),
                    )}
                  >
                    Server <SendToBack size={18} className="ml-2" />
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
