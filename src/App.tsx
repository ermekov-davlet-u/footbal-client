import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import Main from './pages/Main';
import Menu from './component/menu/index';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from './component/Header/index';
import Games from './pages/Games';

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
          <Route path="/list" element={<Games />}>
          </Route>
        </Routes>
      </BrowserRouter>


      </div>
    </Provider>
  );
}

export default App;
