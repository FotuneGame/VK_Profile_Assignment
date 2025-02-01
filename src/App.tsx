import React from 'react';
import "./App.styl";
import Button from './components/Button';
import Counter from './components/Counter';
import {handlerButton} from "./stories/utils";

function App() {


  return (
    <div className="App">
        <Button callback={handlerButton} >
          <Button.Label>Что сделать</Button.Label>
          <Counter>120</Counter>
        </Button>
    </div>
  );
}

export default App;