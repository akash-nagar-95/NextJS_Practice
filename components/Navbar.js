'use client';

import Image from 'next/image';
import Link from 'next/link';
import nextJSLogo from '@/public/next.svg'
import { useSession, signIn, signOut } from 'next-auth/react';


const Navbar = () => {
  const { data: session } = useSession();    // getting the session information from NextAuth

  return (
    <div className='bg-blue-300 h-10 flex items-center flex-row justify-between px-5' >
      <div>
        <Image src={nextJSLogo} alt='application logo' className='size-20' />
      </div>
      
      <div >
        <p className='font-bold text-2xl text-white' >Random Jokes Fetcher</p>
      </div>

      <nav className='text-blue-600 flex flex-row gap-4'>
        <div className='overflow-hidden' >
          <Link href='/' className=' hover:text-white px-3 py-1 rounded transition-all duration-200 hover:scale-110 hover:underline'> Home</Link>
          <Link href='/about' className=' hover:text-white px-3 py-1 rounded transition-all duration-200 hover:scale-110 hover:underline'>About us</Link>
          <Link href='/contact' className=' hover:text-white px-3 py-1 rounded transition-all duration-200 hover:scale-110 hover:underline'>Contact us</Link>

          <span>
            {
              session ? (
                <button className="bg-red-500 text-white px-2 py-1 rounded-xl transition-all duration-200 hover:bg-red-700"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              ) : (
                <button className="bg-green-500 text-white px-3 py-1 rounded-xl transition-all duration-200 hover:bg-green-700"
                  onClick={() => signIn()}
                >
                  Sign In
                </button>
              )
            }
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
