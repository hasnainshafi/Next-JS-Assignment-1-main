"use client";
import Link from 'next/link'
import { useState } from 'react';
export default function Navbar(){
    const [isClick, setisClick] = useState(false);
    const toggleNavbar = () :void =>{
        setisClick(!isClick)
    }
    return (
        <nav className='bg-black'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className="flex-shrink-0">
                            <a href="/" className='text-white'>Logo</a>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <Link href='/' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Home</Link>
                            <Link href='/about' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>About</Link>
                            <Link href='/services' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Service</Link>
                            <Link href='/contact' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Contact</Link>
                            <Link href='/login' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Login</Link>
                        </div>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                            {isClick ? (
                                <svg className='h-6 w-6' xmlns='https://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
                                </svg>
                            ) : (
                                <svg className='h-6 w-6' xmlns='https://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 6h16M4 12h16m-7 6h7' />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 space-y-1 sm:px-3'>
                        <Link href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Home</Link>
                        <Link href='/about' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>About</Link>
                        <Link href='/services' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Service</Link>
                        <Link href='/contact' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Contact</Link>
                        <Link href='/login' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Login</Link>
                    </div>
                </div>
            )}
        </nav>
        
    );
}