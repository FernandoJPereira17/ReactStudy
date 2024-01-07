import React, {useState} from "react";

export default function Nota(props){

    return (
        <>
        <div className="flex justify-center">
            <legend className="px-2">Informe a nota:{props.num} </legend>
            <input className="border border-black" name={props.nome} type="text" value={props.nota} onChange={(e)=>props.setNota(e.target.value)}></input>
        </div>
        </>
    );
}
