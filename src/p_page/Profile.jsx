import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Profile.css';
import UserQuestion from './userQuestion.jsx';
import Cookies from 'js-cookie';

export default function Profile() {
  let [byWhom, setbyWhom] = useState(useParams())
  let [userInfo, setUserInfo] = useState({});
  let [userQuestions, setUserQuestions] = useState([]);
  let [loading, setLoading] = useState(true);
  const cookieNameValue =  Cookies.get('name');
  let DisplayDelete= (byWhom==cookieNameValue)?true:false
  

  useEffect(() => {
    const fetchDetails = async (byWhom) => {
      setLoading(true);
      try {
        let res = await fetch(`/api/getProfile?username=${byWhom.byWhom}`, { method: 'GET' });
        let userData = await res.json();
        let { userInfo, userQuestions } = userData;
        console.log('Fetched userInfo:', userInfo);  // Log userInfo to debug
        console.log('Fetched userQuestions:', userQuestions);  // Log userQuestions to debug
        setUserInfo(userInfo[0]);
        setUserQuestions(userQuestions);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails(byWhom);
  }, [byWhom]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a more sophisticated loading indicator if you want
  }

  return (
    <>
      <div>
        <div className="relative block w-full h-[500px]">
          <div className="absolute top-0 w-full h-full bg-center bg-cover bg-design">
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]">
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
        <div className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img alt="..." src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link to="/">
                        <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                          Home
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{userQuestions.length}</span>
                        <span className="text-sm text-blueGray-400">Posts</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span>
                        <span className="text-sm text-blueGray-400">Answers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {byWhom.byWhom}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Telangana, India
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    National Institute of Technology, Warangal
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{userInfo.branch }
                   
                  </div>
                  <div className="mb-2 text-blueGray-600">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i> {userInfo.email}
                   
                  </div>
                  <div className="userq mt-5 p-10 flex flex-col">
                    <div className="p-auto">
                      <h1 style={{ fontWeight: '700' }}>Your Threads</h1>
                      <i className="bi bi-chat-dots"></i>
                    </div>
                    {userQuestions.map((item, index) => (
                      <UserQuestion key={index} data={item} DisplayDelete={DisplayDelete}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
