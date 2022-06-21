import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <ItemListContainer greetings="Bienvenidos al Placeholder para lista de items." className="placeholderText"/> */}
        <ItemDetailContainer greetings="Placeholder para details." className="placeholderText"/>
        <p>
          Luis Castro
        </p>
      </header>
    </div> 
  );
}

export default App;