import React from 'react';
import "../fonts/static/Outfit-ExtraBold.ttf";

const Title = ({ smallText, bigText }) => {

  const h1Style={
    fontFamily: 'Outfit-bold', 
    color:'white',
    width:'70%',
    height:'auto',
    margin:'25% auto',
    textAlign:'center',
    lineHeight: '0.75'
  }

  const smallTextStyle = {
    fontSize: '32px',
    display: 'inline-block',
    width:'100%',
    marginTop: '0',
    padding: '0',
    textAlign:'right',
    wordWrap: 'break-all',
  };
  const bigTextStyle = {
    fontSize: '70px',
    display: 'flex',
    width:'100%',

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
