import React, { Component } from 'react';

class AddUser extends Component{
    state = {
        user: {
            username : "ramlaal",
            first_name : "Ramlaal",
            last_name : "Mishra",
            game_count: 0
        },
        user_exists: false
    }
    updateContent = (event) => {
        const target = event.target.name;
        let value = event.target.value;
        
        if(target === "username")
        {
            value = value.trim();
        }

        this.setState((currentState) => ({
            ...currentState,
            user: {
                ...currentState.user,
                [target]: value
            }
        }));

        let userexists = this.userExists(this.state.user);

        this.setState({
            user_exists: userexists
        });
    }
    handleSubmit = (event) => {
        let user = this.state.user;
        
        if(!this.state.user_exists)
            this.props.addUser(user);
    }
    userExists = (u) => {
        const users = this.props.users;
        console.log(users);
        if(u.username === '')
            return false;

        for (const user of users) {
            if(user.username === u.username)
            {
                return true;
            }
        }

        return false;
    }
    render(){
        return (
            <div className="add-user-form">
                <form onSubmit={()=>(this.handleSubmit())}>
                    <input 
                        name="username"
                        type="text" 
                        value={this.state.user.username}
                        placeholder="unique username"
                        onChange={(event) => this.updateContent(event)}
                    >
                    </input>

                    <input 
                        name="first_name"
                        type="text" 
                        value={this.state.user.first_name}
                        placeholder="first name"
                        onChange={(event) => this.updateContent(event)}
                    ></input>

                    <input 
                        name="last_name"
                        type="text" 
                        value={this.state.user.last_name}
                        placeholder="last name"
                        onChange={(event) => this.updateContent(event)}
                    >
                    </input>

                    <button 
                        type="submit"
                        disabled={this.state.user_exists || this.state.user.username === ''}
                    >
                        Add</button>
                </form>
            </div>
        )
    }
}

export default AddUser;