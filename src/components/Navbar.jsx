import React from 'react'
import { Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <Outlet />
    </>
  )
}


// const toggleClass = (className) => {
//   switch (className) {
//     case 'menuOpen':
//       setIsMenuToggled(!isMenuToggled)
//       break;
  
//     case 'products':
//       setIsMoreProductsInfo(!isMoreProductsInfo)
//       break;

//     case 'weddings':
//       setIsMoreWeddingsInfo(!isMoreWeddingsInfo)
//       break;

//     default:
//       break;
//   }
// }