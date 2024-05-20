import React from 'react';
import Input from '../componentsAula2/Input';

const AppAula2 = () => {
  const [data, setData] = React.useState("");
  return (
    <div>
        <p>Início da Viagem: {data}</p>
        <Input id="email" label="Email" type="email"/>
        <Input id="nome" label="Nome"/>
        <Input value={data} onChange={(event) => setData(event.currentTarget.value)} id="inicio" label="Início da Viagem" type="date"/>
        <Input id="horario" label="Horário" type="time"/>
    </div>
  )
}

export default AppAula2;