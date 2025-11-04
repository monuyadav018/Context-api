import Item from './components/Item';
import Cart from './components/Cart';
import './App.css';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
     <Item name="Macbook Pro" price={100000}/>
     <Item name="Pendrive" price={4000}/>
     <Item name="Mobile" price={35000}/>
    <Cart/>
    </div>
  );
}

export default App;
