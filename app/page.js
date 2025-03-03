'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [jokeId, setJokeId] = useState('');
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      // router.push('/login');        // here if it's un-commented then it'll use (login page) as well as the (status page of NextAuth) if the user isn't signed in
    }
  }, [status, router]);
  
  if (status === 'loading') {
    return <p className="text-center text-lg">Loading...</p>;
  }
  
  if (status === 'unauthenticated') {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-bold">You must be signed in to access this page.</h1>
        <button onClick={() => signIn()} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 hover:underline">
          Sign In
        </button>
      </div>
    );
  }
  
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className="bg-orange-300 text-white flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Get a Random Joke</h1>

        {/* separate div ke andar (overflow-hidden) and then (hover:scale-125) */}
        <div className="overflow-hidden">
          <input
            type="text"
            placeholder="Enter Joke ID (in numbers)"
            value={jokeId}
            onChange={(e) => setJokeId(e.target.value)}
            className="px-6 py-2 text-black items-center justify-center border-2 rounded duration-1000 border-blue-600 w-64 mb-4 hover:scale-125"
            />
        </div>

        {/* separate div ke andar (overflow-hidden) and then (hover:scale-125) */}
        <div className='overflow-hidden'>
          <button
            onClick={() => router.push(`/joke/${jokeId}`)}
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-orange-500 hover:scale-125 duration-100"
          >
            Get Joke
          </button>
        </div>
      </div>
    </div>
  );
}
