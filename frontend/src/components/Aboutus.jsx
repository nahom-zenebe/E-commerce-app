import React from 'react';
import { FaShoppingCart, FaUsers, FaTruck } from 'react-icons/fa'; // Importing Font Awesome Icons

function AboutUs() {
  return (
    <div className="w-full h-screen py-16 bg-gray-100 pt-56">
    
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">About Market Hub</h1>
        <p className="text-lg text-gray-700 mb-12">
          Market Hub is your go-to online shopping destination where you can discover great deals, browse through a variety of products, and enjoy an effortless shopping experience. Our mission is to make online shopping easier and more convenient for everyone.
        </p>

 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
   
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl">
            <FaShoppingCart className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800">500+</h2>
            <p className="text-gray-600">Products Available</p>
          </div>

     
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl">
            <FaUsers className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800">1000+</h2>
            <p className="text-gray-600">Happy Customers</p>
          </div>

    
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl">
            <FaTruck className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800">99%</h2>
            <p className="text-gray-600">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
