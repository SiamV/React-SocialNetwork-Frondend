import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMyPost} from "./redux/state";
import {addMyMessage} from "./redux/state";

export let rerenderTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App myState={state} addPost={addMyPost} addMessage={addMyMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
