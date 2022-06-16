import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greetings="Bienvenidos al Placeholder para lista de items." className="placeholderText"/>        <p>
          Luis Castro
        </p>
      </header>
    </div> 
  );
}

export default App;