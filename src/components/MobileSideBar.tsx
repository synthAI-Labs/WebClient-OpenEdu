import { Button } from './ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const MobileSideBar = () => {
  const [isMounted, selfMounted] = useState(false);

  useEffect(() => {
    selfMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={'ghost'}>Menu</Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Contents</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Link href="/learn">
              <Button variant={'ghost'}>Learn</Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Link href="/about">
              <Button variant={'ghost'}>About</Button>
            </Link>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Link href="/contact">
              <Button variant={'ghost'}>Contact</Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Link href="/dashboard">
              <Button variant={'ghost'}>Dashboard</Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Link href="/signin">
              <Button variant={'ghost'}>Login</Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
      <SheetClose />
    </Sheet>
  );
};

export default MobileSideBar;
