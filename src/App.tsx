import React, { useDebugValue, useEffect } from 'react';
import './assets/styles/App.scss';
import { Header } from './components/partials/Header';
import { Home } from './components/Home';
import {Route, Routes, useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();

  const exampleList = [
    {
      link: "/",
      text: "Home"
    },
    {
      link: "/contact",
      text: "Contact"
    }
  ]

  useEffect(() => {
    console.log(location);
  },[location.pathname])

  return (
    <>
      <Header menuList={exampleList}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
