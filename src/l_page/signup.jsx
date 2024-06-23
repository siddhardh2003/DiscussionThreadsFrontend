import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'



const Signup = ({handleLogin}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", gender: "", age: "", year: "", branch: "", section: "", email: "", password: "", confirmpassword: "", });

    const handleSubmit = async (e) => {
        let res;
        e.preventDefault();
        const { name,gender,age,year,branch,section ,email, password } = user;
        console.log(user);
        res = await fetch('http://localhost:5000/signup', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
            (
                { name,gender,age,year,branch,section ,email, password }
            )
        })

        const data = await res.json();
        if (res.status === 400) 
        {
            alert('Couldnt signin!! Email or User name already esists')
        }
        else 
        {

            alert('Please Authenticate your Through your email ');
            // handleLogin();
            navigate('/login');
        }
    }


    const validate = (e) => 
    {
        if (validatesignup()) 
        {
            handleSubmit(e);
        }
        else 
        {
            e.preventDefault();
        }
    };

    const seterror = (f) => {
        let temp = document.getElementsByClassName("errorf")[0]

        temp.style.color = "red";
        if (f == 0) {
            temp.innerHTML = "*Passwords do not match!";
        }
        if (f == 1) {
            temp.innerHTML = "*Password is too short!";
        }
        if (f == 2) {
            temp.innerHTML = "*Not a valid email address!";
        }
        if (f == 3) {
            temp.innerHTML = "*Not a valid gender!!";
        }
        if (f == 4) {
            temp.innerHTML = "*Not a valid year!!";
        }
        if (f == 5) {
            temp.innerHTML = "*Not a valid section!!";
        }
        if (f == 6) {
            temp.innerHTML = "*Not a valid branch!!";
        }
    }

    const validatesignup = () => {
        let flag = true;
        console.log(user);

        let temp = document.getElementsByClassName("errorf")[0]
        temp.innerHTML = "";
        const emailRegex = /^[\w-]+@student\.nitw\.ac\.in$/;
        let listBranches = ['CSE','ECE','EEE','CHE','BT','ME','CE','MME','MC']
        let branchflag = 0
        for(let i of listBranches){
            console.log(i,user.branch)
            if(user.branch==i){
                branchflag = 1;
                break;
            }
        }

        if(user.gender!='M' && user.gender!='F'){
            flag = false;
            seterror(3);
        }
        if(user.year !='1' && user.year !='2' && user.year !='3' && user.year !='4'){
            flag = false;
            seterror(4);
        }
        if(user.section !='A' && user.section !='B' && user.section !='C'){
            flag = false;
            seterror(5);
        }
        if(branchflag==0){
            flag = false;
            seterror(6);
        }

        // Test if the input matches the regex pattern
        const isValidFormat = emailRegex.test(user.email);
        if (!isValidFormat) {
            flag = false;
            seterror(2);
        }
        if (user.confirmpassword != user.password) {
            flag = false;
            seterror(0);
        }
        else if (user.password.length < 4) {
            flag = false;
            seterror(1);
        }
        return flag
    }


    return (
        <div className='flex flex-col '>
            {/* <Navbar /> */}
            <div className="c2 flex flex-grow  flex-col items-center justify-center pt-14 bg-gray-100 ">
                <div className='flex flex-col justify-center items-center w-[400px] bg-white mb-6'>
                    <p className='mb-2 text-xl font-semibold pt-6'>Sign Up For Amazing Features</p>
                    <div className='flex flex-col items-center justify-center gap-3  w-full  p-6  '>
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Name" required
                            value={user.name} onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
                        
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Gender (M/F)" pattern="M|F" required
                            value={user.gender} onChange={(e) => { setUser({ ...user, gender: e.target.value }) }} />
                        
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Age" required
                            value={user.age} onChange={(e) => { setUser({ ...user, age: e.target.value }) }} />
                        
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Year (1/2/3/4)" required
                            value={user.year} onChange={(e) => { setUser({ ...user, year: e.target.value }) }} />
                        
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Branch" required
                            value={user.branch} onChange={(e) => { setUser({ ...user, branch: e.target.value }) }} />
                        
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Section" required
                            value={user.section} onChange={(e) => { setUser({ ...user, section: e.target.value }) }} />
                        
                        
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Email" required
                            value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />

                        
                        <input type="password" className="pass border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" name="fpass2" placeholder="Password" required
                            value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                        
                        <input type="password" className="pass border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" name="fpass3" placeholder="Confirm password" required
                            value={user.confirmpassword} onChange={(e) => { setUser({ ...user, confirmpassword: e.target.value }) }} />
                        <button type="submit" onClick={validate} className=" border-1  w-full h-8 bg-neutral-600 text-white rounded-sm" name="fsubmit2" value="Sign Up" >Sign Up</button>

                        <div className="flex  w-full justify-center">
                            Have an account?<span className='ml-2'><Link to={'/login'}>Sign In</Link></span>
                        </div>
                        <div className="errorf"></div>

                    </div>
                </div>
                {/* <hr className='w-2/12 bg-black' /> */}
                {/* <div name="invalidname" className="invalid" >
                </div> */}
            </div>

        </div>
    )
}

export default Signup