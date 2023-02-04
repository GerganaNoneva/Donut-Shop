import React from "react";
import styled from "styled-components";
import DonutDust from '../assets/unicorn_dust.svg';
import DonutTrueBlood from '../assets/true_blood.svg';
import DonutMarbleMagic from '../assets/marble_magic.svg';
import DonutSkyShaoed from '../assets/sky_shaped.svg';
import {useState, useEffect} from 'react';



const styleDiv = {
    backgroundColor: '#FFE84A',
    width: '100vw',
    height: '100vh'
}

const donutStyle = {
    width: '50%',
    marginTop: '25%',
    marginLeft: '25%',
    animation: 'rotation 5s linear infinite'
}

const h1Style = {
    fontFamily: 'Outfit-bold', 
    color:'white',
    fontSize: '44px',
    textAlign: 'center',
    padding: '50px'
}

const PreparationScreen = ({donut}) => {

    return (
        <div style={styleDiv}>
        <div> 
        <img src={donut.image} alt={donut.name} style={donutStyle}></img>
        </div>
        <h1 style={h1Style}>Preparing</h1>
        </div>
    )
       
}
export {PreparationScreen};
