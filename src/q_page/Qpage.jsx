import Question from './Question.jsx'
import React, { useEffect, useState } from 'react'
import './Qpage.css'
import Qfilter from './Qfilter'
import Qarrange from './Qarrange.jsx'
import { Link } from 'react-router-dom'

let handler=(callback, pid)=>{
  var ele = document.querySelector('.getqmain')
  var filters=[];
  if(ele.value!=='')
    {
        const checkboxes = document.querySelectorAll('input[id="submitFilter"]');
        checkboxes.forEach((checkbox) => {
          if(checkbox.checked==true){
            filters.push(checkbox.value);
          }
      });
      let t = new Date()
      console.log(t);
      var drop=document.getElementById('dropdown')
      var branchFilter= drop.value;
      console.log(JSON.stringify
        ({
          byWhom: pid,
          question: ele.value,
          filters:filters, 
          branchFilter:branchFilter,
          answers: 0,
          visits: 0,
          time: t,
        }))
    fetch('/api/addQuestion', 
    {
      method: "POST",
      body: JSON.stringify
      ({
        byWhom: pid,
        question: ele.value,
        filters:filters,
        branchFilter:branchFilter,
        answers: 0,
        visits: 0,
        time: t,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      ele.value = '';
      checkboxes.forEach((checkbox) => {
      checkbox.checked=false
    });
      callback({ display: 'none' })
    }
    else{
      alert("Question Cant be Empty");
    }

}

// function searchhandler(event, callback) {
//   const searchString = `.*${event.target.value}.*`;
//   callback({ question: searchString })
// }

export default function Qpage({ pid }) {
  let [data, setdata] = useState([<></>])
  let [style1, setstyle1] = useState({ display: 'none' })
  let [filter, setfilter] = useState({})
  let [arrange, setarrange] = useState({})
  let [qfilter, setqfilter] = useState({})

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/', {
//       method: "POST",
//       body: JSON.stringify({
//         qfilter: qfilter,
//         filter: filter,
//         arrange: arrange
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     }).then(res => res.json()).then(d => {
//       d = d.map((item, index) => <Question rule={0} key={index} pid={pid} data={item} />)
//       setdata(d)
//     })
//   }, [qfilter, filter, arrange, style1])

  return (
    <div className='bg-gray-200'>
      <form action="" className="absolute right-2 top-3">
        <input type="search"
          className="text-white peer cursor-pointer relative z-10 h-12 w-12 rounded-full  bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border focus:border-white focus:pl-16 focus:pr-4 border-gray-800" onChange={e => { searchhandler(e, setqfilter) }} />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-white px-3.5 peer-focus:border-white peer-focus:stroke-white " fill="none" viewBox="0 0 24 24" stroke="none" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

      </form>

      <div className='getqmodelo' style={style1}>
        <div className='getqmodeli bg-gray-700 p-5 rounded-md'>
          <div className='flex flex-row justify-between'>
            <label htmlFor="question" className='text-xl text-white mb-3'>Enter your Question</label>
            <button type="button" className=" rounded-md inline-flex items-center justify-center text-white hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => { setstyle1({ display: 'none' }) }}>
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <br />
          <textarea type="text" id="question" className='getqmain rounded-xl mb-4' name="" cols="50" spellCheck='false' rows="3"></textarea>
          <div className='filters'>
            <div
              className='filters'
              style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '30px',
              boxShadow: '0 0 20px rgba(104, 85, 224, 0.2)',
              transition: '0.4s',
              backgroundColor:'white',
              borderRadius:'10px',
              marginBottom:'10px'
              }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ marginBottom: '0.5rem' }}>
                    <input type='checkbox' name='society' value='Cultural' id='submitFilter' />
                    Cultural 
                  </label>
                  <label style={{ marginBottom: '0.5rem' }}>
                    <input type='checkbox' name='society' value='Technical' id='submitFilter' />
                    Technical
                  </label>
                  <label style={{ marginBottom: '0.5rem' }}>
                    <input type='checkbox' name='society' value='Sports' id='submitFilter' />
                    Sports
                  </label>
                  <label style={{ marginBottom: '0.5rem' }}>
                    <input type='checkbox' name='society'  value='Hostel' id='submitFilter'/>
                    Hostel
                  </label>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ marginBottom: '0.5rem' }}>
                    <input type='checkbox' name='Other' value='Academic' id='submitFilter' />
                    Academic
                  </label>
                  <label style={{ marginBottom: '0.5rem' }}>
                    <input type='checkbox' name='other' value='Placement' id='submitFilter' />
                    Placement
                  </label>
                
                </div>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <label htmlFor='dropdown' style={{ marginBottom: '0.5rem' }}>Branch:</label>
                  <select id='dropdown' name='dropdown'>
                    <option value='None'>None</option>
                    <option value='CSE'>CSE</option>
                    <option value='ECE'>ECE</option>
                    <option value='EEE'>EEE</option>
                    <option value='ME'>ME</option>
                    <option value='CHE'>CHE</option>
                    <option value='MME'>MME</option>
                    <option value='BT'>BT</option>
                    <option value='CE'>CE</option>
                  </select>
                </div>
              </div>
            </div>




          <div className='getqfooter flex flex-row justify-center text-center w-full items-center '>
            <button
              className="middle none center rounded-lg bg-blue-600 py-3 px-6 font-sans text-md font-bold text-white transition-all hover:shadow-lg hover:bg-blue-800"
              data-ripple-light="true"

              onClick={() => { handler(setstyle1, pid) }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className='qpage flex flex-row justify-between'>

        <div className='qpagesec1 '>
          <div className='qpagefilters'>
            <Qfilter setfilter={setfilter}></Qfilter>
          </div>
        </div>

        <div className='qpagesec2 w-6/12 '>
          {/* {data} */}
        </div>

        <div className='qpagesec3'>
          <button className="mt-4 w-11/12 block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => { setstyle1({ display: 'flex' }) }}>
            Post Question
          </button>
          <Qarrange setarrange={setarrange} />
        </div>

      </div>
    </div>
  )
}
