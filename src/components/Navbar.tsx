const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-16 px-4">
      <div className="flex flex-row items-center space-x-4 ">
        <div className="text-2xl font-bold ">
          <a href="/">Logo</a>
        </div>
        {/* <div className="flex flex-row items-center space-x-4 ">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div> */}
      </div>
      <div
        className="flex flex-row
                items-center
                space-x-4
                "
      >
        <a href="/signin">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
