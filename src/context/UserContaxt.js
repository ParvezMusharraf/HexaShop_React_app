import React, {useContext, createContext, useState } from 'react';


export const UserContaxt = createContext();


export default function UserContaxtProvider({children}) {
    const [userExist ,setUserExist] = useState(false);
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const [userName ,setUserName] = useState()


  return (
    <UserContaxt.Provider value={{userExist,setUserExist,email,setEmail,password,setPassword,userName ,setUserName}}>
        {children}
    </UserContaxt.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContaxt);
};