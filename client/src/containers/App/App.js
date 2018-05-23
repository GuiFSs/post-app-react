import React, {Component} from 'react';
import './App.css';
import Posts from '../Posts/Posts';
import PostInput from '../../components/PostInput/PostInput';
import Http from '../../util/http';

class App extends Component {
	state = {
		posts: ''
	};

	postBtnHandler = (event) => {
		const post = this.verifyFields();
		if (post === null) return;
		Http.post('http://localhost:5000/api/posts', post)
			.then(result => console.log(result))
			.catch(err => console.log(err));
	}


	verifyFields = () => {
		const title = document.querySelector('#title').value;
		const body = document.querySelector('#body').value;
		if (title.length <= 0 || body.length <= 0) {
			alert('please type something');
			return null;
		}
		return {
			title, 
			body,
			date: new Date().toLocaleDateString()
		};
	}

	render() {
		return (
			<Posts >
				<PostInput postClick={this.postBtnHandler.bind(this)} />
			</Posts>
		);
	}
}

export default App;
