import React from 'react'
import styled from 'styled-components';
import DonutDust from '../assets/unicorn_dust.svg';
import DonutTrueBlood from '../assets/true_blood.svg';
import Sparkles from '../assets/sparkles.svg';
import { Title } from './Title';


const StartDiv = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
        -55deg,
        #FF86B3 0%,
        #FF86B3 60%,
        #FFE84A 0%,
        #FFE84A 40%
      );
    align-items: 'center';
    display: 'flex';
`; 

const SvgDiv = styled.div`
    width: 100%;
    height: 45%;
`;

const styleDonutDust ={
    width: '50%',
    height: 'auto',
    marginTop: '-10%',
    marginLeft: '-10%'
  };

  const styleDonutTrueBlood={
    width: '70%',
    height: 'auto',
    marginTop: '-10%',
    marginLeft: '35%'
  };
  const styleSparkles={
    width: '500px',
    height:'auto',
    position: 'absolute',
    marginTop: '-50%',
    marginLeft: '15%'
  }

  const styleTitle = {
    alignItems:'center',
  }

  const StartButton = styled.button`
  width: 60%;
  height: auto;
  background-color: white;
  font-size: 44px;
  font-family: 'Outfit-bold';
  margin-top: 0;
  margin-left: 25%;
  `;

const StartScreen = () => {

    return (
      <StartDiv>  
        <div>
        <img src={Sparkles} style={styleSparkles} />     
        </div>
        <SvgDiv>
            <img src={DonutDust} alt={DonutDust} style={styleDonutDust}></img>
            <img src={DonutTrueBlood} alt={DonutTrueBlood} style={styleDonutTrueBlood}></img>
        </SvgDiv>
        <Title smallText="THE" bigText="DONUT SHOP" style={styleTitle}/>
        <StartButton>START</StartButton>
      </StartDiv>
    );
  };
  
  export {StartScreen};