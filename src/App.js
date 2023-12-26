import React, {useState} from 'react'
import Header from './componentes/Header';
import Body from './componentes/body';
import Relogio from './componentes/Relogio';
import Numero from './componentes/Numero';
import LedAtivo from './componentes/LedAtivo';
import Saudacao from './componentes/Saudacao';
import LoginLogoff from './componentes/LoginLogoff';
import CorTitle from './componentes/CorTitle';
import Car from './componentes/Car';

export default function App() {
  
  const[num, setNum] = useState(10);
  const [ligado, setLigado]=useState(false);
 
  
  return (
    <>
      <Relogio />
      <Header />
      <Body />
      
      <p className='py-4'>Valor do state num em App: {num} </p>
      <Numero num={num} setNum={setNum} />

      <LedAtivo ligado={ligado} setLigado={setLigado} />
      <Saudacao/>
      <LoginLogoff />
      <CorTitle />
      <Car />
       
      </>
    );
}

