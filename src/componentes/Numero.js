import React from "react";

export default function Numero(props) {

    return (
        <>
            <p className='py-4'>Valor do state em numero: {props.num} </p>
            <button className='h-10 bg-sky-600 w-20 gap-8 flex-1 justify-center items-center  
                         border border-black rounded-md'
                onClick={()=>props.setNum(props.num+10)}>+ 10</button>
            <button className='h-10 bg-sky-600 w-20 gap-8 flex-1 justify-center items-center  
                         border border-black rounded-md'
                         onClick={()=>props.setNum(props.num-10)}>-10</button>
        </>


    );
}