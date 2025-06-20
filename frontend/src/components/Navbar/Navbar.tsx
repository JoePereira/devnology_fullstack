import React from 'react';
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: "Início",
    link: "/"
  },
  {
    id: 2,
    name: "Todos Produtos",
    link: "/produtos"
  },
  {
    id: 3,
    name: "Carrinho",
    link: "/carrinho"
  },
  {
    id: 4,
    name: "Historico de Compras",
    link: "/historico"
  },
]

const Navbar = () => {
  return (
<div className='duration-200 relative z-40 shadow-md'>
  {/* Upper Navbar */}
  <div className='bg-purple-950/30 dark:bg-gray-900  py-2 sm:py-0'>

    <div className='px-7 py-4 flex justify-between items-center'>

      <div>
        <a href="#">
          <img src={Logo} alt="logo" className='w-30 uppercase' />
        </a>
      </div>

      <div className='flex justify-between items-center gap-4'>
        <div className='relative group hidden sm:block'>
          <input 
            type="text" 
            placeholder='Pesquisar'
            className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-purple-600 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600'
          />
          <IoMdSearch 
            className='text-gray-500 group-hover:text-purple-600 absolute top-1/2 -translate-y-1/2 right-3 dark:text-gray-300'
          />
        </div>

        <a
          className='bg-gradient-to-r from-purple-600 to-purple-900 dark:from-purple-800 dark:to-purple-950 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
          href='/carrinho'
        >
          <span
            className='group-hover:block hidden transition-all duration-200'
          >
            Carrinho
          </span>
          <FaCartShopping 
            className='text-xl text-white drop-shadow-sm cursor-pointer'
          />
        </a>

        <DarkMode />
      </div>

    </div>

  </div>

  {/* Lower Navbar */}
  <div className='flex justify-center dark:bg-purple-900 '>

    <ul className='sm:flex hidden items-center gap-4'>
      {Menu.map((data) => (
        <li key={data.id}>
          <a 
            href={data.link}
            className='inline-block px-4 hover:text-purple-700 dark:text-white dark:hover:text-purple-300 duration-200 font-bold'
          >{data.name}</a>
        </li>
      ))}
    </ul>

  </div>
</div>

  )
}

export default Navbar