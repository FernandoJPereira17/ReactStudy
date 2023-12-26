import React from "react";
import Dados from "./dados";

export default function Body() {

    const cnl=()=>{ 
        return 'Curso React';
}    
    const yt = 'youtube.com.br/cursoreact';
    const crs = 'React.js';

    const somar=(v1, v2)=>{
        return v1+v2;
    }

    return (
        <>
            <h2>React JS - Aplicação</h2>
            <p>Se inscreva no nosso canal</p>
            <p className="py-3">Curta e compartilha</p>
            
            <Dados
                canal={cnl}
                youtube={yt}
                curso={crs}
                somar={somar}
            />
        </>
    );
}

