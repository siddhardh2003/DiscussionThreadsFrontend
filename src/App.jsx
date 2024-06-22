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

function App() {
  let pid = Math.floor(Math.random() * 4000 + 1);

  // let [isLoggedin, setIsLoggedin] = useState(true);
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(() => {
    const saved = localStorage.getItem('isLoggedin');
    
    return saved === 'true'; // convert string to boolean
  });

  
  const handleLogin = () => {
    setIsLoggedin(true);
  };

  const handleLogout = () => {
    setIsLoggedin(false);

  };
  useEffect(() => {
    localStorage.setItem('isLoggedin', isLoggedin);
  }, [isLoggedin]);

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={isLoggedin ? (
          <>
            <Navbar pid={pid} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/>
            <Qpage pid={pid} />
          </>
          ) : (
          <>
            <Navbar pid={pid} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/>
            <Login handleLogin={handleLogin} />
          </>
           )} />
          <Route path='/ans/:qid/:qpid' element={<><Navbar pid={pid} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/><Apage pid={pid} /></>} />
          {/* <Route path='/profiles' element={<Profiles/>}/> */}

          <Route exact path='/login' element={<><Navbar pid={pid} isLoggedin={isLoggedin}  handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin} /><Login  handleLogin={handleLogin}/></>} />
          <Route exact path='/signup' element={<><Navbar pid={pid} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin}/><Signup  handleLogin={handleLogin}/></>} />
          <Route exact path='/about' element={<><Navbar pid={pid} isLoggedin={isLoggedin} handleLogout={handleLogout}  setIsLoggedin={setIsLoggedin} /><About /></>} />
          
          <Route path='/profile/:id' element={<Profile pid={pid}/>} />
          {/* <Route exact path='/profile' element={<Profile />} /> */}


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
