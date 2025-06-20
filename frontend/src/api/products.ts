import axios from 'axios'
import { Product } from '../types/Product'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const API_BASE_URL = 'http://localhost:3000'

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_BASE_URL}/products`)
  return response.data
}

export const submitOrder = async (order: {
  customer: string
  email: string
  totalPrice: number
  products: { name: string; price: number; quantity: number }[]
}): Promise<boolean> => {
  try {

    const result = await Swal.fire({
      title: 'Confirmar Pedido',
      text: `Total: R$ ${order.totalPrice.toFixed(2)}. Deseja prosseguir?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim, confirmar',
      cancelButtonText: 'Cancelar'
    })

    if (!result.isConfirmed) {
      toast.info('Pedido cancelado')
      return false
    }

    await axios.post(`${API_BASE_URL}/orders`, order)
    toast.success('Pedido realizado com sucesso!')
    return true
  } catch (error) {
    
    toast.error('Erro ao enviar pedido.')
    return false
  }
}

export const getOrdersByEmail = async (email: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/by-email?email=${email}`)
    return response.data
  } catch (error) {
    toast.error('Erro ao buscar pedidos.')
    return []
  }
}
