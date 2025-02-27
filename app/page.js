'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Imagebar from '@/components/Imagebar';

export default function HomePage() {
  const [jokeId, setJokeId] = useState('');
  const router = useRouter();

  return (
    <>
      
      <div>
        <Navbar />
      </div>
      
      <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Get a Random Joke</h1>


        {/* separate div ke andar (overflow-hidden) and uske andar (hover:scale-125) */}

        <div className="overflow-hidden">
          <input type="text" placeholder="Enter Joke ID (in numbers)" value={jokeId} onChange={(e) => setJokeId(e.target.value)} className="px-6 py-2 text-black items-center justify-center border-2 rounded duration-1000 border-blue-600 w-64 mb-4 hover:scale-125" />
        </div>
        
        {/* separate div ke andar (overflow-hidden) and then (hover:scale-125) */}

        <div className='overflow-hidden' >
          <button onClick={() => router.push(`/joke/${jokeId}`)} className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-orange-500 hover:scale-125 duration-100 " >
            Get Joke
          </button>
        </div>
      </div>

      <div className='flex flex-row items-center bg-slate-600  ' >
        <Imagebar />
      </div>
    </>
  );
}