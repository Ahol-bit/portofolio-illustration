'use client'
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function Navbars() {
  const path = usePathname();
  const parts = path.lastIndexOf('/');
  const nextPath = path.slice(parts + 1)
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);



  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  return (
    <>
      <nav ref={navbarRef} className={`${scrolled ? 'scrolled md:px-5 px-2' : 'no-scrolled'} font-dela fixed w-full top-0 border-gray-600 z-[9999999] transition-all duration-620 ease-in-out`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10 z-9999">
          <a href="/" className="flex items-start relative lg:right-[1em] span-home md:text-3xl text-xl">
            <div className=''>
             <span className="self-center font-bold whitespace-nowrap dark:text-white mt-4">hora<span className='font-blanka'>Rux</span></span>
            </div>
            <div aria-hidden className='span-glitch absolute '>
              <span className="self-center font-bold whitespace-nowrap dark:text-white mt-4">hora<span className='font-blanka'>Rux</span></span>
            </div>
          </a>
          <button 
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            aria-controls="navbar-default" 
            aria-expanded={`${isOpen ? 'block' : 'hidden'}'}`}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`${isOpen ? 'right-[10px] top-[14px]' : 'right-[-1000px]'} w-full md:right-[10px] relative  md:w-auto transition-all duration-700`} id="navbar-default">
            <ul className="font-medium flex flex-col gap-10 p-4 md:p-0 md:mt-4 md:w-full w-[1000px] md:bg-transparent bg-gray-800 border-b-[2px] border-l-[2px] border-yellow-300 mt-[30px] md:flex-row md:space-x- md:border-0 font-azadliq text-2xl tracking-widest">
              <li>
                <a href="/" className={`block py-2 px-3 ${nextPath === '' ? 'text-white' : 'text-gray-500'} transition-all duration-500 ease-in-out md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white span-home`} aria-current="page">
                  <span>Home</span>
                  <span aria-hidden className='span-glitch nav-span absolute'>Home</span>
                </a>
              </li>
              <li>
                <a href="/about" className={`block py-2 px-3 ${nextPath === 'about' ? 'text-white' : 'text-gray-500'} transition-all duration-500 ease-in-out md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white span-home`}>
                  <span>About</span>
                  <span aria-hidden className='span-glitch nav-span absolute'>About</span>
                  
                </a>
              </li>
              <li>
                <a href="/works" className={`block py-2 px-3 ${nextPath === 'works' ? 'text-white' : 'text-gray-500'} transition-all duration-500 ease-in-out md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent span-home`}>
                  <span>Works</span>
                  <span aria-hidden className='span-glitch nav-span absolute'>Works</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
