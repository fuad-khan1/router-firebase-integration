import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {Navigate,useLocation} from 'react-router-dom'

const auth = getAuth(app)
const RequireAuth = ({children}) => {
    const [user]= useAuthState(auth)
    let location = useLocation();

    if (!user){
        return <Navigate  to="/login" state={{ from: location }} replace></Navigate> 
    }
        return children;

    
};

export default RequireAuth;