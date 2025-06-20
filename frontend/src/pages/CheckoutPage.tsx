import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductPayload } from '../types/ProductPayload';
import { OrderPayload } from '../types/OrderPayload';
import { submitOrder } from '../api/products';

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductPayload[]>([]);
  const [customer, setCustomer] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (location.state?.product) {
      setProducts([{ ...location.state.product, quantity: 1 }]);
    } else {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setProducts(cart);
    }
  }, [location.state]);

  const totalPrice = products.reduce((acc, p) => acc + p.price * (p.quantity || 1), 0);

  const handleSubmit = async () => {
    const order: OrderPayload = {
      customer,
      email,
      totalPrice,
      products: products.map(p => ({
        name: p.name,
        price: p.price,
        quantity: p.quantity || 1,
      })),
    };

    const success = await submitOrder(order);
    
    if (success) {
      localStorage.setItem('userEmail', email);
      localStorage.removeItem('cart');
      navigate('/');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Nome</label>
        <input
          type="text"
          value={customer}
          onChange={e => setCustomer(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <h2 className="font-bold">Resumo do Pedido</h2>
        <ul className="list-disc list-inside">
          {products.map((p, i) => (
            <li key={i}>{p.name} - R${p.price.toFixed(2)} x {p.quantity || 1}</li>
          ))}
        </ul>
        <p className="mt-2 font-bold">Total: R${totalPrice.toFixed(2)}</p>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-700 text-white px-4 py-2 rounded hover:scale-105 duration-200"
      >
        Finalizar Pedido
      </button>
    </div>
  );
};

export default CheckoutPage;