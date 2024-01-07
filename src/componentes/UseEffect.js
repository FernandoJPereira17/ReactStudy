import React, { useEffect, useState } from "react";

export default function UseEffect(){

    const [contagem, setContagem]=useState(0);

    useEffect(
        ()=>{
        console.log("Página Carregada...")
        document.title="Contagem:"+contagem
    }
    )

    return (
        <>
            <div className="flex flex-row py-2 justify-center">
            <p className="px-5 bg-sky-400">Contagem:{contagem}</p>
            <button className="px-10 border border-sky-300 rounded-md hover:#0F0" onClick={()=>setContagem(contagem+1)}>Contar</button>
            </div>
        </>
    );
}