import React from 'react';

// Definindo a interface para os argumentos
interface ComponenteFilhoProps {
  name: string;
  callback: () => void;
}

const ComponenteFilho: React.FC<ComponenteFilhoProps> = ({ name, callback }) => {
  const handleClick = () => {
    // Simulando algum evento ou ação no componente filho
    console.log(`Algo aconteceu em ${name}`);
    
    // Chama a callback para informar ao pai que algo aconteceu
    callback();
  };

  return (
    <div>
      <p>Olá, meu nome é {name}.</p>
      <button onClick={handleClick}>Clique em mim</button>
    </div>
  );
};

export default ComponenteFilho;
