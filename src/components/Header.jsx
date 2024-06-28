import React, { useInsertionEffect } from 'react';
import assets from '../assets/assets';
import { useInterSectionObserver } from '../Hooks/observer';

export default function Header(props) {

  const {pageNav} = props

  const navItems = [
    { name: 'home', href: '#home',   className : pageNav == "home" ? "text-black after:w-full" : '' },
    { name: 'skills', href: '#skills', className : pageNav == "skills" ? "text-black after:w-full" : '' },
    { name: 'about', href: '#about',  className : pageNav == "about" ? "text-black after:w-full" : ''},
  ];

  return (
    <div className={` opacity-0 select-none sticky md:fixed  font-poppins min-w-full  top-0 justify-center left-0 z-10 bg-transparent backdrop-blur-lg animate-[upToDown_1s_ease_forwards]`}>
      <header className='header flex justify-between pr-14 pl-10 p-5 items-center h-34 w-full max-md:border-solid max-md:border-4'>
      <div className='logo'>
        {assets.headerLogo}
      </div>
      <nav className='flex justify-center items-center'>
        <ul className="ul inline-flex space-x-8 text-l mr-14 capitalize relative max-sm:hidden">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <a href={item.href} className={`${item.className} drop-shadow-whiteshadow hover:text-black after:rounded-md after:content-[''] after:absolute after:right-1/2 after:bottom-[-10px] after:bg-blue-700 after:w-0 hover:after:w-full after:h-1 after:translate-x-[50%] after:transition-width after:duration-300`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center'>
          <a href="#connect"><button onClick={() => {
          }} className=' hover:bg-blue-700 hover:text-white shadow-whiteshadow bg-blue-600 rounded-full w-28 h-10 text-slate-100'>Connect</button></a>
        </div>
      </nav>
    </header>
    </div>
  );
}
