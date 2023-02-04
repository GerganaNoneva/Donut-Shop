import React from 'react';
import {Title} from './Title';
import {useState, useEffect} from 'react';
import {Donut} from './Donut'
import styled from 'styled-components';
import DonutDust from '../assets/unicorn_dust.svg';
import DonutTrueBlood from '../assets/true_blood.svg';
import DonutMarbleMagic from '../assets/marble_magic.svg';
import DonutSkyShaoed from '../assets/sky_shaped.svg';

const Menu = styled.div`
    background-color: #21E8E5;
    width: 100%;
    height: 125%;
    margin-top: -25%;
`;

const MenuScreen = ({ onSelectDonut }) => {
    const donuts=[{name:'SKY SHAPED', image:DonutSkyShaoed}, {name:'MARBLE MAGIC', image:DonutMarbleMagic},
    {name:'TRUE BLOOD', image:DonutTrueBlood },{name:'UNICORN DUST', image:DonutDust}]
  
  return (
    <Menu>
        <div style={{paddingTop: '50px'}}> 
      <Title smallText="THE" bigText="MENU" />
      </div>
        {donuts.map(donut => (
        <div onClick={() => onSelectDonut(donut)} >
        <Donut key={donut.name} image={donut.image} src={donut.image} name={donut.name} />
        </div>
      ))}
    </Menu>
  );
};

export {MenuScreen};
