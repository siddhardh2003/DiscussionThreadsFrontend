import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Answer from './Answer.jsx';
import Question from '../q_page/Question';
import './Apage.css';
import { Link ,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';

const fetchData = async ({ qid, setQuestion, setAnswers,setReactions }) => {
  let res = await fetch(`/api/viewQuestion/?_id=${qid}`, {
    method: "GET"
  });
  let data = await res.json();
  console.log(data);
  setQuestion(data);
  setAnswers(data.answers);
  setReactions(data.reactions);
};

async function ans_sender(qid, pid, callback, setQuestion, setAnswers) {
  let ele = document.querySelector('.getamain');
  if (ele.value !== '') {
    let t = new Date();
    console.log(JSON.stringify({
      toquestion: qid,
      byWhom: pid,
      answer: ele.value,
      upvotes: 0,
      downvotes: 0,
      time: t
    }));
    let res=await fetch(`api/addAns`, {
      method: "POST",
      body: JSON.stringify({
        toquestion: qid,
        byWhom: pid,
        answer: ele.value,
        upvotes: 0,
        downvotes: 0,
        time: t
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    if(res.status==400)alert("Anser Cant be posted");
    else alert("answer posted succesfully");
    callback({ display: 'none' });
    ele.value = '';
    await fetchData({ qid, setQuestion, setAnswers });
  }
}


export default function Apage({ pid }) {
  let { qid } = useParams();
  let [question, setQuestion] = useState({});
  let [answers, setAnswers] = useState([]);
  let [style1, setStyle1] = useState({ display: 'none' });
  let [loading, setLoading] = useState(true);
  let [reactions,setReactions]=useState([]);
  const navigate=useNavigate();
  const cookieNameValue =  Cookies.get('name');
  let DisplayDelete= (question.bywhom==cookieNameValue)?true:false

  let handleDelteQuestion=async ()=>
  {
        console.log(question._id);
        let res=await fetch(`/api/deleteThread/?_id=${question._id}`,
            {method:"DELETE"
        });
        if(res.status==400)
        {
            console.log("Thread Delete Failed!!");
        }
        else{
          console.log("Thread Deleted Succesfully!!");
          navigate("/")
        }
  }
  
  let fetchDataWithLoading = async () => {
    setLoading(true);
    await fetchData({ qid, setQuestion, setAnswers,setReactions });
    setLoading(false);
  };

  
  useEffect(() => {  
    fetchDataWithLoading();
  }, [qid]);



  if (loading) {
    return <div>Loading...</div>; // You can replace this with a more sophisticated loading indicator if you want
  }

  return (
    <>
      <div className='apage bg-gray-200 '>
        <div className='getqmodelo' style={style1}>
          <div className='getqmodeli bg-gray-700 p-5 rounded-md absolute '>
            <div className='flex flex-row justify-between '>
              <label htmlFor="question" className='text-xl text-white mb-3'>Enter your answer</label>
              <button type="button" className="rounded-md inline-flex items-center justify-center text-white hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => { setStyle1({ display: 'none' }) }}>
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <br />
            <textarea type="text" id="answer" className='getamain rounded-xl mb-4 p-3 active:border-none' name="" cols="50" spellCheck='false' rows="5"></textarea>
            <div className='getqfooter flex flex-row justify-center text-center w-full items-center '>
              <button
                className="middle none center rounded-lg bg-blue-600 py-3 px-6 font-sans text-md font-bold text-white transition-all hover:shadow-lg hover:bg-blue-800 m-auto"
                data-ripple-light="true"
                onClick={() => { ans_sender(qid, pid, setStyle1, setQuestion, setAnswers) }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className='AnsPage' style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div className='MainDiv'>
            <h4 style={{cursor:"pointer"}}onClick={()=>{{navigate(`/profile/${question.byWhom}`)}}}className="mb-2 mt-3 block font-sans text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
              {question.byWhom}
            </h4>
            <h4 className="mb-2 mt-3 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {question.question}
            </h4>
            {/* View count */}
            <div style={{ marginTop: '40px' }}>
              <div style={{ textAlign: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "49%" }} width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>{question.visits}
              </div>
            </div>
          </div>
        </div>
        <div className='AnsPage' style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <button
            className="mt-4 mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => { setStyle1({ display: 'flex' }) }}>
            Add Answer
          </button>
          {
            DisplayDelete ? (
              <button
                className=" mb-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                type="button"
                // style={{color:'red',borderRadius:'10px' ::hover:}}
                onClick={() => {handleDelteQuestion() }}>
                Delete Thread
              </button>
            ) : null
          }

        </div>

        <div className='apagesec2' id='scrollableDiv'>
          {answers.map(answer => (
            <Answer key={answer._id} answerData={answer} setLoading={setLoading}  reactions={reactions} fetchDataWithLoading={fetchDataWithLoading} />
          ))}
        </div>
      </div>
    </>
  );
}
