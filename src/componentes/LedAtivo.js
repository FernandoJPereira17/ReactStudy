import React from 'react'
import LedVerde from './imgs/ledverde.png'
import LedVermelho from './imgs/ledvermelho.png'

export default function LedAtivo(props) {
       
  return (
    <>
      <img className='h-40' src={props.ligado?LedVerde:LedVermelho}></img>
            <button 
            
            className='flex-1 px-10 py-2 bg-sky-600 w-50 text-white 
                       border border-black rounded-md'
            onClick={()=>props.setLigado(!props.ligado)}
            >{props.ligado?'Desligar':'Ligar'}
            
            </button>
      </>
  );
}
