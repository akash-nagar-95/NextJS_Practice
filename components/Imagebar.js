import Image from 'next/image';
import ImageBar from '@/public/next.svg';

const Imagebar = () => {
  return (
    <div className='overflow-hidden mx-auto rounded-3xl bg-red-600 ' >
      <Image className='size-40 bg-blue-400 p-6 hover:scale-125 ' src={ImageBar} alt='Picture of Next.js' />
    </div>
  )
}

export default Imagebar
