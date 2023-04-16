import { ReactNode } from "react";

export function DBProvider( { children }: { children?: ReactNode | undefined } ) {
    return (
        <>
            {children}
        </>
    )
}