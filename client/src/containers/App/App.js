import React, {Component} from 'react';
import './App.css';
import Posts from '../Posts/Posts';
import PostInput from '../../components/PostInput/PostInput';

class App extends Component {
	state = {
		response: ''
	};

	render() {
		return (
			<Posts >
				<PostInput />
			</Posts>
		);
	}
}

export default App;
