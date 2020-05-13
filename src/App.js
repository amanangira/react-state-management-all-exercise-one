import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './Components/AddUserForm/AddUserForm';
import UsersList from './Components/UsersList/UsersList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
    showGamesPlayed: true,
  	users: []
  }

	removeUser = (id) => {
      this.setState(prev => ({
        users: prev.users.filter(user => user.id !== id)
      }))
	}

	toggleGamesPlayed = () => {
      this.setState(prev => ({
        showGamesPlayed: !prev.showGamesPlayed
      }))
    }

	userNameValid = username => {
      return !this.state.users.find(user => user.username.toLowerCase() === username.toLowerCase());
    }

	addUser = user => {
      this.setState(prev => {
        user.gamesPlayed = 0;
        user.id = prev.users.length && prev.users[prev.users.length - 1].id + 1;
        return { users: prev.users.concat(user) }
      })
    }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<div className="d-flex main-container">
          <AddUserForm 
    		userNameValid={this.userNameValid}
			addUser={this.addUser}
    		/>
          <UsersList
    		users={this.state.users}
			removeUser={this.removeUser}
			showGamesPlayed={this.state.showGamesPlayed}
			toggleGamesPlayed={this.toggleGamesPlayed}
			/>
    	</div>
    	
      </div>
    );
  }
}

export default App;
