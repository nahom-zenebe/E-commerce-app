import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gradient-to-b from-blue-700 via-black to-gray-800 text-white py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
         
          <div>
            <h3 className="text-xl font-semibold mb-4">About Market Hub</h3>
            <p className="text-gray-300">
              Market Hub is an online marketplace offering a wide variety of products at great prices. 
              Our mission is to make shopping easier, faster, and more enjoyable for everyone.
            </p>
          </div>

  
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-300">
              <li className="mb-2">📍 Address: 1234 Market St, Addis Ababa, Ethiopia</li>
              <li className="mb-2">📞 Phone: +251 123 456 789</li>
              <li className="mb-2">📧 Email: support@markethub.com</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-300">
              <li className="mb-2"><a href="/" className="hover:text-blue-200">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-blue-200">About Us</a></li>
              <li className="mb-2"><a href="/shop" className="hover:text-blue-200">Shop</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-blue-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-pink-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>

  
        <div className="mt-12 border-t border-gray-500 pt-6 text-center">
          <p className="text-sm text-gray-300">© 2024 Market Hub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
