import React from 'react';
import Hijo from './Hijo';

const Padre = () => {
  const mensaje = 'Hola desde el componente padre!';

  return (
    <div>
      <h1>Componente Padre</h1>
      <Hijo mensaje={mensaje} />
    </div>
  );
};

export default Padre;
