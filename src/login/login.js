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
        // marginTop: "100px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "30px",
        maxWidth: "400px",
        margin: "140px auto"
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#333"
        }}>Login</h2>
        <div className='container'>
          <div className='mb-4'>
            <label className="form-label" htmlFor="email">Email:</label>
            <input 
              type='email'
              id="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className='mb-4'>
            <label className="form-label" htmlFor="password">Password:</label>
            <input 
              type='password'
              id="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button 
            className='btn btn-dark w-100'
            onClick={GetLogin}
            style={{
            //   backgroundColor: "#007bff",
            borderRadius:"20px",
              border: "none",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "background-color 0.3s"
            }}
          >
            Login
          </button>
        </div>
      </div>
  )
}

export default Login
