import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

function Market() {
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=40');
        const data = await response.json();
        setproducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setloading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin h-16 w-16 text-blue-500" />
      </div>
    );
  }

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    toast.success('Added to cart');
  };

  return (
    <>
      <Navbar />
      <div className="mt-32 mb-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-center">
          {products.map((product) => (
            <div
              className="hover:shadow-2xl border-2 border-gray-700 rounded-lg text-white bg-gray-800 transition-all duration-300 p-4"
              key={product.id}
            >
              <div className="bg-white p-5 rounded-lg">
                <img
                  className="w-32 h-44 mx-auto mb-5 object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <hr className="bg-blue-600 mb-4" />

              <div className="h-16">
                <h3 className="mt-4 text-blue-500 truncate">{product.title}</h3>
                <p className="text-gray-400">${product.price}</p>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="border-2 w-full rounded-lg border-blue-600 bg-blue-600 text-white mt-4 hover:bg-blue-700 hover:border-blue-700 h-10 transition duration-200"
                >
                  Add to Cart
                </button>
                <Link to={`/market/${product.id}`}>
                  <button className="border-2 w-full rounded-lg border-gray-600 bg-gray-700 text-white mt-2 hover:bg-gray-600 hover:border-gray-500 h-10 transition duration-200">
                    Review Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Market;
