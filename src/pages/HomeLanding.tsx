import { Outlet } from "react-router-dom";

export default function HomeLanding() {
    return (
        <>
            <p>Home Landing Header</p>
            <Outlet />
            <p>Home Landing Footer</p>
        </>
    )
}