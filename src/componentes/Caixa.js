import React from "react";

export default function Caixa(props){
    return (
        <>
        <p>{props.site}</p>
        <h1>Fernando</h1>
        {props.children}

        </>
    );
}