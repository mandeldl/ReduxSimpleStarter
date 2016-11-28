//You always need to import React, even if you're not explicitly calling it.

import React, { Component } from 'react';  //import React.Component as Component (ES6 destructuring)

//ES6 class:
class SearchBar extends Component {  //extends functionality of React Component
	render() { //how you define methods on ES6 classes; all React Components must have render method
		return <input />;
	}
}

export default SearchBar;