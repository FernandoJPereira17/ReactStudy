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
import FormState from './componentes/FormState';
import Nota from './componentes/Nota';
import Resultado from './componentes/Resultado';
import UseEffect from './componentes/UseEffect';
import LocalStorage from './componentes/LocalStorage';
import Classes from './componentes/Classes';

export default function App() {
  
  const[num, setNum] = useState(10);
  const [ligado, setLigado]=useState(false);

      //primeira forma...
      const [nota1, setNota1] = useState(0);
      const [nota2, setNota2] = useState(0);
      const [nota3, setNota3] = useState(0);
      const [nota4, setNota4] = useState(0);

      //melhor forma de fazer... Um State para vários elementos...
      const [notas, setNotas] = useState({"nota1":"0", "nota2":"0", "nota3":"0", "nota4":"0"});
      const handleSetNotas=(e)=>{
        if(e.target.getAttribute('name' == 'nota1')){
          setNotas({"nota1":e.target.value, "nota2":notas.nota2, "nota3":notas.nota3, "nota4":notas.nota4})
        } else if(e.target.getAttribute('name' == 'nota1')){
          setNotas({"nota1":notas.nota1, "nota2":notas.e.target.value, "nota3":notas.nota3, "nota4":notas.nota4})
        } else if(e.target.getAttribute('name' == 'nota1')){
          setNotas({"nota1":notas.nota1, "nota2":notas.nota2, "nota3":e.target.value, "nota4":notas.nota4})
        } else if(e.target.getAttribute('name' == 'nota1')){
          setNotas({"nota1":notas.nota1, "nota2":notas.nota2, "nota3":notas.nota3, "nota4":e.target.value})
        }
      }
   
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
      <FormState />
      <Nota num={1} nome={nota1} nota={nota1} setNota={setNota1} />
      <Nota num={2} nome={nota2} nota={nota2} setNota={setNota2}/>
      <Nota num={3} nome={nota3} nota={nota3} setNota={setNota3}/>
      <Nota num={4} nome={nota4} nota={nota4} setNota={setNota4}/>
      <Resultado somaNotas={parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)} />

      <UseEffect/>

      <LocalStorage />
      <Classes />

      </>
    );
}



