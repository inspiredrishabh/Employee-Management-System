import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        // Assume handleLogin returns a success boolean
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl bg-gray-800 shadow-lg'>
                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-xl placeholder:text-gray-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 transition-all' 
                        type="email" 
                        placeholder='Enter Your Email' 
                        style={{ width: '300px' }} 
                    />
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-xl placeholder:text-gray-500 mt-3 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 transition-all' 
                        type="password" 
                        placeholder='Enter password' 
                        style={{ width: '300px' }} 
                    />
                    <button 
                        className='text-white outline-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-xl mt-5 hover:bg-emerald-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 transition-all' 
                        type="submit"
                        style={{ width: '300px' }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
