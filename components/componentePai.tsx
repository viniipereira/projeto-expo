import React, { useState } from 'react';
import ChildComponent from './componenteFilho';

const ComponentePai: React.FC = () => {
  const [mensagem, setMensagem] = useState<string>('');

  const handleChildEvent = () => {
    setMensagem('Algo aconteceu no filho!');
  };

  return (
    <div>
      <h1>Componente Pai</h1>
      <p>{mensagem}</p>
      <ChildComponent name="Filho" callback={handleChildEvent}/>
    </div>
  );
};

export default ComponentePai;
