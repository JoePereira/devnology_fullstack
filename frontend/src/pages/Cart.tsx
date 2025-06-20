import React from 'react'
import { useCart } from '../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handleClearCart = () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você realmente deseja esvaziar o carrinho?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, esvaziar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Esvaziado!', 'Seu carrinho foi esvaziado.', 'success')
        navigate('/produtos')
      }
    })
  }

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="min-h-100 p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Carrinho</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <li key={index} className="border p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="font-bold">R$ {item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>


          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={handleClearCart}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Esvaziar Carrinho
            </button>
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
