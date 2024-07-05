import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom'


function questioncard({ rule ,data }) {
    let dateObject = new Date(data.time);
    let day = dateObject.getUTCDate();
    let month = dateObject.getUTCMonth() + 1;
    let year = dateObject.getUTCFullYear();
    let formattedDay = day < 10 ? '0' + day : day;
    let formattedMonth = month < 10 ? '0' + month : month;
    let formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    const navigate = useNavigate();
    let margincss = (rule==1)?'':'mt-6';
    const incrementViews = async (qid) => {
        console.log("in increment Views");
        await fetch(`/api/addView/?_id=${qid}`, {
          method: "PUT"
        });
      };

    
    let handleViewQuestion=async (data)=>{
        incrementViews(data._id);
        console.log(data._id);
        navigate(`/${data._id}`);
    }

    return (
        <div className={(rule == 1) ? 'apageq' : 'qoverall container-fluid transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-103 duration-300'} style={{ pointerEvents: (rule == 1) ? 'none' : ''  }} onClick={()=>{handleViewQuestion(data)}}   >
            <div className={`flex flex-row  rounded-sm justify-between bg-white z-10 bg-clip-border text-gray-700 shadow-md ${margincss}`}  style={{ borderRadius: '20px' }}>
                <div className="p-6">
                    <div className='flex flex-col w-full'>
                        <h6 className="mb-0 text-md block font-sans leading-relaxed tracking-normal  antialiased">
                            <Link /*to={`/profile/${data.bywhom}`}*/ className='qname ' style={{marginBottom:'5px'}}>
                                {data.byWhom}
                            </Link>
                        </h6>
                    </div>

                    <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {data.question}
                    </h4>
                    <div className='flex flex-row justify-between mt-4'>

                        <div className='mr-2 text-xs flex flex-col content-center text-center' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                            </svg>
                            {data.visits}
                        </div>
                    </div>
                </div>
                <div className='p-6 flex flex-col justify-between'>
                    <div className=''>
                        {formattedDate}
                    </div>
                    <div className='ml-6 text-xs flex flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                        </svg>{data.answers.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default questioncard