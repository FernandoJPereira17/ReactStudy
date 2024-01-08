import React, { useState } from "react";

export default function LocalStorage() {

    //Criar uma chave.. se já existir estar adicionando... (nome, valor)
    localStorage.setItem("nome", "Bruno");

    //Trocando o valor da chave
    localStorage.setItem("nome", "Fernando");

    //Recuperar a chave
    localStorage.getItem("nome");

    //Remover uma chave
    localStorage.removeItem("nome");


    const [nome, setNome] = useState();

    const armazenar=(chave, valor) => {
        localStorage.setItem(chave,valor);
    }

    const consultar=(chave)=>{
        alert(localStorage.getItem(chave));
    }

    const apagar=(chave)=>{
        localStorage.removeItem(chave);
    }

    return (
        <>
            <div className="flex flex-row justify-center px-10 py-1">
            <label>Digite um nome: </label>
            <input className="border rounded-md border-black" type="text" value={nome} onChange={(e)=>setNome(e.target.value)}></input>
            <button className="px-1 py-1 border border-black rounded-md" onClick={()=>armazenar('Ls_nome', nome)}>Gravar Nome</button>
            <button className="px-2 border border-black rounded-md" onClick={()=>consultar('Ls_nome', nome)}>Ver Nome</button>
            <button className="px-2 border border-black rounded-md" onClick={()=>apagar('Ls_nome', nome)}>Remover Nome</button>
            </div>
        </>
    );
}

