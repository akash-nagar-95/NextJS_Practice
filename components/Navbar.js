import React from 'react';
import Image from 'next/image';
import nextLogo from '@/public/next.svg'

const Navbar = () => {
  return (
    <div className='bg-white h-10 items-center flex flex-row justify-between px-5' >
      <div>
        <Image src={nextLogo} alt='application logo' className='size-20' />
      </div>

      <ul className='text-blue-600 flex flex-row gap-4 justify-center py-1 group cursor-pointer '>
        <li className=' hover:text-xl hover:bg-blue-600 hover:text-black hover:underline' >Home</li>
        <li className=' hover:text-xl hover:bg-blue-600 hover:text-black hover:underline' >About us</li>
        <li className=' hover:text-xl hover:bg-blue-600 hover:text-black hover:underline' >Contact us</li>
      </ul>
    </div>
  )
}

export default Navbar;
