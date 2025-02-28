'use client';    // client side pr hooks(useEffect, useState) ka use krne ke liye 

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import JokeCard from '@/components/JokeCard';

export default function JokePage() {
  const { id } = useParams();
  
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    async function fetchJoke() {
      try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
        if (!response.ok) 
            throw new Error('Failed to fetch joke');

        const data = await response.json();
        setJoke(data);

      }
      catch(err) {
        setError(err.message);   // if there'll be any error then message'll set to error
      } 
      finally {
        setLoading(false);    // afterall we'll set setLoading to false when jokes fetched ..
      }

    }
    fetchJoke();
  }, [id]);

  if(loading) {
    return <h1 className="text-center text-lg pt-30 text-green-400 ">Loading joke..........</h1>;
  }
  if(error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <JokeCard joke={joke} />
        </div>
    </>
  );
}