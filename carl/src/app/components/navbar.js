//'use client'
import Link from 'next/link'
//import useState from 'react'

function Navbar() { 
    const isOpen = false
    return ( 
        <header className="bg-blue-700 margin-0 padding-0">
            <div id="logo-container">
                <p>
                    Karl
                </p>
            </div>
            <div>
               <h2 >
                {isOpen?'Open':'closed'}
               </h2>
            </div>
            <nav>
                <ul className='flex flex-col gap-y-2 sm:flex-row sm:gap-x-4 sm:gap-y-2'>
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