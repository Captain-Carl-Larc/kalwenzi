'use client'
import Link from 'next/link'
import { useState } from 'react';

function Navbar() { 
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-white">
    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  
    const openIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 font-extrabold text-white">
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>

    const handleMenuToggle = () =>{
        console.log('the menu is',isMenuOpen);
        setIsMenuOpen(!isMenuOpen)
        console.log('the menu is now',isMenuOpen);        
    }
    const closeMenu = ()=>{
        setIsMenuOpen(false)
    }
  
    // setIsMenuOpen(!isMenuOpen)
    
    return ( 
        <header className={`bg-blue-700 margin-0 padding-0 flex flex-col   min-h-12 md:flex-row md:justify-between ${isMenuOpen?'gap-y-2 ':'gap-y-0'}`}>
            <div id="logo-container" className='flex justify-between p-4 items-center '>
                <p className='font-bold text-3xl'>
                    Karl
                </p>
                <div className={'md:hidden font-extrabold'} onClick={handleMenuToggle}>               
                    {
                    isMenuOpen?(
                        closeIcon
                    ):(
                        openIcon
                    )
                    }               
                </div> 
            </div>            
            <ul onClick={closeMenu} className={`bg-blue-500 md:bg-blue-700 pl-2 ${isMenuOpen?'flex flex-col ':'hidden'} md:flex md:gap-x-4 md:items-center md:justify-center md:pr-4`} >
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
                        href={`/blog`}
                    >
                        Blog
                    </Link>
                </li>                   
                <li>
                    <Link
                        href={`/projects`}
                    >
                        Projects
                    </Link>
                </li>                   
            </ul>            
        </header>
     );
}

export default Navbar;