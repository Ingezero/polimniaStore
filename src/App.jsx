import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactInfo from './pages/ContactInfo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <div className="placeholderText">
            <Routes>
              <Route path="/" element={<ItemListContainer greetings="Catalogo de productos disponibles" />} />
            </Routes>
            <Routes>
              <Route path="/detalle/:prodId" element={<ItemDetailContainer greetings="Detalles de producto" />} />
            </Routes>
            <Routes>
              <Route path="/contact" element={ <ContactInfo /> } />
            </Routes>
          </div>
        </BrowserRouter>
        <p>
          Luis Castro
        </p>
      </header>
    </div>
  );
}

export default App;