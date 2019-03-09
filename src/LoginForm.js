import React, { Component } from 'react';
import "./css/LoginForm.css";

class LoginForm extends Component {
	state = {
		username: "",
		password: ""
	}
	logIn(e) {
		e.preventDefault()
	}
	usernameChange(e) {
		this.setState({username: e.target.value})
		console.log(this.state.username)
	}
	render() {
		return (
			<div className="login_form_container">
				<form className="login_form" onSubmit={(e) => { this.logIn(e)}}>
					<input
						type="text"
						name="username"
						placeholder="Identifiant"
						value={this.state.username}
						onChange={(e) => {this.usernameChange(e)}}/>
					<input
						type="password"
						name="password"
						placeholder="Mot de passe"
						value={this.state.password}/>
					<input
						type="submit"
						value="Valider"/>
				</form>
			</div>
		);
	}
}

export default LoginForm;
