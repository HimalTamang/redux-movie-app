import React from "react";

const Header = () => {
  return (
    <div className="navWrapper  px-6 h-[80px] text-2xl flex items-center  bg-[#1e272e] text-[#fff]">
      <nav className="w-full">
        <header className="  h-[50px] flex justify-between items-center ">
          <a href="/">Logo</a>
          <span>Menu</span>
        </header>
      </nav>
    </div>
  );
};

export default Header;
