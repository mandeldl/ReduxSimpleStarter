// Create new component, produce some html
import React from 'react';
import ReactDOM from 'react-dom';

import {API_KEY} from './API_KEY';

console.log(API_KEY);

const App = () => {
	return <div>Hello world!!</div>
}

// Put the component into the DOM: first arg is the React Component (<Component />)
// 2nd argument is the html element (why they use class instead of id is not clear...)
ReactDOM.render(<App />, document.querySelector('.container'));