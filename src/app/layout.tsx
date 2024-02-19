'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SplashScreen from '@/components/splashScreen/splashScreen';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'OpenEdu - Free Open Source Learning Platform with AI',
//   description:
//     'Master any topic, optimize your resume with AI, and land your ideal job faster. OpenEdu is a free Open Source learning platform with advanced AI features. Explore personalized learning, powerful AI tools, and dedicated career support. Join now for a 100% free and open-source education experience.',
//   keywords: [
//     'learning platform',
//     'AI education',
//     'resume optimization',
//     'job search',
//     'free open source',
//   ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isHome = pathName === '/';
  const [isLoading, setLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Analytics />
        <SpeedInsights />
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setLoading(false)} />
        ) : (
          <>
            <NavBar />
            <Toaster />
            <div className="flex justify-center items-center mb-5">
              {children}
            </div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

const InBetaRelease = () => {
  return (
    <div className=" flex flex-col font-bold items-center justify-center text-3xl py-6 bg-red-500/20">
      <div>This is in development mode. Please do not share this link. 🚧</div>
      <div className=" text-muted-foreground">
        Also Don&apos;t expect it to work as expected
      </div>
      <Link href="https://github.com/synthAI-Labs/WebClient-OpenEdu/blob/main/ProjectDetails.md">
        <Button className="mt-4">View Project Details</Button>
      </Link>
    </div>
  );
};
