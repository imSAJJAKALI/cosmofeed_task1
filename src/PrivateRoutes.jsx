import React, { Children, useContext } from 'react'
import { LoginContext } from './Context'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {isAuth,setIsAuth} = useContext(LoginContext)

     return isAuth?children:<Navigate to="/" />
}

export default PrivateRoutes
