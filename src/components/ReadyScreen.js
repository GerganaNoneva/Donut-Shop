import React from "react";
import styled from "styled-components";

const styleDiv = {
    backgroundColor: '#FFE84A',
    background: 'linear-gradient(46deg,#5739D6 0%,#5739D6 60%,#21E8E5 0%,#21E8E5 40%)',
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

const DoneButton = styled.button`
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

const ReadyScreen = ({donut, doneClick}) => {

    return (
        <div style={styleDiv}>
        <div> 
        <img src={donut.image} alt={donut.name} style={donutStyle}></img>
        </div>
        <h1 style={h1Style}>You can now come and pick your amazing Donut!</h1>
        <DoneButton onClick={doneClick}>Done</DoneButton>
        </div>

    )
}

 export {ReadyScreen};

