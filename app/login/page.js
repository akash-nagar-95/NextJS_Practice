'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(isLoggedIn){
            router.push('/');     // if the user is loggedIn then redirecting it to the home page so that he can get the joke
        }
    },[router]);

    const handleLogin = (e) => {
        e.preventDefault();
        if(email && password){
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            router.push('/')    // redirecting to home page after login
        }
        else{
            alert("Invalid credentials ... , TRY AGAIN")
        }

    };
  return (
    <div className='flex items-center justify-center min-h-screen background ' >
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
            <h2 className='text-2xl font-bold text-center mb-4' >Login here ...</h2>
            <form onSubmit={handleLogin} className='flex flex-col' >
                <input 
                    type="text"
                    placeholder='enter your name here'
                    className='p-2 mb-3 border rounded'
                />
                <input 
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-2 mb-3 border rounded'
                    required
                />
                <input 
                    type="text" 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-2 mb-3 border rounded'
                    required
                />

                <button 
                    type='submit'
                    className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition hover:underline hover:text-black '
                >
                    Login
                </button>
            </form>

        </div>
      
    </div>
  )
};


