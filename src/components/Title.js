import React from 'react';
import "../fonts/static/Outfit-ExtraBold.ttf";

const Title = ({ smallText, bigText }) => {

  const h1Style={
    color:'white',
    width:'70%',
    height:'auto',
    margin:'25% auto',
    textAlign:'center',
    lineHeight: '0.75'

  }

  const smallTextStyle = {
    fontSize: '32px',
    fontFamily: 'Outfit-bold', 
    display: 'inline-block',
    width:'100%',
    marginTop: '0',
    padding: '0',
    textAlign:'right',
  };
  const bigTextStyle = {
    fontSize: '70px',
    display: 'flex',
    width:'100%',
    fontFamily: 'Outfit-bold', 
    overflow: 'hidden',
    wordWrap: 'break-all',
    textAlign:'center',
    marginTop: '0',
    justifyContent:'center',
    alignItems: 'center',
    textJustify: 'auto'
  };



  return (
    <h1 style={h1Style}>
      <span style={smallTextStyle}>{smallText}</span>
      <div>{'\n'}</div>
      <span style={bigTextStyle}>{bigText}</span>
    </h1>
  );
};

export {Title};
