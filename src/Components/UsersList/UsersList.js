import React from 'react';
import './UsersList.css';

function UsersList(props) {
  	const { users, removeUser, showGamesPlayed, toggleGamesPlayed } = props;
	return (
      <div className="Users-list">
      	<div className="heading">USERS</div>
      	{
      		users.length ? (
              <div className="toggle-button-container">
                <button className="toggle-button" onClick={toggleGamesPlayed}>{showGamesPlayed ? 'Hide' : 'Show'} the Number of Games Played</button>
              </div>
    		) : ''
      	}
      
      { users.length
		? (
          <ul className="users">
              {
                  users.map(user => (
                      <li key={user.id} className="d-flex justify-content-between align-items-center">
                          <div>
                              <div>{user.firstName} {user.lastName}</div>
                              <small>
                                  <span className="username">{user.username}</span> played {showGamesPlayed ? user.gamesPlayed : '*'} games.
                              </small>
                          </div>
                          <div className="remove" onClick={() => removeUser(user.id)}>&#x2715;</div>
                      </li>
                  ))
              }
          </ul>
		)
		: (<h4 className="text-center">No Users Added..!</h4>)
      }
      </div>
    )
}

export default UsersList;