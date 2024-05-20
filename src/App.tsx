import React from "react";
import Button from "./Button";

function App() {

  const [ total, setTotal] = React.useState(0);

 function incrementar() {
   setTotal((total) => total + 1);
 }

  return (
      <div>
        <p>Total: {total}</p>
       <Button onClick={incrementar} tamanho="1.5rem">Incrementar 2</Button>
   
      </div>
  )
}

export default App
