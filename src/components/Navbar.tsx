
import React from 'react';
import logo from '../assets/logo-text.png'

const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-14 flex justify-between items-center bg-white">

        {/* Left  */}
        <img src={logo} alt="" />

        {/* Mid */}
        <div className="md:flex items-center gap-7 text-[14px]">
          <a href="#" className="text-pink-500" >Home</a>
          <a href="#" >Technologies </a>
          <a href="#" >Projects </a>
          <a href="#" >About </a>
          <a href="#" >Contact </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="text-[14px] text-gray-700 hover:text-pink-500 ">Sign In </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-[14px] font-medium px-5 py-2 rounded-full "> Sign Up</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;