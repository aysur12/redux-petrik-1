import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
// import * as actions from './actions';
import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(reducer);

// const { dispatch, subscribe, getState } = store;
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter
        counter={getState().value}
        inc={inc}
        dec={dec}
        rnd={() => {
          const value = Math.floor(Math.random() * 10);
          rnd(value);
        }}
      /> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// update();
// subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

//

// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);
