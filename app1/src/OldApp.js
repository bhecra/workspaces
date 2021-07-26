import './App.css';
import { useState } from 'react';

import Counter from './components/Counter';

const App = () => {
  const [contador, setContador] = useState(0);

  const handleClick = (add = true) => {
    return () => {
      const value = add ? contador + 1 : contador - 1;
      setContador(value);
      // setContador(prevContador => prevContador + 1);
    };
  };
  const handleClickReset = () => {
    setContador(0);
  };

  const isEven = contador % 2 === 0;
  return (
    <div className='App'>
      <Counter number={contador} />
      <h1>{isEven ? 'even' : 'odd'}</h1>
      <button onClick={handleClick()}>Incrementar</button>
      <button onClick={handleClick(false)}>Reset</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

export default App;
