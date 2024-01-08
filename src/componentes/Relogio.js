import React from "react";

export default function Relogio() {
    return (
        <>
        <p className="size-10">
            {new Date().toLocaleTimeString()}
        </p>
        </>
    );
}

