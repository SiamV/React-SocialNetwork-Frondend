import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, {subscribe} from "./redux/state";
import App from './App';
import {addMyPost, updateNewMessage, updateNewPost} from "./redux/state";
import {addMyMessage} from "./redux/state";
import * as serviceWorker from './serviceWorker';

//rerenderTree функция, которая в нужный момент перерисовыет всё дерево
let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                myState={state}
                addPost={addMyPost}
                updateNewPost={updateNewPost}
                addMessage={addMyMessage}
                updateNewMessage={updateNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(state); //запускаем первую отрисовку

//передаем rerenderTree в subscribe
subscribe (rerenderTree); //исключаем циклическую зависимость. используем callback


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
