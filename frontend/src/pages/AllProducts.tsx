import React, { useState } from 'react'
import { useProducts } from '../hook/useProducts'
import { FaShoppingCart } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {

  const navigate = useNavigate();

  const { products, loading } = useProducts()
  const [provider, setProvider] = useState('')
  const [search, setSearch] = useState('')
  const { addToCart } = useCart()

  const filtered = products
    .filter(p => (provider === '' ? true : p.provider === provider))
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  if (loading) return <p>Carregando...</p>

  return (
    <div className="p-4 dark:bg-gray-900 dark:text-white">
      <h1 data-aos="fade-right" data-aos-delay="200" className="text-3xl font-bold mb-6">Todos os Produtos</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded dark:bg-gray-900"
          value={provider}
          onChange={e => setProvider(e.target.value)}
          data-aos="fade-right" data-aos-delay="200"
        >
          <option value="">Todos</option>
          <option value="brazilian">Brasileiros</option>
          <option value="european">Europeus</option>
        </select>

        <input
          data-aos="fade-left" data-aos-delay="200"
          type="text"
          placeholder="Buscar por nome..."
          className="border px-4 py-2 rounded"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <div key={product.id} className="border p-4 rounded shadow dark:shadow-xl/30 dark:shadow-purple-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2 rounded" />
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
              <p className="font-bold mt-2">R${product.price}</p>
              <hr className='mb-2' />
              <div className='flex justify-between'>
                <button
                  className="bg-gradient-to-r cursor-pointer flex items-center gap-2 from-purple-900 to-purple-700 hover:scale-105 duration-200 text-white py-1 px-2 rounded-full"
                  onClick={() => addToCart(product)}
                >
                  <FaShoppingCart /> Carrinho
                </button>
                <button
                  className="bg-gradient-to-r cursor-pointer flex items-center gap-2 from-green-900 to-green-700 hover:scale-105 duration-200 text-white py-1 px-2 rounded-full"
                  onClick={() => {
                    addToCart(product)
                    navigate("/checkout")
                  }}
                >
                  <FaMoneyBill1Wave /> Comprar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  )
}

export default AllProducts
