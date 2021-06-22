import React, {useState} from 'react';
import axios from 'axios';

function BrowseForm (props){
	const state = useState({
		userName : '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(state.userName);
		axios.get(`https://api.github.com/users/${state.userName}`)
		.then(({data})=>{
			props.onSubmit(data);
			state.userName = '';
		});
	};
	
	return (
    	<form onSubmit={handleSubmit}>
    	  <input type="text" placeholder="GitHub username" value={state.userName} onChange={event=> state.userName = event.target.value} required  /*ref={this.userNameInput}*//>
        <button>Add card</button>
    	</form>
    );
}

/*
// Component class version 
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
			this.props.onSubmit(data);
			this.setState({userName : ''});
		});
	};
	
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" placeholder="GitHub username" value={this.state.userName} onChange={event=> this.setState({userName : event.target.value})} required  />
        <button>Add card</button>
    	</form>
    );
  }
}
*/

export default BrowseForm