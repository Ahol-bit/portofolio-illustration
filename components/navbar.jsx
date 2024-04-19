'use client'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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



  return (
    <>
      <nav className={`${scrolled ? 'bg-black border-b text-black' : 'text-white'} fixed w-full top-0 border-gray-600 z-[9999999] transition-all duration-620 ease-in-out`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-9999">
          <a href="/" className="flex items-start relative lg:right-[1em]">
            <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white mt-4">hora<span className='font-blanka'>Rux</span></span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col gap-4 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-azadliq text-2xl tracking-widest">
              <li>
                <a href="/" className={`block py-2 px-3 ${nextPath === '' ? 'text-yellow-300' : 'text-white'} md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className={`block py-2 px-3 text-gray-900 ${nextPath === 'about' ? 'text-yellow-300' : 'text-white'} md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</a>
              </li>
              <li>
                <a href="/works" className={`block py-2 px-3 text-gray-900 ${nextPath === 'works' ? 'text-yellow-300' : 'text-white'} md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Works</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
