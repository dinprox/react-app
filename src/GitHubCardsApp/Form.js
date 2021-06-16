import React from 'react';
import axios from 'axios';

class BrowseForm extends React.Component {

	// userNameInput = React.createRef();
	state = {
		userName : '',
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.userName);
		axios.get(`https://api.github.com/users/${this.state.userName}`)
		.then(({data})=>{
				let profile = {
					name : data.name,
					company : data.company,
					avatar_url : data.avatar_url
				};

				this.props.onSubmit(profile);
		});
	};
	

	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" placeholder="GitHub username" value={this.state.userName} onChange={event=> this.setState({userName : event.target.value})} required  /*ref={this.userNameInput}*//>
        <button>Add card</button>
    	</form>
    );
  }
}

export default BrowseForm