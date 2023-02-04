import "./App.css";
import React from 'react';
import {useState, useEffect} from 'react';
import styled from "styled-components";
import {StartScreen} from './components/StartScreen';


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

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [selectedDonut, setSelectedDonut] = useState(null);

  const showScreen = () => {
    switch (currentScreen) {
      case "start":
        return <StartScreen />;
     /* case "menu":
        return (
          <MenuScreen
            onSelectDonut={flavor => {
              setSelectedDonut(flavor);
              setCurrentScreen("payment");
            }}
          />
        );
      case "payment":
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
      default:
        return null;
    }
  };

  return <MainDiv>{showScreen()}</MainDiv>;
};

export default App;
