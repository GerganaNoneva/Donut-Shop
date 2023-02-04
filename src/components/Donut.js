import React from 'react';

const Donut = ({ name, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export {Donut};
