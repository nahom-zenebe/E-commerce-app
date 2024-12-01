import React from 'react';
import logo from '../images/Screenshot 2024-12-01 at 2.31.03 PM.png';

function Navbar() {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-black h-24 w-full fixed top-0 left-0 z-50 shadow-lg'>
      <div className='flex justify-evenly items-center '>
        <img 
          className='w-32 h-20  mr-32 mt-2 transition-transform duration-1000 ease-in-out transform hover:rotate-[360deg]' 
          src={logo} 
          alt='marketlogo image' 
        />
        
        <nav >
          <ul className='flex justify-around items-center'>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>About</li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>Service</li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>Contact</li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>Signup</li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>Login</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;