import React, { useEffect, useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import {  addItem } from '../features/cartSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
function Market() {
  const dispatch=useDispatch()
  const[products,setproducts]=useState([])
  const[loading,setloading]=useState(false)


useEffect(()=>{


  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=40');
      const data = await response.json();
      setproducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  fetchProducts(); // Call the async function


},[])

const handleAddToCart = (product) => {
  dispatch( addItem(product));
};



  return (
    <>
    <Navbar/>
    <div className='mt-64'>
     
      <div className='grid grid-cols-3 ml-36  text-center'>
        {products.map((product) => (
          <div className='hover:shadow-2xl border-2 border-blue-600 w-72 h-5/6 rounded-lg' key={product.id}>
            <img  className='w-32 h-44 ml-16 mt-5 mb-10' src={product.image} alt={product.title}/>
            <hr className='bg-blue-800'></hr>
            <div className='h-16'>
            <h3 className='mt-4 text-blue-600'>{product.title}</h3>
           
            <p className='w-72 text-blue-600'>${product.price}</p>
            </div>
            <button className='border-2 w-32 rounded-lg border-blue-600 bg-blue-600 text-white mr-5 mt-16 hover:bg-blue-800 hover:border-blue-800 h-10 mb-10' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button className='border-2 w-32 rounded-lg border-blue-600 bg-blue-600 text-white mb-24 hover:bg-blue-800 hover:border-blue-800 h-10' onClick={() => handleAddToCart(product)}>Review product</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Market