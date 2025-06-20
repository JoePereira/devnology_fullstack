import React from 'react'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import TopProducts from '../components/TopProducts/TopProducts'

const Home = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-white'>
        <Hero/>
        <Products/>
        <TopProducts/>
    </div>
  )
}

export default Home