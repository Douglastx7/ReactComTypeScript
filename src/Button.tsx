import React from 'react';

type  ButtonProps = {
    tamanho?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = (props:ButtonProps) => {
  return (
    <button onClick={props.onClick} style={{fontSize: props.tamanho}}>{props.children}</button>
  )
}

export default Button;