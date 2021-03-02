import React, { Component } from 'react';
import User from "./User";

class UserList extends Component{
    render(){
        return <div className="user-list">
            <ol>
                {this.props.users.map((user) => (
                        <User
                            key={user.username}
                            user={user}
                        />
                    ) 
                )}
            </ol>
        </div>
    }
}

export default UserList;