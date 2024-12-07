import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      <h1 className="text-9xl font-extrabold tracking-widest text-blue-500">404</h1>
      <div className="bg-gray-800 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <p className="text-lg mt-5 text-gray-400">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-blue-500 group active:text-blue-700 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-gray-900 border border-current">
            Go Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Pagenotfound 
