import './App.css';
import Qpage from './q_page/Qpage';
import Apage from './a_page/Apage';
import Profile from './p_page/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Nav';
import Login from './l_page/login';
import Signup from './l_page/signup';
import About from './about';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function App() {
  // let pid = Math.floor(Math.random() * 4000 + 1);

  const [username,setusername]= useState('')

  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = () => {
    setIsLoggedin(true);
  };

  const handleLogout = () => {
    setIsLoggedin(false);

  };
  useEffect(() => {
    const cookieNameValue =  Cookies.get('name');
    if(cookieNameValue){
      setusername(cookieNameValue);
      console.log(cookieNameValue);
      handleLogin();
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={isLoggedin ? (
          <>
            <Navbar pid={username} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/>
            <Qpage pid={username}/>
          </>
          ) : (
          <>
            <Navbar pid={username} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/>
            <Login handleLogin={handleLogin} setusername={setusername}/>
          </>
           )} />
          <Route path='/:qid' element={<><Navbar pid={username} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/><Apage pid={username} /></>} />
          <Route exact path='/login' element={<><Navbar pid={username} isLoggedin={isLoggedin}  handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin} /><Login  handleLogin={handleLogin} setusername={setusername}/></>} />
          <Route exact path='/signup' element={<><Navbar pid={username} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/><Signup  handleLogin={handleLogin}/></>} />
          <Route exact path='/about' element={<><Navbar pid={username} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin} /><About /></>} />
          <Route path="/profile/:id" element={isLoggedin ? (
          <>
            {<Profile pid={username}/>} 
          </>
          ) : (
          <>
           <Navbar pid={username} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/>
           <Login handleLogin={handleLogin} setusername={setusername}/>
          </>
           )} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
