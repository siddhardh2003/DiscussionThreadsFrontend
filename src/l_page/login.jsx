import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Login = ({handleLogin}) => {

    const [user, setUser] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {  
        let res;
        e.preventDefault();
        if (!user.email || !user.password) 
        {
            alert('Invalid Credentials');
        }
        else 
        {
            const { email, password } = user;
            res = await fetch('http://localhost:5000/login', 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify
                (
                    {email, password}
                )
            })
        }

        const data = await res.json();
        if (res.status === 400 || !data) 
        {
            alert('User Already Exists')
        }
        else 
        {
            handleLogin();
            navigate('/');
        }
        // handleLogin();
        // navigate('/');

    }


    return (
        <div className='flex flex-col h-screen'>
            <div className="c2 flex-grow  flex flex-col items-center justify-center gap-3 bg-gray-100">
                <div className='flex flex-col justify-center items-center w-[400px] h-2/3 bg-white'>
                    <p className='mb-2 text-xl font-semibold'>Sign In</p>
                    <div  method="POST" className='flex flex-col items-center justify-center  gap-6 w-full  p-6  h-2/3'>
                        <input type="text" name="email" placeholder="Email" className="border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} required />
                        <input type="password" name="password" placeholder="Password" className="border-2 border-neutral-400 h-10 p-2 w-full focus:outline-none" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} required />
                        <button type="submit" onClick={handleSubmit} name="fsubmit" className="border-1  w-full h-8 bg-neutral-600 text-white rounded-sm" >Sign In</button>
                        <div className="flex  w-full justify-between">
                            <span><Link >Forgot password?</Link></span>
                            <span><Link to={'/signup'}>Sign up</Link></span>
                        </div>
                        <div name="invalidname" className="invalid" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login