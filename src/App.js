import "./App.css";
import React from 'react';
import {useState, useEffect} from 'react';
import styled from "styled-components";
import {StartScreen} from './components/StartScreen';
import { MenuScreen } from "./components/MenuScreen";


const MainDiv = styled.div`
  background-color: lightblue;
  width: 100vw;
  height: 100vh;
  @media (min-width: 769px) {
    background-color: blue;
    width: 428px;
    height: 100%;
  }
`;

function App() {
  const [screen, setScreen] = useState('start');

  const handleClick = () => {
    setScreen('menu');
  };

  return (
    <div>
      {screen === 'start' && <StartScreen handleClick={handleClick} />}
      {screen === 'menu' && <MenuScreen/>}
    </div>
  );
}



/*
const App = () => {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [selectedDonut, setSelectedDonut] = useState(null);

  const showScreen = () => {
    switch (currentScreen) {
      case "start":
        //setCurrentScreen("menu");
        return <StartScreen />;
      case "menu":
        return (
          <MenuScreen
            onSelectDonut={flavor => {
              setSelectedDonut(flavor);
              setCurrentScreen("payment");
            }}
          />
        );
      /*case "payment":
        return (
          <PaymentScreen
            selectedDonut={selectedDonut}
            onPaymentSuccess={() => {
              setCurrentScreen("preparation");
            }}
          />
        );
      case "preparation":
        return <PreparationScreen selectedDonut={selectedDonut} />;
      case "ready":
        return <ReadyScreen selectedDonut={selectedDonut} />;*/
/*      default:
        return null;
    }
  };

  return <MainDiv>{showScreen()}</MainDiv>;
};*/

export default App;


/*
import React, { useState } from 'react';

const StartMenu = ({ handleClick }) => {
  return (
    <div>
      <h1>Start Menu</h1>
      <button onClick={handleClick}>Go to Menu</button>
    </div>
  );
};

const NextMenu = () => {
  return (
    <div>
      <h1>Next Menu</h1>
    </div>
  );
};

function App() {
  const [screen, setScreen] = useState('start');

  const handleClick = () => {
    setScreen('menu');
  };

  return (
    <div>
      {screen === 'start' && <StartMenu handleClick={handleClick} />}
      {screen === 'menu' && <NextMenu />}
    </div>
  );
}

export default App;

*/ 