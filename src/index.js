// Create new component, produce some html
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Components:
import SearchBar from './components/search_bar';  //Note relative paths, .js extension isn't necessary
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Special API Key for YouTube, hidden because of Gitignore
import {API_KEY} from './API_KEY';  

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		//YTSearch takes an object that uses the api key and a search term, 2nd param is callback function for data.
		YTSearch({key: API_KEY, term: 'surfboards'}, videos => { 
			this.setState({ videos }); //cool shortcut when key-value pair are the same word!
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos} />
			</div>
			)
		//You can include components inside others, usually use () for multi-line HTML.
	}
}

// Put the component into the DOM: first arg is the React Component (<Component />)
// 2nd argument is the html element (why they use class instead of id is not clear...)
ReactDOM.render(<App />, document.querySelector('.container'));