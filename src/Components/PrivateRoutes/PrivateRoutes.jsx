import React, { useContext } from 'react';
import { UserContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(UserContext)
    if(loading){
        return <div className='h-[100vh] flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate> 
};

export default PrivateRoutes;