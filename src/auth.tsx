import React, { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth"

type AuthContextValue = {
    currentUser?: User
}

export const AuthContext = React.createContext<AuthContextValue>({
    currentUser: undefined
});

export const AuthProvider = ( { children }: {children?: ReactNode} ) => {
    const [currentUser, setCurrentUser] = useState<User>();

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => { setCurrentUser(user ? user : undefined) });
    }, [auth])

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}