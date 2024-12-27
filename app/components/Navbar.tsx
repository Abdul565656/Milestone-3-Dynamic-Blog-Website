import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white font-bold text-lg">Abdullah Kashif</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="text-white hover:underline hover:text-gray-100 transition duration-200">Home</li>
        <Link href={'https://a-practice-of-class-3-governor-initiative-b1ju.vercel.app/'}><li className="text-white hover:underline hover:text-gray-100 transition duration-200">Portfolio </li></Link>  
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <span
            className="text-white text-xl hover:text-gray-100 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.317 3.438 9.8 8.205 11.385.6.111.82-.261.82-.578 0-.286-.012-1.237-.017-2.237-3.338.726-4.042-1.637-4.042-1.637-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.071 1.836 2.809 1.305 3.494.997.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.336-5.467-5.946 0-1.313.469-2.386 1.236-3.23-.124-.303-.536-1.521.116-3.172 0 0 1.008-.323"></path>
</svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;