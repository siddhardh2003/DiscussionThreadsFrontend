import Question from './Question.jsx'
import React, { useEffect, useState } from 'react'
import './Qpage.css'
import Qfilter from './Qfilter'
import Qarrange from './Qarrange.jsx'
import { Link } from 'react-router-dom'

function handler(callback, pid) {
  let ele = document.querySelector('.getqmain')
  if (ele.value != '') {
    let t = new Date()
    fetch('http://127.0.0.1:5000/addquestion', {
      method: "POST",
      body: JSON.stringify({
        bywhom: Number(pid),
        question: ele.value,
        answers: 0,
        visits: 0,
        time: {
          day: t.getDay(),
          date: t.getDate(),
          month: t.getMonth(),
          year: t.getFullYear(),
          hours: t.getHours(),
          minutes: t.getMinutes(),
          seconds: t.getSeconds()
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    ele.value = ''
    callback({ display: 'none' })
  } else {

  }
}

function searchhandler(event, callback) {
  const searchString = `.*${event.target.value}.*`;
  // const regexPattern = new RegExp(searchString, 'i');
  callback({ question: searchString })
}

export default function Qpage({ pid }) {
  let [data, setdata] = useState([<></>])
  let [style1, setstyle1] = useState({ display: 'none' })
  let [filter, setfilter] = useState({})
  let [arrange, setarrange] = useState({})
  let [qfilter, setqfilter] = useState({})

  useEffect(() => {
    fetch('http://127.0.0.1:5000/', {
      method: "POST",
      body: JSON.stringify({
        qfilter: qfilter,
        filter: filter,
        arrange: arrange
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => res.json()).then(d => {
      d = d.map((item, index) => <Question rule={0} key={index} pid={pid} data={item} />)
      setdata(d)
    })
  }, [qfilter, filter, arrange, style1])

  return (
    <div className='bg-gray-200'>
      {/* <input type="text" name="" id="" onChange={e => {searchhandler(e, setqfilter)}}/> */}
      <form action="" className="absolute right-2 top-3">
        <input type="search"
          className="text-white peer cursor-pointer relative z-10 h-12 w-12 rounded-full  bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border focus:border-white focus:pl-16 focus:pr-4 border-gray-800" onChange={e => { searchhandler(e, setqfilter) }} />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-white px-3.5 peer-focus:border-white peer-focus:stroke-white " fill="none" viewBox="0 0 24 24" stroke="none" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>

      <div className='getqmodelo' style={style1}>
        <div className='getqmodeli bg-gray-700 p-5 rounded-md'>
          {/* <form className='bg-gray-700 p-5 rounded-md'> */}
          <div className='flex flex-row justify-between'>
            <label for="question" className='text-xl text-white mb-3'>Enter your Question</label>
            {/* <button
              class="middle none center rounded-lg bg-blue-600 py-3 px-6 font-sans text-md font-bold text-white transition-all hover:shadow-lg hover:bg-blue-800 "
              data-ripple-light="true"
              onClick={() => { setstyle1({ display: 'none' }) }}
            >
              Cancel
            </button> */}
            <button type="button" class=" rounded-md inline-flex items-center justify-center text-white hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => { setstyle1({ display: 'none' }) }}>
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <br />
          <textarea type="text" id="question" className='getqmain rounded-xl mb-4' name="" cols="50" spellCheck='false' rows="5"></textarea>
          {/* <div className='getqfooter'>
              <button className='getqb' onClick={()=>{handler(setstyle1)}}>SEND</button>
              <button className='getqb' style={{float: 'right'}} onClick={()=>{setstyle1({display: 'none'})}}>CANCEL</button>
            </div> */}


          <div className='getqfooter flex flex-row justify-center text-center w-full items-center '>

            <button
              class="middle none center rounded-lg bg-blue-600 py-3 px-6 font-sans text-md font-bold text-white transition-all hover:shadow-lg hover:bg-blue-800"
              data-ripple-light="true"

              onClick={() => { handler(setstyle1, pid) }}
            >
              Submit
            </button>

          </div>
          {/* </form> */}



        </div>
      </div>

      <div className='qpage flex flex-row justify-between'>

        <div className='qpagesec1 '>
          <div className='qpagefilters'>
            <Qfilter setfilter={setfilter}></Qfilter>
          </div>
        </div>

        <div className='qpagesec2 w-6/12 '>
          {data}
        </div>

        <div className='qpagesec3'>
          {/* <button onClick={()=>{setstyle1({display: 'flex'})}}>Answer</button> */}
          <button className="mt-4 w-11/12 block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => { setstyle1({ display: 'flex' }) }}>
            Post Question
          </button>
          <Qarrange setarrange={setarrange} />
        </div>

      </div>
    </div>
  )
}
