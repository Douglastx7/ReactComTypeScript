import React from 'react';

type ButtonPros = {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const Button = ({ total, setTotal }: ButtonPros) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};

export default Button;