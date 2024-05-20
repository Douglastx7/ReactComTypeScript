import React from 'react';




type ButtonProps = React.ComponentProps<"button"> & {
    tamanho?: string;
}

const Button = ({tamanho, children, ...pros}:ButtonProps) => {
  return (
    <button style={{fontSize: tamanho}} {...pros}>{children}</button>
  )
}

export default Button;