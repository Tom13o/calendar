import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export default function SignUp() {
    const { currentUser } = useContext(AuthContext);
    if ( !!currentUser ) { return <Navigate to="/home" /> }

    const auth = getAuth();

    return (
        <>
            <Link to="/">Back</Link> 
            <p>Sign Up</p>

            <button onClick={async function() { 
                await signInWithPopup(auth, new GoogleAuthProvider()).then(async function(response) {

                })
            }}>
            Sign up with Google
            </button>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </>
    )
}