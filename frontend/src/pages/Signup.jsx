import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate,Link } from 'react-router-dom';
function SignUp() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    try {
      const reponse=await fetch('http://localhost:5001/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include', 
    
      })
      const data = await reponse.json(); 
     if(data.status){
             navigate('/')
      console.log('Sign-up successful:', data);
      

     }
      
    } catch (error) {
      alert("there is error in logging")
      
    }


    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Navbar />
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md mt-16">
    
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">Market Hub</h1>

   
        <form onSubmit={handleSubmit}>
       
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

  
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

     
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>


        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
