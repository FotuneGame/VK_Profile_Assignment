import React from 'react';
import "./App.module.styl";
import Button from './components/Button';

function App() {

  const handlerButton = async () =>{
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Выполнено!');
        },  3000);
    });
  }

  return (
    <div className="App">
        <Button callback={handlerButton} >
          <Button.Label>Что сделать</Button.Label>
          <Button.Counter size={16} pulse={true} >120</Button.Counter>
        </Button>

    </div>
  );
}

export default App;