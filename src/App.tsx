import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import Main from './pages/Main';
import Menu from './component/menu/index';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from './component/Header/index';
import Games from './pages/Games';
import Adding from './pages/form';
import ClubForm from './pages/form/Club';
import LoginPage from './pages/form/Login';

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list" element={<Games />}>
          </Route>
          <Route path="/forme" element={<Adding />}>
            <Route path="club" element={<ClubForm />} />
          </Route>
        </Routes>
      </BrowserRouter>


      </div>
    </Provider>
  );
}

export default App;
