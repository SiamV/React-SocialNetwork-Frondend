import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/state";
import App from './App';
import * as serviceWorker from './serviceWorker';

//rerenderTree функция, которая в нужный момент перерисовыет всё дерево
let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                myState={store.getState()}
                addPost={store.addMyPost.bind(store)}
                updateNewPost={store.updateNewPost.bind(store)}
                addMessage={store.addMyMessage.bind(store)}
                updateNewMessage={store.updateNewMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(); //запускаем первую отрисовку

//передаем rerenderTree в subscribe
store.subscribe (rerenderTree); //исключаем циклическую зависимость. используем callback


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();