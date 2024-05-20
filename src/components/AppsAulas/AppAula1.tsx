import React from 'react'
import Button from '../componentsAula1/Button';

const AppAula1 = () => {
  const [ total, setTotal] = React.useState(0);
  function incrementar() {
    setTotal((total) => total + 1);
  }
  return (
    <div>
        <p>Total: {total}</p>
        <Button id="botao-principal" className="btn" onClick={incrementar} tamanho="1.5rem">Incrementar</Button>      
    </div>
  )
}

export default AppAula1;