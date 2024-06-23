import React from 'react'



function handler(callback) {
    let arrange = {};
    let arr = document.querySelectorAll('input[type="radio"]:checked');
    for (let item of arr) 
    {
        let name = item.name;
        let value = item.value;
        if (value !== "None") 
        {
            arrange[name] = value;
            break; 
        }
    }
    console.log(arrange);
    callback(arrange);
}




function Qarrange({setarrange}) {

    return (
        <div className='qpagesec3  w-11/12 mr-4 mt-4'>
            <div className='Order  flex flex-col'>

                <div className='qarrange'>
                    <div className='flex justify-center font-semibold mb-2'>BY TIME </div>

                    <div className="flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                        <div>
                            <label><input className='mr-3' id="latest" type='radio' name="time" value="Latest" onChange={()=>{handler(setarrange)}}/>Latest</label>
                        </div>
                        <div>
                            <label><input className='mr-3 mt-0' id="oldest" type='radio' name="time" value="Oldest" onChange={()=>{handler(setarrange)}}/>Oldest</label>
                        </div>
                        <div>
                            <label><input className='mr-3 mt-0'  type='radio' name="time" value="None" onChange={()=>{handler(setarrange)}}/>None</label>
                        </div>
                    </div>

                    <br />

                    <div className='flex justify-center font-semibold mb-2'>BY ANSWERS </div>

                    <div className="flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                        <div>
                            <label><input className='mr-3' type='radio' name="answers" value="MostAnswered"  onChange={()=>{handler(setarrange)}}/>Most Answered</label>
                        </div>
                        <div>
                            <label><input className='mr-3 mt-0' type='radio' name="answers" value="LeastAnswered"  onChange={()=>{handler(setarrange)}}/>Least answered</label>
                        </div>
                        <div>
                            <label><input className='mr-3 mt-0' type='radio' name="answers" value="None"  onChange={()=>{handler(setarrange)}}/>None</label>
                        </div>
                    </div>
                    <br />


                    <div className='flex justify-center font-semibold mb-2'>BY VISITS </div>

                    <div className="flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                        <div>
                            <label><input className='mr-3' type='radio' name="visits" value="MostVisits"  onChange={()=>{handler(setarrange)}}/>Most visits</label>
                        </div>
                        <div>
                            <label><input className='mr-3 mt-0' type='radio' name="visits" value="LeastVisits"  onChange={()=>{handler(setarrange)}}/>Least visits</label>
                        </div>
                        <div>
                            <label><input className='mr-3 mt-0'  type='radio' name="visits" value="None"  onChange={()=>{handler(setarrange)}}/>None</label>
                        </div>
                    </div>
                    <br />

                </div>

            </div>
        </div>
    )
}

export default Qarrange
