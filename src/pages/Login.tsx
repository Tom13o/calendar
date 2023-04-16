import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export default function Login() {
    const { currentUser } = useContext(AuthContext);
    if ( !!currentUser ) { return <Navigate to="/home" /> }

    const auth = getAuth();

    return (
        <>
            <Link to="/">Back</Link>
            <p>Login</p>

            <button onClick={async function() { 
                await signInWithPopup(auth, new GoogleAuthProvider()).then(async function(response) {
                    
                })
            }}>
            Log in with Google
            </button>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </>
    )
}