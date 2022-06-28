import './App.css';
import NavBar from './components/navBar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import React from 'react';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
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
              <Route path="/categoria/:catId" element={<ItemListContainer greetings="Catalogo de productos disponibles" />} />
            </Routes>
            <Routes>
              <Route path="/detalle/:prodId" element={<ItemDetailContainer greetings="Detalles de producto" />} />
            </Routes>
            <Routes>
              <Route path="/contact" element={ <ContactInfo /> } />
            </Routes>
          </div>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;