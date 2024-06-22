import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar({pid,isLoggedin,setIsLoggedin}) {
    // let homeflag = 0, aboutflag=0, loginflag = 0 
    const [homeflag, setHomeflag] = useState(0);
    const [aboutflag, setAboutflag] = useState(0);
    const [loginflag, setLoginflag] = useState(1);

    let homecss = (homeflag == 1) ? 'border-b-2 border-b-blue-500' : ''
    let aboutcss = (aboutflag == 1) ? 'border-b-2 border-b-blue-500' : ''
    let logincss = (loginflag == 1) ? 'border-b-2 border-b-blue-500' : ''
    let handle=()=>
    {
        setHomeflag(0), 
        setAboutflag(0), 
        setLoginflag(0)
        setIsLoggedin(false);
        navigate('/');
    }
    return (
        <div>
            <nav className="shadow w-screen bg-gray-800">
                <div className="container flex items-center justify-center p-6 mx-auto  capitalize text-gray-300">

                    <Link to="/" className={`${homecss} text-gray-200  active:border-b-2 active:border-blue-500 mx-1.5 sm:mx-6 hover:border-blue-500 hover:border-b-2`} id='home' onClick={() => { setHomeflag(1), setAboutflag(0), setLoginflag(0) }}>
                        Home
                    </Link>

                    <Link to="/about" className={`${aboutcss} border-b-2 border-transparent  hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 active:border-b-2 active:border-blue-500`} onClick={() => { setHomeflag(0), setAboutflag(1), setLoginflag(0) }}>About</Link>


                    {
                    (!isLoggedin)?(<Link to='/login' className={`${logincss} border-transparent  hover:text-gray-200 hover:border-blue-500 active:border-b-2 hover:border-b-2 active:border-blue-500 mx-1.5 sm:mx-6`} onClick={() => { setHomeflag(0), setAboutflag(0), setLoginflag(1) }}>Login</Link>
                    ):(<Link  className={`border-transparent  hover:text-gray-200 hover:border-blue-500 active:border-b-2 hover:border-b-2 active:border-blue-500 mx-1.5 sm:mx-6`} onClick={() => { handle() }}>Logout</Link>
                    )}
                    <Link to={`/profile/${pid}`} onClick={() => { setHomeflag(0), setAboutflag(0), setLoginflag(0) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Link> 

                    <div>
                        {/* <div class="relative flex  flex-col justify-center overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 p-6 ">
                            <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8 border-2 border-black shadow-xl ring-1 ring-gray-900/5 ">
                                <div class="mx-auto "> */}


                                    {/* <form action="" className="absolute right-2 top-3">
                                        <input type="search"
                                            className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4 border-gray-800 " />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-white px-3.5 peer-focus:border-white peer-focus:stroke-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </form> */}


                                {/* </div>
                            </div>
                        </div> */}
                    </div>

                </div>

            </nav>
        </div>
    )
}

export default Navbar