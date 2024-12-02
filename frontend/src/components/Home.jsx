import React from 'react';
import background1 from '../images/background1.avif';

function Home() {
  return (
    <div className="w-full h-screen bg-[#dadcdd] flex items-center justify-center px-4 ">
      <div className="flex items-center justify-between w-full max-w-screen-lg mr-20">
        
    
        <div className="w-1/2  mr-40 text-center sm:text-left">
          <h1 className="text-8xl font-bold text-blue-600 mb-4">Welcome to Market Hub!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover the best deals, shop your favorite products, and enjoy a seamless online shopping experience.
            From everyday essentials to unique finds. Start exploring now!
          </p>
          
   
          <div className="space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Shop Now
            </button>
            <button className="px-6 py-2 bg-gray-600  text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

      
        <div className="w-1/2 flex justify-center sm:justify-end ">
          <img 
            className='rounded-lg '
            src={background1} 
            alt="market logo" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
