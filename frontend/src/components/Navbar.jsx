import React, { useState } from 'react';
import logo from '../images/Screenshot 2024-12-01 at 2.31.03 PM.png';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import {  useSelector,useDispatch } from 'react-redux';
import { loginSuccess } from '../features/AuthSlice'
function Navbar() {
  const items=useSelector((state) => state.cart.items);

  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated || false);
  const user= useSelector((state) => state.auth?.user);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handlelogout=async()=>{

    try {
      await fetch('http://localhost:5001/api/auth/logout',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json', 
        },
        credentials: 'include', 
    
      })
      dispatch(loginSuccess({user:'' ,isAuthenticated: false}))
    
     
      navigate('/signup')
      toast.success("logout successfully")

    
      
      
    } catch (error) {
      toast.error("error in logout")
      
    }
   

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
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>{isAuthenticated?user:<Link to='/signup'>Signup</Link>}</li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>{isAuthenticated?null:<Link to='/login'>Login</Link>}</li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>{isAuthenticated?<Link to='/market'>Market</Link>:null}</li>
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>{isAuthenticated?<Link to='/cart'>Cart</Link>:null}</li>
            
            <li className='ml-16 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105'>{isAuthenticated?<button onClick={handlelogout} to='/'>Logout</button>:null}</li>
          </ul>
        </nav>
      </div>
      {isAuthenticated?  <span className='absolute top-5 right-64 text-white bg-red-500 rounded-full w-4 text-center'>{items.length}</span>:''}
    
    </div>
  );
}

export default Navbar;