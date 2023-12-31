"use client"
import { checkValues } from "@/scripts/check-user-auth";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [logginIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const logginIn = checkValues();
    setLoggedIn(logginIn);
  }, []);
  return (
    <nav className="bg-transparent flex items-center justify-between">
      <div className="flex flex-row justify-between items-center w-full h-16 px-4">
        <div className="flex flex-row items-center space-x-4 ">
          <div className="text-2xl font-bold ">
            <a href="/">Logo</a>
          </div>
        </div>
        {/* <div className="flex flex-row items-center space-x-4 ">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div> */}
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
      </div>
    </nav>
  );
};

export default NavBar;
