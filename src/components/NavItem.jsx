import React from 'react'

export const NavItem = ({href, label, colorText}) => {
  return (
    <li style={{ listStyleType: 'none' }}>
        <a href={href} style={{ color: colorText}}>
            {label}
        </a>
    </li>
  )
}


// ToDo: Comprobarlo esta tarde a ver si así funciona -> Al entrar desde otra página que me lleve bien hacia donde quiero ir

// NavItem.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export const NavItem = ({ href, label, colorText, isSectionLink = false }) => {
//     const navigate = useNavigate();
    
//     const handleClick = (event) => {
//         event.preventDefault();

//         // Si es un enlace de sección y no estamos ya en la página de inicio, navegar a '/'
//         if (isSectionLink && window.location.pathname !== '/') {
//             navigate('/'); // Navega a la página de inicio
//             // Después de un breve retraso, desplázate a la sección.
//             setTimeout(() => {
//                 const section = document.querySelector(href);
//                 if (section) section.scrollIntoView({ behavior: 'smooth' });
//             }, 100);
//         } else {
//             // Navegación normal para enlaces que no son de sección
//             navigate(href);
//         }
//     };

//     return (
//         <li style={{ listStyleType: 'none' }}>
//             <a href={href} onClick={handleClick} style={{ color: colorText }}>
//                 {label}
//             </a>
//         </li>
//     );
// };

