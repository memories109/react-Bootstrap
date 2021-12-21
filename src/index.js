import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';

let alertConstructor = true;
//Cart에서만 사용되는 reducer2는 사용안하고 Cart안에서 useState로 사용하도록 한다.
function reducer2(state = alertConstructor, action){
  if (action.type === 'close') {
    state = false;
    return  state;
  }else {
    return state
  }
}

let basic = [
  {id : 0, name : '멋진신발0', quan : 2},
  {id : 1, name : '멋진신발1', quan : 4},
  {id : 2, name : '멋진신발2', quan : 6},
  {id : 3, name : '멋진신발3', quan : 8}
];

function reducer(state = basic , action){
  if(action.type === 'withAdd'){
    let copy = [...state];
    copy.push(action.payload);
    return copy
  }else if (action.type === 'countup') {
    
    let copy = [...state];
    copy[0].quan++;
    return copy
  }else if (action.type === 'countdown') {
    let copy = [...state];
    if(copy[0].quan > 0 ){
      copy[0].quan--;
    }
    return copy
  }else {
    
    return state
  }
}

let store = createStore( combineReducers({reducer,reducer2}) );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
