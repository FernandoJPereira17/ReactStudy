import React, { useState } from "react";

export default function CorTitle() {

    const [cor, setCor] = useState(1);
    const vermelho = { color: '#f00' }
    const verde = { color: '#0f0' }
    const azul = { color: '#00f' }

    const retCor = (c) => {
        if (c == 1) {
            return vermelho;
        } else if (c == 2) {
            return verde;
        } else {
            return azul;
        }
    }

    const mudaCor = () => {
        setCor(cor + 1);
        if (cor > 2) {
            setCor(1);
        }
    }
    // setInterval(mudaCor, 1200); 

    return (
        <>
            <h1 style={retCor(cor)}>ReactStudy</h1>
            <button
                className='uppercase flex-1 px-10 py-2 
                  bg-sky-600 w-50 text-white 
                  border border-black rounded-md'
                onClick={() => mudaCor()}>Mudar Cor</button>
        </>
    );
}
