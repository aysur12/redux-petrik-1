import React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button className="btn btn-danger" onClick={dec}>Decrement</button>
      <button className="btn btn-primary" onClick={inc}>Increment</button>
      <button className="btn btn-secondary" onClick={rnd}>Random</button>
    </div>
  );
};

export default Counter;
