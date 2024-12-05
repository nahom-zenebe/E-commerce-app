import React from 'react'
import { useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux';


function DetailProduct() {
    const {ProductId}=useParams()
    const items=useSelector((state) => state.cart.items);

   
  



    const product=items.find((item)=>item.id===Number(ProductId))




    if (!product) {
        return <p>Product not found.</p>;
      }

    
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 ml-36 text-center'>
    {items.map((product) => (
      <div className='hover:shadow-2xl border-2 border-gray-700 w-72 h-auto rounded-lg text-white bg-gray-800 transition-all duration-300' key={product.id}>
        

        <div className='bg-white p-5 rounded-lg'>
          <img className='w-32 h-44 mx-auto mb-5' src={product.image} alt={product.title}/>
        </div>

        <hr className='bg-blue-600 mb-4'/>

        <div className='h-16'>
          <h3 className='mt-4 text-blue-500'>{product.title}</h3>
          <p className='w-72 text-gray-600'>${product.price}</p>
        </div>

      </div>
    ))}
  </div>
    </div>
  )
}

export default DetailProduct