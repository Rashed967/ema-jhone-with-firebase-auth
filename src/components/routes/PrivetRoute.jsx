import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    console.log(location)
    if(loading){
        <div>Loading....</div>
    }
    if(user){
        return children
    }
    console.log(user)

    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivetRoute;