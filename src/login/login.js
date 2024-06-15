import React, { useState } from 'react'

const Login = () => {

    const [userLogin,setuserLogin]= useState(false)

  return (
    <div style={{
        marginTop:"100px"
    }}>
        <div className='container d-flex align-content-center justify-content-center row' >
            <div className='d-flex justify-content-center align-items-start col-12 p-3'>
                <lebal className="m-2">UserName:</lebal>
                <div className="m-2"><input type='text' /></div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-12 p-3'>
                <lebal className="m-2">Email:</lebal>
                <div className="m-2"><input type='email' /></div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-12 p-3'>
                 <lebal className="m-2">Password:</lebal>
                <div className="m-2"><input type='password' /></div>
            </div>
        <button className='btn btn-dark col-1'>Login</button>
        </div>
    </div>
  )
}

export default Login
