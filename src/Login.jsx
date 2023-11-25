import React, { useContext } from 'react'
import { LoginContext } from './Context'

const Login = () => {
    const {isAuth,setIsAuth} = useContext(LoginContext)
  return (
    <div>
      <h1>Login</h1>
      <button onClick={()=>setIsAuth(!isAuth)}>Login</button>
    </div>
  )
}

export default Login
