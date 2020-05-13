import React, { Component } from 'react';
import './AddUserForm.css'

class AddUserForm extends Component{
  state = {
  	firstName: '',
    lastName: '',
    username: '',
    userNameInvalid: false
  }

	updateValues = (valueKey, value) => {
      	let newValue = {};
      	newValue[valueKey] = value;
    	this.setState(newValue);
    }

	checkValues = () => {
    	return !(this.state.firstName && this.state.lastName && this.state.username);
    }

	handleSubmit = event => {
      	event.preventDefault();
    	if(this.props.userNameValid(this.state.username)) {
          this.props.addUser({
            firstName: this.state.firstName,
		    lastName: this.state.lastName,
		    username: this.state.username
          })
          this.setState({
            firstName: '',
            lastName: '',
            username: '',
			userNameInvalid: false
          })
        } else {
          this.setState({
            userNameInvalid: true
          })
        }
    }

  render() {
	return (
      <div className="Add-user-form">
      	<div className="heading text-center">ADD USERS</div>
      	<form className="form" onSubmit={this.handleSubmit}>
      		<input type="text" onChange={event => {this.updateValues('firstName', event.target.value)}} value={this.state.firstName} placeholder="First name" />
      		<input type="text" onChange={event => {this.updateValues('lastName', event.target.value)}} value={this.state.lastName} placeholder="Last name" />
		    <input type="text" onChange={event => {this.updateValues('username', event.target.value)}} value={this.state.username} placeholder="Username" />

			{ this.state.userNameInvalid ? (<div className="text-center text-danger">Username already exists..!</div>) : '' }
      		<div className="text-center">
	      		<button disabled={this.checkValues()}>Add</button>
			</div>
      	</form>
      </div>
    )
  }
}

export default AddUserForm;