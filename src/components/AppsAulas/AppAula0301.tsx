import React from 'react'
import Input from '../componentsAula0301/Input';



type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
}


const AppAula0301 = () => {
   const [inicio, setInicio] = React.useState("");
   const [final, setFinal] = React.useState("");
   const [data, setData] = React.useState<null | Venda[]>(null);


   React.useEffect(() => {
      if(inicio !== "" && final !== "") {
        fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`).then
        (r => r.json().then(json => setData(json as Venda[])).catch(error => console.log(error)))
      }
   }, [inicio, final])

  return (
    <div>
      <div>
        <Input label='Início' type='date' setState={setInicio} value={inicio}/>
        <Input label='Final' type='date' setState={setFinal} value={final}/>
      </div>
      
      <ul>
         {data !== null && data.map(venda => <li key={venda.id}>{venda.nome}: {venda.status}</li>)}
      </ul>

    </div>
  )
}

export default AppAula0301;







































// import React from 'react'
// import Button from '../componentsAula0301/Button';


// function user() {
//     return {
//         nome: "Douglas",
//         profissao: "Front end"
//     }
// }

// type User = {
//     nome: string;
//     profissao: string;
// }

// const AppAula0301 = () => {
//     const [data, setData] = React.useState<null | User>(null);
//     const [total, setTotal] = React.useState(0);

//     React.useEffect(() => {
//       setTimeout(() => {
//         setData(user())
//       },1000)
//     }, []);

//   return (
//     <div>
//          <div>
//             <p>Total: {total}</p>
//             <Button incrementar={setTotal}/>
//          </div>

//       {data !== null && <div>{data.nome}: {data.profissao}</div>}
//     </div>
//   )
// }

// export default AppAula0301;