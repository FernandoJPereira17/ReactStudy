import React, { useState } from "react";

export default function FormState() {

    const [nome, setNome] = useState('Digite o seu nome');
    const [carro, setCarro] = useState('HRV');

    //Facilita a criação de um State para vários elementos... (Elevação de State)
       const [form, setForm] = useState ({"name":"", "curso":"", "ano":""});
    
    const handleChangeNome=(e)=>{
        setNome(e.target.value)
    }

    const handleFormChange=(e)=>{
        if (e.target.value ('name') == 'fname'){
            setForm({"name":e.target.value, "curso":form.curso, "ano":form.ano});
        }else if (e.target.getAttribute('name') == 'fcurso') {
            setForm({"name":form.name, "curso":e.target.value, "ano":form.ano});
        }else if (e.target.getAttribute('name') == 'fano') {
            setForm({"name":form.name, "curso":form.curso, "ano":e.target.value});
        }
    }

    return (
        <>
            <label>Digite seu nome: </label>
            <input className="border border-black" 
                   type="text" name="fnome" 
                   value={nome} onChange={(e)=>handleChangeNome(e)}/>
            <p>Nome Digitado: {nome}</p>
            
            <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
                <option value='HRV'>HRV</option>
                <option value='Golf'>Golf</option>
                <option value='Cruze'>Cruze</option>
                <option value='Argo'>Argo</option>
            </select>
            <p>Carro Selecionado:{carro}</p>

            <label>Nome</label>
            <input className="border border-black" type="text" name="fname" value={form.name} onChange={(e)=>handleFormChange(e)}/><br/>
            <label>Curso</label>
            <input className="border border-black" type="text" name="fcurso" value={form.curso} onChange={(e)=>handleFormChange(e)}/><br/>
            <label>Ano</label>
            <input className="border border-black" type="text" name="fano" value={form.ano} onChange={(e)=>handleFormChange(e)}/><br/>

            <p>Nome Digitado: {form.name}</p>
            <p>Nome Digitado: {form.curso}</p>
            <p>Nome Digitado: {form.ano}</p>

        </>
    );
}
