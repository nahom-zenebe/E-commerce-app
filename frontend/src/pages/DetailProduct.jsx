import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailProduct() {
  const { ProductId } = useParams();
  const items = useSelector((state) => state.cart.items);

  const product = items.find((item) => item.id === Number(ProductId));

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 font-semibold">Add Product to view details.</p>
      </div>
    );
  }

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 lg:ml-56 xl:ml-72 2xl:ml-96">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="hover:shadow-2xl border-2 border-gray-700 w-full max-w-sm mx-auto rounded-lg text-white bg-gray-800 transition-all duration-300"
          key={product.id}
        >
   
          <div className="bg-white p-5 rounded-lg">
            <img
              className="w-full h-44 mx-auto object-contain mb-5"
              src={product.image}
              alt={product.title}
            />
          </div>

    
          <hr className="bg-blue-600 mb-4" />

   
          <div className="px-4 pb-4">
            <h3 className="mt-4 text-blue-500 font-semibold">{product.title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{product.description}</p>
            <p className="mt-2 text-gray-500 italic">Category: {product.category}</p>
            <p className="mt-2 text-green-500 font-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
