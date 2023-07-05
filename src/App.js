import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './layout/Header';
import Universities from './pages/Universities';
import { useState } from 'react';
import { UnisContext } from './context';

function App() {
  const [universities, setUniversities] = useState([]);
  return (
    <UnisContext.Provider value={{universities, setUniversities}}>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/universities/:keyword" element={<Universities/>}/>
        </Routes>
      </BrowserRouter>
    </UnisContext.Provider>

  );
}

export default App;
