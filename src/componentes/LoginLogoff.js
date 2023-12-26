import React, { useState } from "react";

export default function LoginLogoff() {

    //Renderizar uma condição de Login e Logoff//
    const [log, setLog] = useState(false);

    const msglogin = () => {
        return 'Usuário Logado!!!'
    }
    const msglogoff = () => {
        return 'Favor Logar!!!'
    }

     //Usar o cancelar para link, caso não queira abrir o link
  //isso para informar que em React seria diferente...
  const cancelar=(obj)=>{
    return obj.preventDefault();
    //return false;
  }
    return (
        <>
        <a className='flex-1 gap-3 px-4 py-2 bg-sky-600 border border-black rounded-md' href='http://youtube.com.br' 
         target='_blank' 
         onClick={(e)=>cancelar(e)}>Curso React</a>

        <p className='py-10'>{log?msglogin():msglogoff()}</p>
         <button 
         className='uppercase flex-1 px-10 py-2 bg-sky-600 w-50 text-white 
         border border-black rounded-md'
         onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button> 
        </>
    );
}
