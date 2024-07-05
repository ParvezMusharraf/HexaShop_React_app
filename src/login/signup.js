import React from 'react'
import { useState } from 'react'
import {SignUpUser} from "../Request/Requiests"
import { UserAuth } from '../context/UserContaxt'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    
    const {setUserExist,email,setEmail,password,setPassword,userName ,setUserName} = UserAuth()    
    const [user,setUser] = useState()
    const navigate = useNavigate()

    const handleSubmit = async()=>{
        try {

            if(!email || !password || !userName){
                alert("all feilds are mandetory")
                return
            }
            const res = await SignUpUser({email,password,username:userName})
            setUser(res.user)
            localStorage.setItem("username",res.user.username)
            localStorage.setItem("email",res.user.email)
            localStorage.setItem("userId",res.user._id)
            console.log(res)
            setUserExist(true)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    
    }
  return (
<div style={{
//   marginTop: "100px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  padding: "40px",
  maxWidth: "450px",
  margin: "140px auto"
}}>
  <h2 style={{
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
    fontWeight: "bold"
  }}>Sign Up</h2>
  <div className='container'>
    <div className='mb-4'>
      <label className="form-label" htmlFor="username">Username:</label>
      <input 
        type='text'
        id="username"
        className="form-control"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Choose a username"
      />
    </div>
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
        placeholder="Create a password"
      />
    </div>
    <button 
      className='btn btn-dark w-100'
      onClick={handleSubmit}
      style={{
        // backgroundColor: "#4CAF50",
        border: "none",
        padding: "12px",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "20px",
        transition: "background-color 0.3s",
        cursor: "pointer"
      }}
    >
      Sign Up
    </button>
  </div>
</div>  )
}

export default Signup
