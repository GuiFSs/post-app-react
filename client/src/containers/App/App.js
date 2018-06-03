import React, {Component} from 'react';
import './App.css';
import Posts from '../Posts/Posts';
import Post from '../../components/Post/Post';
import PostInput from '../../components/PostInput/PostInput';
import Http from '../../util/http';

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		this.updatePostsState();
	}

	postBtnHandler = (event) => {
		const post = this.verifyFields();
		if (post === null) return;
		Http.post('http://localhost:5000/api/posts', post)
			.then(result => {
				this.updatePostsState();
			})
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

	updatePostsState = () => {
		Http.get('http://localhost:5000/api/posts')
		.then(data => {
			this.setState({posts: data});
		})
		.catch (err => console.log(err));
	}

	deletePost = (event, id) => {
		Http.delete(`http://localhost:5000/api/posts/${id}`)
			.then(result => {
				this.updatePostsState();
			})
			.catch(err => console.log(err));
		
		event.preventDefault();
	}


	showPosts = () => {
		return this.state.posts.map((post) => {
			return <Post deletePost={(event) => {this.deletePost(event, post._id)}} key={post._id} _id={post._id} title={post.title} body={post.body} date={post.date} />
		});
	}

	render() {
		let posts = this.showPosts();
		
		return (
			<Posts >
				<PostInput postClick={this.postBtnHandler.bind(this)} />
				<br />
				{posts}
			</Posts>
		);
	}
}

export default App;
