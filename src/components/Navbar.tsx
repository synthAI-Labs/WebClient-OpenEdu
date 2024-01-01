'use client';
import { checkValues } from '@/scripts/check-user-auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileSideBar from './MobileSideBar';

const NavBar = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [logginIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const smallDevice = window.innerWidth <= 800;

    if (smallDevice) {
      setMobileScreen(true);
    }
    const logginIn = checkValues();
    setLoggedIn(logginIn);
  }, []);

  return (
    <nav className="bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-between fixed z-20 w-full">
      <div className="flex flex-row justify-between items-center w-full h-16 px-4">
        <div className="flex flex-row items-center space-x-4 ">
          <div className="text-2xl font-bold ">
            <a href="/">Logo</a>
          </div>
        </div>
        {mobileScreen ? (
          <MobileSideBar />
        ) : (
          <>
            <div className="flex flex-row items-center space-x-4 border rounded-full z-20 shadow-sm h-10">
              <Link href="/contact" className="pl-4 text-lg">
                {' '}
                Contact{' '}
              </Link>
              <Link href="/about" className="pr-4  text-lg">
                {' '}
                About{' '}
              </Link>
            </div>
            <div
              className="flex flex-row
                items-center
                space-x-4
                "
            >
              {logginIn ? (
                <>
                  <a href="/dashboard">Profile</a>
                  <a href="/logout">Logout</a>
                </>
              ) : (
                <>
                  <a href="/signin">Login</a>
                  <a href="/signup">Sign Up</a>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
