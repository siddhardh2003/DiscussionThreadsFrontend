import React from 'react'
import { useEffect, useState } from 'react'
import Question from './Question'


// function handler(callback) {
//     let arr1 = document.querySelectorAll('.qfilter select');
//     let obj = {};
//     let s = 'http://localhost:5000/?'    
//     arr1.forEach(element => {
//       s += element.name
//       obj[element.name] = element.value
//       s += '='
//       s += element.value + '&'
//     });
//     let arr2 = document.querySelectorAll('.qarrange select');      
//     arr2.forEach(element => {
//       s += element.name
//       obj[element.name] = element.value
//       s += '='
//       s += element.value + '&'
//     }); 
//     callback(s)        
// }

// export default function Qfilter({alldata}) {
//     let {setdata, profileId} = alldata
//     let [string, setstring] = useState('http://localhost:5000/')

//     console.log(`filter: ${profileId}`)
//     useEffect(()=>{
//         fetch(string).then(res => res.json()).then(d => 
//         {
//           d = d.map((item, index)=><Question key={index} pid={profileId} data={item}/>)
//           setdata(d)
//         })
//     }, [string])    

//     return (
//         <>  
//             <span>Filter:</span>
//             <div className='qfilter'>
//                 <select name='branch' onChange={()=>{handler(setstring)}}>
//                     <option value={'None'}>None</option>
//                     <option value={'CSE'}>CSE</option>
//                     <option value={'EEE'}>EEE</option>
//                 </select>
//                 <br />
//                 <select name='year' onChange={()=>{handler(setstring)}}>
//                     <option value={'None'}>None</option>
//                     <option value={1}>First</option>
//                     <option value={2}>Second</option>
//                     <option value={3}>Third</option>
//                     <option value={4}>Fourth</option>
//                 </select>
//                 <br />
//                 <select name='gender' onChange={()=>{handler(setstring)}}>
//                     <option value={'None'}>None</option>
//                     <option value={'M'}>Male</option>
//                     <option value={'F'}>Female</option>
//                 </select>
//                 <br />
//                 <select name='section' onChange={()=>{handler(setstring)}}>
//                     <option value={'None'}>None</option>
//                     <option value={'A'}>A</option>
//                     <option value={'B'}>B</option>
//                     <option value={'C'}>C</option>
//                 </select>                
//             </div>
//             <br />
//             <br />
//             <span>Arrange:</span>
//             <div className='qarrange'>
//                 <select name='time' onChange={()=>{handler(setstring)}}>
//                     <option value={'None'}>None</option>
//                     <option value={'0'}>Latest</option>
//                     <option value={'1'}>Oldest</option>
//                 </select>
//                 <br />                   
//                 <select name='answers' onChange={()=>{handler(setstring)}}>
//                     <option value={'None'}>None</option>
//                     <option value={'0'}>Answered</option>
//                     <option value={'1'}>UnAnswered</option>
//                 </select>  
//                 <br />                 
//                 <select name='visits' onChange={()=>{handler(setstring)}}>
//                     <option value={'None'}>None</option>
//                     <option value={'0'}>HighestVisits</option>
//                     <option value={'1'}>LowestVisits</option>
//                 </select>                   
//             </div>
//         </>
//     )
// }





function handler(callback) {
    let filter = {}
    {
        let arr = document.querySelectorAll('.cbranch input');
        let temp = []
        arr.forEach(item => {
            if (item.checked) {
                temp.push(item.value)
            }
        })
        if (temp.length != 0) {
            filter['branch'] = {}
            filter['branch']['$in'] = temp;
        }      
    }

    {
        let arr = document.querySelectorAll('.cyear input');
        let temp = []
        arr.forEach(item => {
            if (item.checked) {
                temp.push(Number(item.value))
            }
        })
        if (temp.length != 0) {
            filter.year = {}
            filter.year.$in = temp;
        }  
    } 

    {
        let arr = document.querySelectorAll('.cgender input');
        let temp = []
        arr.forEach(item => {
            if (item.checked) {
                temp.push(item.value)
            }
        })
        if (temp.length != 0) {
            filter.gender = {}
            filter.gender.$in = temp;
        }  
    }

    {
        let arr = document.querySelectorAll('.csection input');
        let temp = []
        arr.forEach(item => {
            if (item.checked) {
                temp.push(item.value)
            }
        })
        if (temp.length != 0) {
            filter.section = {}
            filter.section.$in = temp;
        }  
    }

    console.log(filter)
    callback(filter);
}

export default function Qfilter({ setfilter }) {

    return (
        <div>
            {/* <span>Filter:</span> */}
            <br />
            <div className='qfilter ml-4'>
                {/* <div className='m-4'> */}
                <div className='flex justify-center font-semibold mb-2'>YEAR </div>

                {/* <TCheckbox values={['First', 'Second', 'Third', 'Fourth']} /> */}
                <div className="cyear flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                    <div>
                        <input className='mr-3' id="First" type='checkbox' value='1'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='First'>First</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Second" type='checkbox' value='2'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='Second'>Second</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Third" type='checkbox' value='3'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='Third'>Third</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Fourth" type='checkbox' value='4'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='Fourth'>Fourth</label>
                    </div>
                </div>

                <br />
                    <div className='flex justify-center font-semibold mb-2 mt-4'>BRANCH </div>

                    {/* <div className='border-2 border-black p-3 shadow-md'> */}


                    {/* <TCheckbox values={['CSE', 'EEE', 'ECE']} /> */}

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
                                <input className='mr-3 mt-0 ' id="eee" type='checkbox' value='ME' onChange={() => handler(setfilter)}/>
                                <label htmlFor='eee'>ME</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="eee" type='checkbox' value='CHE' onChange={() => handler(setfilter)}/>
                                <label htmlFor='eee'>CHE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="eee" type='checkbox' value='MME' onChange={() => handler(setfilter)}/>
                                <label htmlFor='eee'>MME</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="eee" type='checkbox' value='BT' onChange={() => handler(setfilter)}/>
                                <label htmlFor='eee'>BT</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="eee" type='checkbox' value='CE' onChange={() => handler(setfilter)}/>
                                <label htmlFor='eee'>CE</label>
                            </div>
                            <div>
                                <input className='mr-3 mt-0 ' id="eee" type='checkbox' value='MC' onChange={() => handler(setfilter)}/>
                                <label htmlFor='eee'>MC</label>
                            </div>
                        </div>
                    </div>
                <br />

                <div className='flex justify-center font-semibold mb-2' >GENDER </div>

                {/* <TCheckbox values={['Male', 'Female']} /> */}

                <div className="cgender flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                    <div>
                        <input className='mr-3' id="Male" type='checkbox' value='M'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='Male'>Male</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="Female" type='checkbox' value='F'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='Female'>Female</label>
                    </div>
                </div>

                <br />
                <div className='flex justify-center font-semibold mb-2'>SECTION </div>
   
                {/* <TCheckbox values={['A', 'B', 'C']} /> */}

                <div className="csection flex gap-4 flex-col shadow-md rounded-xl p-4 bg-white">
                    <div>
                        <input className='mr-3' id="A" type='checkbox' value='A'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='A'>A</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="B" type='checkbox' value='B'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='B'>B</label>
                    </div>
                    <div>
                        <input className='mr-3 mt-0' id="C" type='checkbox' value='C'  onChange={() => handler(setfilter)}/>
                        <label htmlFor='C'>C</label>
                    </div>
                </div>

            </div>
            <br />

        </div>
    )
}