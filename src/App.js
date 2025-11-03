import Count from './components/Count';
import { useContext } from 'react';
import { ConterContext } from './context/Counter';
import './App.css';

function App() {
  const counterState= useContext(ConterContext);
  // console.log("context",counterState);
  return (
    <div className="App">
      <h1>the count is {counterState.count}</h1>
      <Count/>
      <Count/>
      <Count/>
      <Count/>

    </div>
  );
}

export default App;
