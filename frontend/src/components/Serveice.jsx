import React from 'react';
import { FaTruck, FaRegCreditCard, FaHeadset } from 'react-icons/fa'; // Example icons

function Service() {
  return (
    <div className="w-full py-16 bg-gray-200">

      <div className="max-w-screen-lg mx-auto text-center">

        <h1 className="text-4xl font-bold text-blue-600 mb-8">Our Services</h1>
        <p className="text-lg text-gray-700 mb-12">
          At Market Hub, we offer a range of services to make your shopping experience seamless, convenient, and enjoyable. Explore what we offer and experience shopping like never before.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaTruck className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fast Delivery</h2>
            <p className="text-gray-600">Enjoy fast and reliable delivery directly to your doorstep. We make sure your orders arrive on time, every time.</p>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaRegCreditCard className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Secure Payments</h2>
            <p className="text-gray-600">Shop with confidence knowing that your payments are securely processed. We use the latest encryption technologies to keep your data safe.</p>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHeadset className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">24/7 Customer Support</h2>
            <p className="text-gray-600">Our support team is available round-the-clock to assist you with any inquiries or issues. We're here to help, anytime you need us.</p>
          </div>
        </div>

        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Wide Selection</h3>
              <p className="text-gray-600">We offer a wide range of products from trusted brands, ensuring you find everything you need at competitive prices.</p>
            </div>

   
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600">If you're not satisfied with your purchase, our easy return process ensures you can shop with confidence.</p>
            </div>

       
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Trusted by Thousands</h3>
              <p className="text-gray-600">Our platform has earned the trust of thousands of happy customers. Join the Market Hub family today and enjoy a world-class shopping experience.</p>
            </div>
          </div>
        </div>

        
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">What Our Customers Say</h2>
          <div className="flex justify-center space-x-8">
       
            <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
              <p className="text-gray-600 mb-4">"Market Hub made shopping so easy and convenient! Fast delivery and great prices. Highly recommend!"</p>
              <p className="font-semibold text-blue-600">John D.</p>
              <p className="text-gray-500">Verified Buyer</p>
            </div>

     
            <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
              <p className="text-gray-600 mb-4">"I love the variety of products available. I always find what I need and at affordable prices."</p>
              <p className="font-semibold text-blue-600">Sarah L.</p>
              <p className="text-gray-500">Verified Buyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
