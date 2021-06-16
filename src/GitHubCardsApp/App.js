import './App.css';
import React from 'react';
import CardList from './CardList';
import BrowseForm from './Form'
import {testData} from './data'

class App extends React.Component {

    state = {
        profiles : testData,
        title : this.props.title
    };

    addNewProfile = (profile) => {
        this.setState(prevState=>({
            profiles : [...prevState.profiles, profile]
        }));
    };

    render() {

        return (
            <div>
                <div className="header">{this.state.title}</div>
                <BrowseForm profiles={this.state.profiles} onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}


export default App;
