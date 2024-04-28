import React from 'react';
import './assets/styles/App.scss';
import { Header } from './components/partials/Header';

function App() {

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

  return (
    <>
      <Header menuList={exampleList}/>
      <p>test</p>
    </>
  );
}

export default App;
