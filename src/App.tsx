import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import Main from './pages/Main';
import Menu from './component/menu/index';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>

      <div className="App">

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
        </Routes>
      </BrowserRouter>


      </div>
    </Provider>
  );
}

export default App;
