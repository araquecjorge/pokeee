import React from 'react'
import { Route, Redirect } from "react-router-dom";
import {useAuth} from '../Provider/Auth';
const ProctectedRoute = ({children, ...props}) =>{
    const {user} = useAuth();
    return (
       <Route 
        {...props}
        render={() => (user ? children : <Redirect to='/login'/>)}
       /> 
    )
}


export default ProctectedRoute;