import React from 'react';
import styled from 'styled-components';


const styleDiv= {  
    width:'100%',
    height: '100px',
    verticalAlign: 'middle'

}

const styleP = {
    fontSize: '32px',
    fontFamily: 'Outfit-bold', 
    color: 'white',
    width: '30%',
    height: '100%',
    marginLeft: '90px',
    display: 'flex',
    flexDirection: 'row',
    wordWrap: 'break-all',
    textAlign: 'right',
    lineHeight: '0.75',
    alignItems: 'center',
}

const styleSvg ={
    width:'100%', 
    marginLeft: '10px',
    animation: 'rotation 5s linear infinite'
}

const imgSvg = styled.img`
  width: 100%;
  height: auto;
  animation: rotation 5s linear infinite;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Donut = ({ image , name}) => {
  return (
    <div style={styleDiv}>
      <p style={styleP}>{name} <img src={image} alt={name} style={styleSvg}  /></p>
    </div>
  );
};

export {Donut};
