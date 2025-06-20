import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingBag } from 'react-icons/fa';
import { Order } from '../types/Order';
import { toast } from 'react-toastify';
import { getOrdersByEmail } from '../api/products';

const OrderHistoryPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem('email') || '';

  useEffect(() => {
    const email = localStorage.getItem('userEmail')
    if (!email) {
      toast.info('Nenhum e-mail encontrado. Faça uma compra para visualizar seus pedidos.')
      setLoading(false)
      return
    }

    getOrdersByEmail(email)
      .then(data => setOrders(data))
      .catch(() => toast.error('Erro ao buscar pedidos.'))
      .finally(() => setLoading(false))
  }, [email])

  return (
    <div className="pt-14 pb-12 px-10 dark:bg-gray-900 dark:text-white">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-purple-900 dark:text-purple-700">Histórico de Compras</p>
          <h1 className="text-3xl font-bold">Meus Pedidos</h1>
          <p className="text-xs text-gray-400">Acompanhe os pedidos realizados com seu e-mail.</p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Carregando pedidos...</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum pedido encontrado para este e-mail.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 dark:shadow-purple-400">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-bold text-lg">Pedido #{order.id.slice(-6)}</h2>
                  <FaShoppingBag className="text-purple-700" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Cliente: {order.customer}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Email: {order.email}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Total: R$ {order.totalPrice.toFixed(2)}</p>
                <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc ml-4">
                  {order.products.map((p, idx) => (
                    <li key={idx}>{p.name} - R${p.price.toFixed(2)} x {p.quantity}</li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-2">Realizado em: {new Date(order.createdAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
