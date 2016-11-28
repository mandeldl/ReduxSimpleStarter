// Create new component, produce some html
import React from 'react';
import ReactDOM from 'react-dom';

//Components:
import SearchBar from './components/search_bar';  //Note relative paths, .js extension isn't necessary

import {API_KEY} from './API_KEY';  //hidden because of Gitignore

const App = () => {
	return (
			<div>
				<SearchBar />  
			</div>
			)
		//You can include components inside others, usually use () for multi-line HTML.
}

// Put the component into the DOM: first arg is the React Component (<Component />)
// 2nd argument is the html element (why they use class instead of id is not clear...)
ReactDOM.render(<App />, document.querySelector('.container'));