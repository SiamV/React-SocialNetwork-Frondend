import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/store-redux";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";

//убрали rerenderTree(), т.к. мы используем connect React-Redux, а он сам вызывает подписчиков в контейнерных
// компонентах

//rerenderTree функция, которая в нужный момент перерисовыет всё дерево
// let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }
// rerenderTree(); //запускаем первую отрисовку
//
// //передаем rerenderTree в subscribe
// store.subscribe(() => { //но у меня работало и так: store.subscribe (rerenderTree); Но пишут, что dispatch не
//     // передает state
//     let state = store.getState();
//     rerenderTree(state);
// }); //исключаем циклическую зависимость. используем callback -


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
