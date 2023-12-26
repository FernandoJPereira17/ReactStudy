import React, {useState} from 'react'
import Header from './componentes/Header';
import Body from './componentes/body';
import Relogio from './componentes/Relogio';
import Numero from './componentes/Numero';
import LedAtivo from './componentes/LedAtivo';


export default function App() {
  
  const[num, setNum] = useState(10);
  const [ligado, setLigado]=useState(false);

  const cancelar=(obj)=>{
   return obj.preventDefault();
  }
      
  return (
    <>
      <Relogio />
      <Header />
      <Body />
      <p className='py-4'>Valor do state num em App: {num} </p>
      <Numero num={num} setNum={setNum} />

      <LedAtivo ligado={ligado} setLigado={setLigado} />

      <a className='flex-1 gap-3 px-4 py-2 bg-sky-600 border border-black rounded-md' href='http://youtube.com.br' 
         target='_blank' 
         onClick={(e)=>cancelar(e)}
      >Curso React</a>
      </>
    );
}