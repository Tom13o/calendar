import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const auth = getAuth();
    const nav = useNavigate();

    return (
        <>
            Calendar Home Page
            <button onClick={() => {
                signOut(auth);
                nav("/loggedout");
            }}>Sign Out</button>
        </>
    )
}