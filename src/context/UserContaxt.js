import React, {useContext, createContext, useState ,useEffect} from 'react';


export const UserContaxt = createContext();


export default function UserContaxtProvider({children}) {
    const [userExist ,setUserExist] = useState(false);
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const [userName ,setUserName] = useState()


    useEffect(() => {
      // Check for user information in localStorage
      const storedUserExist = localStorage.getItem('userExist') === 'true';
      const storedEmail = localStorage.getItem('email');
      const storedUserName = localStorage.getItem('userName');

      if (storedUserExist && storedEmail && storedUserName) {
          setUserExist(true);
          setEmail(storedEmail);
          setUserName(storedUserName);
      }
  }, []);



  return (
    <UserContaxt.Provider value={{userExist,setUserExist,email,setEmail,password,setPassword,userName ,setUserName}}>
        {children}
    </UserContaxt.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContaxt);
};