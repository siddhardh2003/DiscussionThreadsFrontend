import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function questioncard({ data, rule, pid }) {

    let margincss = (rule==1)?'':'mt-6';

    return (
        <Link className={(rule == 1) ? 'apageq' : 'qoverall container-fluid transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'} style={{ pointerEvents: (rule == 1) ? 'none' : '' }} to={{ pathname: `/ans/${data._qid}/${data._pid}` }} >
            <div className={`flex flex-row  rounded-sm justify-between bg-white z-10 bg-clip-border text-gray-700 shadow-md ${margincss}`}>
                <div className="p-6">
                    <div className='flex flex-col w-full'>
                        <h6 className="mb-0 text-md block font-sans leading-relaxed tracking-normal  antialiased">
                            <Link to={`/profile/${data.bywhom}`} className='qname'>
                                {data.name}
                            </Link>
                        </h6>
                        <span className='mr-2 mb-2 text-xs'>
                            {`${data.year}, ${data.branch}, ${data.section}`}
                        </span>
                    </div>

                    <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {data.question}
                    </h4>
                    <div className='flex flex-row justify-between mt-4'>

                        <div className='mr-2 text-xs flex flex-col content-center text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                            </svg>
                            {data.visits}
                        </div>

                        {/* <span> */}
                        {/* #mess */}
                        {/* </span> */}
                    </div>

                    {/* <a className="inline-block" href="#">
                    <button
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-0 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </a> */}
                </div>
                <div className='p-6 flex flex-col justify-between'>
                    <div className='inline-blocki text-[12px] w-[60px]'>
                        {`${data.time.date} ${data.time.month} ${data.time.year}`}
                        {/* 27-OCT-2023 */}
                    </div>
                    <div className='ml-6 text-xs flex flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                        </svg>{data.answers}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default questioncard