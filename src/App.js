import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./UserList";
import AddUser from "./AddUser";
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
    state = {
        users : [
            {
                username: "amanangira",
                first_name: "Aman",
                last_name: "Angira",
                game_count: 0
            },
            {
                username: "nitinpahal",
                first_name: "Nitin",
                last_name: "Pahal",
                game_count: 0
            }
        ]
    }
    addUser = (u) => {
        this.setState((previousState) => ({
            users : [
                ...previousState.users,
                u
            ]
        }));
    }
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
            <div className="d-flex main-container">
                <div className="user-list">
                    <UserList
                        users={this.state.users}
                    />
                </div>
                <div className="add-user">
                    <AddUser
                        addUser={this.addUser}
                        users={this.state.users}
                    />
                </div>
            </div>
            
        </div>
        );
    }
}

export default App;
