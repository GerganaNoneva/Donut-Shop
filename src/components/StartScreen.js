import React from 'react'
import styled from 'styled-components';
import DonutDust from '../assets/unicorn_dust.svg';
import DonutTrueBlood from '../assets/true_blood.svg';
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
    objectFit: 'cover',
    objectPosition: 'bottom 30px right 30px'
  };

  const styleDonutTrueBlood={
    width: '70%',
    height: 'auto',
    marginLeft: '30%',
    objectFit: 'cover',
    objectPosition: 'top 0 left 15px'
  };

  const styleTitle = {
    alignItems:'center',
  }

  const StartButton = styled.button`
  width: 60%;
  height: auto;
  background-color: white;
  font-size: 44px;
  font-family: 'Outfit-bold';
  margin-botom: 50%;
  margin-left: 25%;
  border: none;
  margin-top: -10%;
  `;


const StartScreen = ({ handleClick }) => {
  
    return (
      <StartDiv>  
        <SvgDiv>
            <img src={DonutDust} alt={DonutDust} style={styleDonutDust}></img>
            <img src={DonutTrueBlood} alt={DonutTrueBlood} style={styleDonutTrueBlood}></img>
        </SvgDiv>
        <Title smallText="THE" bigText="DONUT SHOP" style={styleTitle}/>
        <StartButton onClick={handleClick}>Start</StartButton>
      </StartDiv>
    );
  };
  
  export {StartScreen};
