import React from 'react';
import Button from '../componentsAula3/Button';

function AppAula3() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
}

export default AppAula3;