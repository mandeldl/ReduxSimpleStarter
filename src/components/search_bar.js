import React from 'react';  //You always need to import React, even if you're not explicitly calling it.

//ES6 class:
class SearchBar extends React.Component {  //extends functionality of React Component
	render() { //how you define methods on ES6 classes; all React Components must have render method
		return <input />;
	}
}

export default SearchBar;