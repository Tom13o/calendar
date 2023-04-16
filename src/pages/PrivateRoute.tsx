import { ReactNode, useContext } from 'react'
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

const PrivateRoute = ( { children }: { children?: ReactNode | undefined } ) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
        {!!currentUser ? children : <Navigate to="/login"/>} 
        </>
    )
    // Currently, if you try to go to a guarded route, it will take you to the login page and then immediately back to the /home page. TODO:
};

export default PrivateRoute;