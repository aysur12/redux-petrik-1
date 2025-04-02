import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const initialState = {
  value: 0,
};

const decBtn = document.querySelector('#decrement');
const incBtn = document.querySelector('#increment');
const rndBtn = document.querySelector('#random');
const counter = document.querySelector('#counter');

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DEC':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'RND':
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
const updateCounter = () => {
  counter.innerHTML = store.getState().value;
};
store.subscribe(updateCounter);

// action creator
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', payload: value });

decBtn.addEventListener('click', () => {
  store.dispatch(dec());
});

incBtn.addEventListener('click', () => {
  store.dispatch(inc());
});

rndBtn.addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});

// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

ReactDOM.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
  document.getElementById('root')
);
