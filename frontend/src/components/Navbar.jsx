import React, { useState } from 'react';
import logo from '../images/Screenshot 2024-12-01 at 2.31.03 PM.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../features/AuthSlice';

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated || false);
  const user = useSelector((state) => state.auth?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handlelogout = async () => {
    try {
      await fetch('http://localhost:5001/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      dispatch(loginSuccess({ user: '', isAuthenticated: false }));
      navigate('/signup');
      toast.success('Logout successfully');
    } catch (error) {
      toast.error('Error in logout');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-black h-24 w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-16 h-full">
        {/* Logo */}
        <img
          className="w-28 h-16 transition-transform duration-1000 ease-in-out transform hover:rotate-[360deg]"
          src={logo}
          alt="marketlogo image"
        />

        {/* Hamburger Menu for small screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-gradient-to-r from-blue-400 to-black md:bg-transparent md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row justify-evenly items-center md:space-x-8 p-4 md:p-0">
            <li className="text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105">
              {isAuthenticated ? user : <Link to="/signup">Signup</Link>}
            </li>
            <li className="text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105">
              {isAuthenticated ? null : <Link to="/login">Login</Link>}
            </li>
            <li className="text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105">
              {isAuthenticated ? <Link to="/market">Market</Link> : null}
            </li>
            <li className="text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105">
              {isAuthenticated ? <Link to="/cart">Cart</Link> : null}
            </li>
            <li className="text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-105">
              {isAuthenticated ? (
                <button onClick={handlelogout}>Logout</button>
              ) : null}
            </li>
          </ul>
        </nav>
      </div>
      {isAuthenticated ? (
        <span className="absolute top-1/2 transform -translate-y-1/2 sm:hidden  md:hidden lg:visible text-white xl:visible 2xl:visible bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">
          {items.length}
        </span>
      ) : null}
    </div>
  );
}

export default Navbar;
