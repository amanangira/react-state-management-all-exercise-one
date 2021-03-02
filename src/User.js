import React from 'react';
import propTypes from "prop-types";

function User (props) {
    const user = props.user
    return <li key={user.username}> {user.username}
                <ul>
                    <li>Full Name : { `${user.first_name} ${user.last_name}` }</li>
                    <li>Game count : {user.game_count}</li>
                </ul>
            </li>
}

User.propTypes = {
    user : propTypes.object.isRequired
}

export default User;