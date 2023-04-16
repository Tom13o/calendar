import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../auth";

export default function LandingContainer() {
    function SignUpAndLogInButtons() {
        const { currentUser } = useContext(AuthContext);
        return (
            <>
            {!!currentUser ?
            <li>
                <Link to='/home'>Home</Link>
            </li>
            :
            <>
            <li>
                <Link to="/login">Log in</Link>
            </li>
            <li>
                <Link to="/signup">Sign up</Link>
            </li>
            </>
            }
            </>
        ) //FIXME: maybe something other than Home? maybe 'enter' or something?
    }

    return (
        <>
        <ul>
            <li><Link to="/">Calendar</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <SignUpAndLogInButtons />
        </ul>
        <Outlet />
        <p>Landing Container Footer</p>
        </>
    )
}