import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import toast from 'react-hot-toast';
import { removeItem, incrementItem, decrementItem} from '../features/cartSlice';
import {  useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function Cart() {

    const dispatch=useDispatch()
    const items=useSelector((state) => state.cart.items);
    const totalAmount=useSelector((state)=>state.cart.totalAmount)

    console.log('Items:', items); // Debugging




    const handleIncrement = (product) => {
        dispatch(incrementItem(product.id)); 
      };
    
      const handleDecrement = (product) => {
        dispatch(decrementItem(product.id)); 
      };
    
      const handleRemove = (product) => {
        dispatch(removeItem(product.id)); 
        toast.error("remove from the cart")
      };

      


  return (
    
    <div>
   <Navbar />
   <div className='mt-72 mb-72'>
   <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
  {items.map((product, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-200 transform hover:scale-105"
    >
      {/* Product Image */}
      <div className="bg-gray-100 p-5">
        <img
          className="w-full h-48 object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* Product Info */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-blue-600 truncate">
          {product.title}
        </h3>
        <p className="text-gray-700 font-medium mt-2">
          Quantity: {product.quntaity}
        </p>
        <p className="text-gray-500 mt-2 text-sm">${product.price.toFixed(2)}</p>
       

      
        <div className="flex justify-center mt-4 space-x-3">
          <button onClick={() => handleIncrement(product)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            +
          </button>
          <button onClick={() => handleDecrement(product)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200">
            -
          </button>
       
          <button onClick={() => handleRemove(product)} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200">
            Remove
          </button>
        </div>
      </div>

    </div>
  ))}
</div>
<hr className='mt-20 mb-10'></hr>
 <p className="text-gray-700 font-medium mt-3 mb-20 text-center text-4xl">
          Total: ${totalAmount.toFixed(2)}
        </p>

        <div className="flex justify-center items-center mt-8">
 <Link to='/checkoutfrom'> <button className='border-2 border-blue-700 bg-white text-blue-700 w-72 h-12 rounded-lg hover:bg-blue-700 hover:text-white'>
    Check out
  </button></Link>
  </div>
   


   </div>

   <Footer/> 
    </div>
  )
}

export default Cart