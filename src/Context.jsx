import React, { createContext,useState } from 'react'

export const LoginContext = createContext()

const Context = ({children}) => {
    const [isAuth,setIsAuth]= useState(false)
  return (
    <LoginContext.Provider value={{isAuth,setIsAuth}}>{children}</LoginContext.Provider>
  )
}

export default Context
