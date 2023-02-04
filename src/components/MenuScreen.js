import React from 'react';
import {Title} from './Title';
import {useState, useEffect} from 'react';
import {Donut} from './Donut'

const MenuScreen = ({ onSelectDonut }) => {
  const flavors = ["Chocolate", "Strawberry", "Vanilla"];

  return (
    <div>
      <Title text="Select your flavor" />
      {flavors.map(flavor => (
        <Donut key={flavor} name={flavor} onClick={() => onSelectDonut(flavor)} />
      ))}
    </div>
  );
};

export {MenuScreen};