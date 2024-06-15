import React, { createContext, useState } from 'react';


export const UserContaxt = createContext();


export default function UserContaxtProvider({children}) {
    const [userExist ,setUserExist] = useState(false);


  return (
    <UserContaxt.Provider value={{userExist,setUserExist}}>
        {children}
    </UserContaxt.Provider>
  )
}
