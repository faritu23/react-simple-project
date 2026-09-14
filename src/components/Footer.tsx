import React from 'react';
import logo from '../assets/logo-text.png'
const Footer = () => {
  return (

    <div className='pt-7'>
    <div className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
            <img src={logo} alt="Dev Stack" />
            <p className="text-sm text-gray-500 leading-5 mt-4 max-w-sm">
              Curated tools, technologies, and resources for developers
              building modern software.</p>

                {/* Social Links */}
                <div className="flex items-center gap-5 mt-6">
                <a href="#" className="text-sm font-semibold text-gray-700">  GitHub </a>
                <a href="#" className="text-sm font-semibold text-gray-700">  Twitter </a>
                <a href="#" className="text-sm font-semibold text-gray-700">  LinkedIn </a>
                </div>

            </div>

            <div>

              <h3 className="text-sm font-semibold text-black uppercase">Product</h3>
              <div className="flex flex-col gap-3 mt-5">

                <a href="#" className="text-sm text-gray-500">  Home </a>
                <a href="#" className="text-sm text-gray-500">  Technologies </a>
                <a href="#" className="text-sm text-gray-500">  Projects </a>

              </div>

            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase"> Company </h3>
              <div className="flex flex-col gap-3 mt-5">
                <a href="#" className="text-sm text-gray-500">  About </a>
                <a href="#" className="text-sm text-gray-500">  Contact </a>
                <a href="#" className="text-sm text-gray-500">  Careers </a>

              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase">Legal </h3>
              <div className="flex flex-col gap-3 mt-5">
                <a href="#" className="text-sm text-gray-500" > Privacy Policy </a>
                <a href="#" className="text-sm text-gray-500" > Terms of Service </a>
              </div>
            </div>

        </div>


        {/* Bottom Border */}
        <div className="border-t border-gray-100"></div>
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400"> © 2026 Dev Stack. All rights reserved. </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-400"> Privacy </a>
            <a href="#" className="text-xs text-gray-400"> Terms </a>
          </div>

        </div>

      </div>

    </div>
  </div>
  );
};

export default Footer;