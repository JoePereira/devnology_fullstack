import React from "react";
import { FaStar } from "react-icons/fa6";
import {useProducts} from '../../hook/useProducts'

const Products = () => {

    const { products, loading, error } = useProducts()

  return (
    <div className="flex justify-center mt-14 mb-12 px-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-purple-900">
            Produtos mais vendidos
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Produtos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {products.slice(80,85).map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.image}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.name}</h3>
                  <p className="text-sm text-gray-600">{data.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>5.0</span>
                    </div>

                    <p className="font-bold">R$ {data.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="/produtos" className="text-center mt-10 cursor-pointer bg-purple-900 text-white py-1 px-5 rounded-md">
              Ver Todos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;