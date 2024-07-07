import Question from './Question.jsx'
import React, { useEffect, useState,useRef } from 'react'
import './Qpage.css'
import Qfilter from './Qfilter'
import Qarrange from './Qarrange.jsx'
import { Link } from 'react-router-dom'

let handler= async(e,callback, pid)=>{
  e.preventDefault();
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
    let res=await fetch('/api/addQuestion', 
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
    if(res.status==400)alert("Question Cant be Posted!")
    else alert("Question Succesfully Posted!");
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


export default function Qpage({ pid }) {
  let [data, setdata] = useState([])
  let [style1, setstyle1] = useState({ display: 'none' })
  let [filter, setfilter] = useState([])
  let [branchFilter,setbranchFilter] =useState([]);
  let [arrange, setarrange] = useState({})
  let [searchVal, setsearchVal] = useState('')

  
  const inputRef = useRef(null);
  const handleSetFilters= async (e)=>{
    console.log(JSON.stringify({
      branchFilter: branchFilter,
      filter: filter,
      arrange: arrange
    }))
    let res= await fetch('/api/getThreads', {
            method: "POST",
            body: JSON.stringify({
              branchFilter: branchFilter,
              filter: filter,
              arrange: arrange
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }         
          })
          let Threadsdata = await res.json();
          // console.log()
          console.log(Threadsdata);
          setdata(Threadsdata);

  };
  const searchHandler=(e,setsearchVal)=>{
      setsearchVal(e.target.value);
      console.log(e.target.value);
  }
  const HandleSearchQuery= async (e)=>{
    e.preventDefault();
    console.log(searchVal);
    if(searchVal!=''){
      let res = await fetch(`/api/searchThreads?searchVal=${searchVal}`, {
        method: 'GET',
      });
      let Threadsdata = await res.json();    
      console.log(Threadsdata);
      setdata(Threadsdata);
      inputRef.current.value = '';
      setsearchVal('');
    }
  };
  useEffect(() => {
    let DefaultFetch= async()=>
    {
      let res= await fetch('/api/getThreads', {
        method: "POST",
        body: JSON.stringify({
          branchFilter: branchFilter,
          filter: filter,
          arrange: arrange
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }         
      })
      let Threadsdata = await res.json();
      console.log(Threadsdata);
      setdata(Threadsdata);
    }
    DefaultFetch();
    
  }, [style1]);


  return (
    <div className=' total bg-gray-200'>
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

              onClick={(e) => { handler(e,setstyle1, pid) }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className='qpage flex flex-row justify-between'>

        <div className='qpagesec1 '>
        <button className="mt-4 ml-4 w-11/12 block  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={(e) => { handleSetFilters(e)}}>
            Apply Filters
          </button>
          <div className='qpagefilters'>
            <Qfilter setfilter={setfilter} setbranchFilter={setbranchFilter}></Qfilter>
          </div>
        </div>


        <div className='qpagesec2'>
          <div >
            {data.map((item, index) => (
              <Question key={index} rule={0} data={item} />
            ))}
          </div>
        </div>



        <div className='qpagesec3'>
            <div className="search-bar" style={{ marginTop: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <input
               ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Search for a Thread"
                style={{ width: '60%', borderRadius: '10px', marginTop: '20px', height: '30px', marginRight: '10px' }}
                onChange={e => { searchHandler(e, setsearchVal)}}
              />
              <button
                style={{
                  height: '30px',
                  borderRadius: '10px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '0 15px',
                  cursor: 'pointer',
                  marginTop: '20px'
                }}
                onClick={(e) => HandleSearchQuery(e)}
              >
                Submit
              </button>
            </div>

          <button className="mt-4 w-11/12 block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => { setstyle1({ display: 'flex' }) }}>
            Post Question
          </button>
          
          <Qarrange setarrange={setarrange} />
        </div>

      </div>
    </div>
  )
}
