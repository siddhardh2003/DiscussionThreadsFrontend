import React from 'react'

function handler(callback) {
    let filter = {};
    
    {
        let arr = document.querySelectorAll('.csociety input');
        let temp = [];
        arr.forEach(item => {
            if (item.checked) {
                temp.push(item.value);
            }
        });
        if (temp.length !== 0) {
            filter.society = temp;
        }
    }

    {
        let arr = document.querySelectorAll('.cbranch input');
        let temp = [];
        arr.forEach(item => {
            if (item.checked) {
                temp.push(item.value);
            }
        });
        if (temp.length !== 0) {
            filter.branch = temp;
        }
    }


    {
        let arr = document.querySelectorAll('.cother input');
        let temp = [];
        arr.forEach(item => {
            if (item.checked) {
                temp.push(item.value);
            }
        });
        if (temp.length !== 0) {
            filter.other = temp;
        }
    }

    console.log(filter);
    callback(filter);
}

export default function Qfilter({ setfilter }) {

    return (
        <div>
            <br />
            <div className='qfilter ml-4'>

                <div className='flex justify-center font-semibold mb-2'>Society </div>
                
                <div className="csociety flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                    <div>
                        <input className='mr-3' id="First" type='checkbox' value='Technical'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='First'>Technical</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Second" type='checkbox' value='Cultural'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='Second'>Cultural</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Third" type='checkbox' value='Sports'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='Third'>Sports</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Fourth" type='checkbox' value='Hostel'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='Fourth'>Hostel</label>
                    </div>
                </div>

                <br />
                    <div className='flex justify-center font-semibold mb-2 mt-4'>BRANCH </div>

                    <div>

                        <div className="cbranch flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                            
                            <div>
                                <input className='mr-3' id="cse" type='checkbox' value='CSE'  onChange={() => handler(setfilter)}/>
                                <label htmlFor='cse'>CSE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="ece" type='checkbox' value='ECE' onChange={() => handler(setfilter)}/>
                                <label htmlFor='ece'>ECE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="eee" type='checkbox' value='EEE' onChange={() => handler(setfilter)}/>
                                <label htmlFor='eee'>EEE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="me" type='checkbox' value='ME' onChange={() => handler(setfilter)}/>
                                <label htmlFor='me'>ME</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="che" type='checkbox' value='CHE' onChange={() => handler(setfilter)}/>
                                <label htmlFor='che'>CHE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="mme" type='checkbox' value='MME' onChange={() => handler(setfilter)}/>
                                <label htmlFor='mme'>MME</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="bt" type='checkbox' value='BT' onChange={() => handler(setfilter)}/>
                                <label htmlFor='bt'>BT</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="ce" type='checkbox' value='CE' onChange={() => handler(setfilter)}/>
                                <label htmlFor='ce'>CE</label>
                            </div>
                    
                        </div>
                    </div>
                <br />

                <br />
                <div className='flex justify-center font-semibold mb-2'>OTHER </div>
   

                <div className="cother flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                    <div>
                        <input className='mr-3' id="academic" type='checkbox' value='Academic'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='academic'>Academic</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="placements" type='checkbox' value='Placements'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='placements'>Placements</label>
                    </div>
                </div>

            </div>
            <br />

        </div>
    )
}