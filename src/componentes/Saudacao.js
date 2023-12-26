import React from "react";

export default function Saudacao(){

    const cumprimento=()=>{

        const hora=new Date().getHours();
        // const hora=22; --teste--
        if(hora >=0 && hora < 13){
          return <p>Bom dia!!!</p>
        }else if (hora >=13 && hora < 18){
          return <p>Boa Tarde</p>
        }else{
          return <p>Boa Noite!!!</p>
        }
      }

    return(
        <>
            <h1 className="py-10 flex"> Olá!!! {cumprimento()} </h1>            
        </>
    );
}