import React, { useState } from 'react'
import {loginUser} from "../Request/Requiests"
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/UserContaxt'

const Login = () => {

    const {setUserExist,email,setEmail,password,setPassword} = UserAuth()
    
    const [userLogin,setuserLogin]= useState(false)
    const [user,setUser] = useState()

    const navigate = useNavigate()

    const GetLogin = async () => {
        if (!password || !email) {
            return alert("Please fill fields properly");
        }
        try {
            const res = await loginUser({ email, password });
    
            if (res.userAvailable) {
                console.log(res, "userinfo");
                setUser(res);
                setUserExist(true);
                localStorage.setItem("userId", res._id);
                localStorage.setItem("userName", res.username);
                localStorage.setItem("token", res.token); // Store the token
                alert(res.message); // Display message from the response
                navigate("/");
            } else {
                alert("User not found");
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please try again."); // Generic error message for failed login attempt
        }
    }

  return (
    <div style={{
        marginTop:"100px"
    }}>
        <div className='container d-flex align-content-center justify-content-center row' >
            {/* <div className='d-flex justify-content-center align-items-start col-12 p-3'>
                <lebal className="m-2">UserName:</lebal>
                <div className="m-2"><input type='text' /></div>
            </div> */}
            <div className='d-flex justify-content-center align-items-center col-12 p-3'>
                <lebal className="m-2">Email:</lebal>
                <div className="m-2"><input type='email'  onChange={(e)=> setEmail(e.target.value)}/></div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-12 p-3'>
                 <lebal className="m-2">Password:</lebal>
                <div className="m-2"><input type='password' onChange={(e)=> setPassword(e.target.value)} /></div>
            </div>
        <button className='btn btn-dark col-1'onClick={GetLogin}  >Login</button>
        </div>
    </div>
  )
}

export default Login
