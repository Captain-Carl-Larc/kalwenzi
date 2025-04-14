'use client'
import Link from 'next/link'
import { useState } from 'react';

function Navbar() { 
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  
    const openIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 font-extrabold text-gray-950">
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>
  
    // setIsMenuOpen(!isMenuOpen)
    
    return ( 
        <header className="bg-blue-700 margin-0 padding-0 flex justify-between h-16 items-center relative md:static">
            <div id="logo-container" className='pl-4'>
                <p className='font-bold text-3xl'>
                    Karl
                </p>
            </div>
            <div className='absolute bg-amber-300 md:static top-4 right-4 md:hidden font-extrabold'>               
                {
                   isMenuOpen?(
                    closeIcon
                   ):(
                    openIcon
                   )
                }               
            </div>
            <nav className='md:pr-4'>
                <ul className='hidden md:flex md:gap-x-4 '>
                    <li>
                        <Link
                            href={`/`}
                        >
                            Home
                        </Link>
                    </li>                   
                    <li>
                        <Link
                            href={`/about`}
                        >
                            About
                        </Link>
                    </li>                   
                    <li>
                        <Link
                            href={`/contact`}
                        >
                            Contact
                        </Link>
                    </li>                   
                    <li>
                        <Link
                            href={`/Blog`}
                        >
                            Blog
                        </Link>
                    </li>                   
                    <li>
                        <Link
                            href={`/Projects`}
                        >
                            Projects
                        </Link>
                    </li>                   
                </ul>
            </nav>
        </header>
     );
}

export default Navbar;