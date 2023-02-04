import "./App.css";
import React from 'react';
import {useState, useEffect} from 'react';
import styled from "styled-components";
import {StartScreen} from './components/StartScreen';
import { MenuScreen } from "./components/MenuScreen";
import {PaymentScreen} from './components/PaymentScreen';
import {PreparationScreen} from './components/PreparationScreen'
import {ReadyScreen} from './components/ReadyScreen'

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
  const [selectedDonut, setSelectedDonut] = useState(null); 
  const [showReadyScreen, setShowReadyScreen] = useState(false);

  const handleClick = () => {
    setScreen('menu');
  };
  
  const onSelectDonut = (donut) => {
    setScreen('payment');
    setSelectedDonut(donut);
  };

  const payClick = () => {
    setScreen('preparation');
   
  };

  useEffect(() => {
    if (screen === 'preparation') {
      setTimeout(() => {
        setShowReadyScreen(true);
      }, 5000);
    }
  }, [screen]);

  return (
    <MainDiv>
      {screen === 'start' && <StartScreen handleClick={handleClick} />}
      {screen === 'menu' && <MenuScreen onSelectDonut={onSelectDonut}/> }
      {screen === 'payment' && <PaymentScreen payClick={payClick}/>}
      {screen === 'preparation' && <PreparationScreen donut={selectedDonut}/>}
      {showReadyScreen && <ReadyScreen donut={selectedDonut}/>}

    </MainDiv>
  );
}

export default App;
