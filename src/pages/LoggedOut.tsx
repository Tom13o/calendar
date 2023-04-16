import { Link } from "react-router-dom";

export default function LoggedOut() {
    return (
        <>
            <p>You have been successfully logged out.</p>
            <Link to="/">Back to Landing Page</Link>
            <br />
            <Link to="/login">Log in</Link>
            <br />
            <Link to="/signup">Sign up</Link>
        </>
    )
}