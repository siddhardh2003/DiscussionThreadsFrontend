import React from 'react'

function handler(setfilter,setbranchFilter) {
    let filter = [];
    let branchFilter=[];
    
    {
        let arr = document.querySelectorAll('.csociety input');
        arr.forEach(item => {
            if (item.checked) {
                filter.push(item.value);
            }
        });
    }

    {
        let arr = document.querySelectorAll('.cbranch input');
        arr.forEach(item => {
            if (item.checked) {
                branchFilter.push(item.value);
            }
        });
    }
    {
        let arr = document.querySelectorAll('.cother input');
        arr.forEach(item => {
            if (item.checked) {
                filter.push(item.value);
            }
        });
    }

    console.log(filter);
    console.log(branchFilter);
    setfilter(filter);
    setbranchFilter(branchFilter);
}

export default function Qfilter({ setfilter,setbranchFilter }) {

    return (
        <div>
            <br />
            <div className='qfilter ml-4'>

                <div className='flex justify-center font-semibold mb-2'>Society </div>
                
                <div className="csociety flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                    <div>
                        <input className='mr-3' id="First" type='checkbox' value='Technical'  onChange={() => handler(setfilter,setbranchFilter)}/>
                        <label htmlFor='First'>Technical</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Second" type='checkbox' value='Cultural'  onChange={() => handler(setfilter,setbranchFilter)}/>
                        <label htmlFor='Second'>Cultural</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Third" type='checkbox' value='Sports'  onChange={() => handler(setfilter,setbranchFilter)}/>
                        <label htmlFor='Third'>Sports</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Fourth" type='checkbox' value='Hostel'  onChange={() => handler(setfilter,setbranchFilter)}/>
                        <label htmlFor='Fourth'>Hostel</label>
                    </div>
                </div>

                <br />
                <div className='flex justify-center font-semibold mb-2 mt-4'>BRANCH </div>

                <div className="flex bg-white rounded-xl" >
                        <div className="cbranch flex flex-col shadow-md  gap-4 p-4 bg-white" style={{ width: '50%' }}>
                            <div>
                                <input className='mr-3' id="cse" type='checkbox' value='CSE' onChange={() => handler(setfilter,setbranchFilter)}/>
                                <label htmlFor='cse'>CSE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0' id="ece" type='checkbox' value='ECE' onChange={() => handler(setfilter,setbranchFilter)}/>
                                <label htmlFor='ece'>ECE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0' id="eee" type='checkbox' value='EEE' onChange={() => handler(setfilter,setbranchFilter)}/>
                                <label htmlFor='eee'>EEE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0' id="me" type='checkbox' value='ME' onChange={() => handler(setfilter,setbranchFilter)}/>
                                <label htmlFor='me'>ME</label>
                            </div>
                        </div>
                        <div className="cbranch flex flex-col shadow-md  gap-4 p-4 bg-white" style={{ width: '50%' }}>
                            <div>
                                <input className='mr-3 mt-0' id="che" type='checkbox' value='CHE' onChange={() => handler(setfilter,setbranchFilter)}/>
                                <label htmlFor='che'>CHE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0' id="mme" type='checkbox' value='MME' onChange={() => handler(setfilter,setbranchFilter)}/>
                                <label htmlFor='mme'>MME</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0' id="bt" type='checkbox' value='BT' onChange={() => handler(setfilter,setbranchFilter)}/>
                                <label htmlFor='bt'>BT</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0' id="ce" type='checkbox' value='CE' onChange={() => handler(setfilter,setbranchFilter)}/>
                                <label htmlFor='ce'>CE</label>
                            </div>   
                        </div>
                    </div>

                    
                <br />

                <br />
                <div className='flex justify-center font-semibold mb-2'>OTHER </div>
   

                <div className="cother flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                    <div>
                        <input className='mr-3' id="academic" type='checkbox' value='Academic'  onChange={() => handler(setfilter,setbranchFilter)}/>
                        <label htmlFor='academic'>Academic</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="placements" type='checkbox' value='Placements'  onChange={() => handler(setfilter,setbranchFilter)}/>
                        <label htmlFor='placements'>Placements</label>
                    </div>
                </div>

            </div>
            <br />

        </div>
    )
}