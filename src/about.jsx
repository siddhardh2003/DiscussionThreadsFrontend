import React from 'react'
import './about.css'
// border-2 border-black

function About() {
    return (
        <div className='w-full mt-4 flex flex-col justify-center align-middle  gap-6 mb-8'>
            <div className='pb-24 w-full  flex flex-row justify-center m-auto mb-32 ' >
                <span className='absolute flex z-10 font-bold text-6xl bottom-1/2 font-sans antialiased text-white tracking-wider'>Discussion Threads</span>
                <div className='relative w-9/12 bg-center bg-cover about-design'>
                <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                {/* <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="undefined about_us_5 component preview" className='image_design w-9/12' /> */}
                </div>
            </div>


            <div className='w-9/12 flex flex-row justify-center m-auto mt-16  pb-8'>
                <div className="w-full mb-10 ">
                    <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                        <span className="text-sm text-gray-800 uppercase dark:text-gray-400">Discussion Threads</span>
                        <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl ">
                            What we provide?
                        </h1>
                    </div>
                    <p className=" text-base leading-7 text-gray-500 dark:text-gray-400">
                        Our online discussion threads platform offers a dynamic and engaging space for users to exchange ideas, share knowledge, and foster meaningful conversations. With a user-friendly interface, our platform facilitates seamless communication and collaboration among participants. Users can create and join discussion threads on a wide range of topics, allowing for diverse and inclusive conversations. Our emphasis on user interaction and community building sets us apart, creating an environment where individuals can connect, learn, and contribute to vibrant online discussions. Whether it's for educational purposes, professional networking, or casual conversations, our platform provides a versatile and accessible space for users to explore and engage in the exchange of thoughts and ideas.
                    </p>
                </div>
            </div>


            <div className="flex  w-9/12  flex-row  align-middle m-auto justify-between mt-32 pb-12">
                <div className="w-full px-4 mb-6 text-center ">
                    <div className="p-6 bg-white ">
                        <span className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="m-auto bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                            </svg>
                        </span>
                        <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">Knowledge Sharing
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 mb-6  text-center ">
                    <div className="p-6 ">
                        <span className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi m-auto bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            </svg>
                        </span>
                        <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">Community Building
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 mb-6 text-center ">
                    <div className="p-6 ">
                        <span className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="m-auto bi bi-list-task" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                                <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
                            </svg>
                        </span>
                        <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">Query Resolving
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 mb-6  text-center ">
                    <div className="p-6">
                        <span className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="m-auto bi bi-calendar2-check" viewBox="0 0 16 16">
                                <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </span>
                        <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">Latest Events
                        </p>
                    </div>
                </div>
            </div>


            {/* About team */}
            <div className='teamDesign mt-32 border-2 border-black w-9/12 p-4 pr-8 pl-8 pb-8 m-auto bg-blue-950 text-white rounded-lg'>
                <p className='mt-8 mb-24 text-center text-4xl font-semibold '>Our team</p>
                <div className='flex flex-col justify-around  mb-14'>
                    <div className='flex flex-row mb-16'>

                        <div className='text-md text-center w-8/12 m-auto font-mono '>
                            Siddhardh Kaluva
                            <p>ks21csb0b25@student.nitw.ac.in</p>
                        </div>
                        <div className='text-md text-center w-8/12 m-auto font-mono'>
                            Pavan Rushik Ponugoti
                            <p>pp21csb0b42@student.nitw.ac.in</p>
                        </div>
                    </div>

                    <div className='flex flex-row'>

                        <div className='text-md text-center w-8/12 m-auto font-mono'>
                            Jaiditya Beeraka
                            <p>jb21csb0b23@student.nitw.ac.in</p>
                        </div>
                        <div className='text-md text-center w-8/12 m-auto font-mono'>
                            P S Sai Ratan
                            <p>ps21csb0b39@student.nitw.ac.in</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default About