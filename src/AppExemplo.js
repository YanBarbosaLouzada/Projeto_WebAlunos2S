import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Botao from './button/Botao';
function AppExemplo() {
    const [logado,setlogado] = useState(false)
    const [useEffectCounter, SetUseEffectCounter] = useState(0);

    useEffect(()=>{
      console.log("Useefect chamado")
      SetUseEffectCounter(useEffectCounter + 1);
    },[logado])
    
    const Logar = ()=>{
      setlogado(true);
    }

    const Deslogar = () => {
      setlogado(false);
    }

  return (
    <div >
     <h1> Use effect foi chamado {useEffectCounter} vezes</h1>
     <Botao tarefa={Logar} classe="botao red"> Fazer Login </Botao>
     <Botao tarefa={Deslogar} classe="botao purple"> Deslogar </Botao>
    
    </div>
  );
}

export default AppExemplo;
