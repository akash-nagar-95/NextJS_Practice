'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nextJSLogo from '@/public/next.svg'
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn( localStorage.getItem('isLoggedIn'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <div className='bg-blue-300 h-10 flex items-center flex-row justify-between px-5' >
      <div>
        <Image src={nextJSLogo} alt='application logo' className='size-20' />
      </div>

      <nav className='text-blue-600 flex flex-row gap-2'>
        <div className='overflow-hidden' >
          <Link href='/' legacyBehavior>
            <a className=' hover:text-white px-3 py-1 rounded transition-all duration-200 hover:scale-110 hover:underline'  >Home</a>
          </Link>
          <Link href='/about' legacyBehavior>
            <a className=' hover:text-white px-3 py-1 rounded transition-all duration-200 hover:scale-110 hover:underline' >About us</a>
          </Link>
          <Link href='/contact' legacyBehavior>
            <a className='hover:text-white px-3 py-1 rounded transition-all duration-200 hover:scale-110 hover:underline'>Contact us</a>
          </Link>
          <span>
            {
              isLoggedIn ? (
                <Link href='/login' legacyBehavior >
                  <a className=' hover:text-black px-3 py-1 rounded transition-all duration-200 hover:underline' onClick={handleLogout}>Log Out</a>
                </Link>
              ) : (
                <Link href='/login' legacyBehavior >
                  <a className=' hover:text-black px-3 py-1 rounded transition-all duration-200 hover:underline' >LogIn</a>
                </Link>
              )
            }
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
