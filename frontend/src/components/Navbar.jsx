import React, { useState } from 'react';
import logo from '../images/Screenshot 2024-12-01 at 2.31.03 PM.png';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
function Navbar() {
    const navigate=useNavigate()
  const handlelogout=async()=>{
    await fetch('http://localhost:5001/api/auth/logout',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json', 
      },
      credentials: 'include', 
  
    })

    navigate('/signup')
    

  }

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
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'><Link to='/'>Home</Link></li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'><Link to='/signup'>Signup</Link></li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'><Link to='/login'>Login</Link></li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'><Link to='/market'>Market</Link></li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'><Link to='/cart'>Cart</Link></li>
            
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'><button onClick={handlelogout} to='/'>Logout</button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;