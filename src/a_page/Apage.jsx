import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import Answer from './Answer.jsx'
import Question from '../q_page/Question'
import './Apage.css'
import { useEffect, useState } from 'react'
import Answercard from './answercard.jsx';


function ans_sender(qid, pid, callback) {
  
  let ele = document.querySelector('.getamain')
  if (ele.value != '') {
    let t = new Date()
    fetch(`http://127.0.0.1:5000/addans`, {
      method: "POST",
      body: JSON.stringify({
        toquestion: qid,
        bywhom: pid,
        answer: ele.value,
        upvotes: 0,
        downvotes: 0,
        time: {
          year: t.getFullYear(),
          month: t.getMonth(),
          date: t.getDate(),
          hours: t.getHours(),
          minutes: t.getMinutes(),
          seconds: t.getSeconds(),
          day: t.getDay()
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => res.json()).then(data => {
      ele.value = ''
      callback({ display: 'none' })
    })
  } else {

  }
}

export default function Apage({ pid }) {
  let { qid, qpid } = useParams()
  let [question, setquestion] = useState(<></>)
  let [answers, setanswers] = useState([<></>])
  let [style1, setstyle1] = useState({ display: 'none' })

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/addvisit/?qid=${qid}&qpid=${qpid}&pid=${pid}`).then(res => res.json()).then(data => {
      fetch('http://127.0.0.1:5000/', {
        method: "POST",
        body: JSON.stringify({
          qfilter: { _id: qid },
          filter: {},
          arrange: {}
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(res => res.json()).then(d => {
        d = d.map((item, index) => <Question rule={1} key={index} pid={pid} data={item} />)

        setquestion(d)
      })
    })
  }, [style1])

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/ansget/?qid=${qid}&pid=${pid}`).then(res => res.json()).then(data => {
      data = data.map((item, index) => <Answer key={index} profileId={pid} data={item} />)
      setanswers(data)
    })
  }, [style1])

  return (
    <>

      <div className='apage bg-gray-200 '>

        <div className='getqmodelo' style={style1}>
          <div className='getqmodeli bg-gray-700 p-5 rounded-md absolute '>
            {/* <form className='bg-gray-700 p-5 rounded-md'> */}
            <div className='flex flex-row justify-between '>
              <label for="question" className='text-xl text-white mb-3'>Enter your answer</label>
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
            <textarea type="text" id="answer" className='getamain rounded-xl mb-4 p-3 active:border-none' name="" cols="50" spellCheck='false' rows="5"></textarea>
            {/* <div className='getqfooter'>
              <button className='getqb' onClick={()=>{handler(setstyle1)}}>SEND</button>
              <button className='getqb' style={{float: 'right'}} onClick={()=>{setstyle1({display: 'none'})}}>CANCEL</button>
            </div> */}


            <div className='getqfooter flex flex-row justify-center text-center w-full items-center '>

              <button
                className="middle none center rounded-lg bg-blue-600 py-3 px-6 font-sans text-md font-bold text-white transition-all hover:shadow-lg hover:bg-blue-800 m-auto"
                data-ripple-light="true"
                onClick={() => { ans_sender(qid, pid, setstyle1) }}
              >
                Submit
              </button>

            </div>
            {/* </form> */}
          </div>
        </div>


        <div className='apagesec1'>

          {/* <button >Answer</button> */}


        </div>
        <div className='apagesec2'>
          {question}
          <div className='flex w-full max-w-[44rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none '>
            {answers}
          </div>
          {/* <Question/>
                <Answercard/> */}

        </div>
        <div className='apagesec3'>
          <button className="mt-4 w-11/12 block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => { setstyle1({ display: 'flex' }) }}>
            Add Answer
          </button>

        </div>
      </div>

    </>
  )
}
