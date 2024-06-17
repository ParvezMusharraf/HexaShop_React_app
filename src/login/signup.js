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
        marginTop:"100px"
    }}>
        <div className='container d-flex align-content-center justify-content-center row' >
            <div className='d-flex justify-content-center align-items-start col-12 p-3'>
                <lebal className="m-2">UserName:</lebal>
                <div className="m-2"><input type='text' onChange={(e)=>setUserName(e.target.value)}/></div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-12 p-3'>
                <lebal className="m-2">Email:</lebal>
                <div className="m-2"><input type='email'  
                onChange={(e)=> setEmail(e.target.value)}
                /></div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-12 p-3'>
                 <lebal className="m-2">Password:</lebal>
                <div className="m-2"><input type='password' 
                onChange={(e)=> setPassword(e.target.value)} 
                /></div>
            </div>
        <button className='btn btn-dark col-1' onClick={handleSubmit} >Signup</button>
        </div>
    </div>
  )
}

export default Signup
