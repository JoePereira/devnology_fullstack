import { useEffect, useState } from 'react'
import { getAllProducts } from '../api/products'
import { Product } from '../types/Product'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts()
        setProducts(data)
      } catch (err) {
        setError('Erro ao carregar os produtos.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { products, loading, error }
}
