import React from 'react';
import ReactDOM from 'react-dom'
import MyProjectApp from './App';

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MyProjectApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});