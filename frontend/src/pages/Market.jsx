import React, { useEffect, useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import {  addItem } from '../features/cartSlice';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
function Market() {
  const dispatch=useDispatch()
  const[products,setproducts]=useState([])
  const[loading,setloading]=useState(false)


useEffect(()=>{
  setloading(true)


  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=40');
      const data = await response.json();
      setproducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
    finally{
      setloading(false)

    }
  };

  fetchProducts(); 


},[])


 if(loading){
  return ( <div className="flex justify-center items-center min-h-screen">
    <Loader className="animate-spin h-16 w-16 text-blue-500" />
  </div>)

 }

const handleAddToCart = (product) => {
  dispatch( addItem(product));
  toast.success("add to cart")
};



  return (
    <>
    <Navbar/>
    <div className='mt-64 mb-20'>
    <div className='mt-64'>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 ml-36 text-center'>
    {products.map((product) => (
      <div className='hover:shadow-2xl border-2 border-gray-700 w-72 h-auto rounded-lg text-white bg-gray-800 transition-all duration-300' key={product.id}>
        

        <div className='bg-white p-5 rounded-lg'>
          <img className='w-32 h-44 mx-auto mb-5' src={product.image} alt={product.title}/>
        </div>

        <hr className='bg-blue-600 mb-4'/>

        <div className='h-16'>
          <h3 className='mt-4 text-blue-500'>{product.title}</h3>
          <p className='w-72 text-gray-600'>${product.price}</p>
        </div>

  
        <button onClick={()=>handleAddToCart(product)} className='border-2 w-32  rounded-lg border-blue-600 bg-blue-600 text-white mr-5 mt-20 hover:bg-blue-700 hover:border-blue-700 h-10 mb-5 transition duration-200'>
          Add to Cart
        </button>


        <Link key={product.id} to={`/market/${product.id}`}> <button className='border-2 w-32 rounded-lg border-gray-600 bg-gray-700 text-white mb-5 hover:bg-gray-600 hover:border-gray-500 h-10 transition duration-200'>
          Review Product
        </button></Link>
      </div>
    ))}
  </div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Market