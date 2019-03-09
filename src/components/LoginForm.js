import React, { Component } from 'react';
import "../css/LoginForm.css";
import userlist from "../datas/mock-users.json"

class LoginForm extends Component {
	state = {
		username: "",
		password: "",
		users: [],
		errorMessage: ""
	}
	logIn(e) {
		e.preventDefault()
		this.state.users.map((user)=>{
			if (user.username == this.state.username && user.password == this.state.password) {
				this.setState({ errorMessage: "iozefdsof" })
				console.log("MERDE")
				return;
			}
			else {
				this.setState({ errorMessage: "identifiants inccorect." })
			}
		})
	}
	usernameChange(e) {
		this.setState({ username: e.target.value })
	}
	passwordChange(e) {
		this.setState({ password: e.target.value })
	}
	componentDidMount() {
		this.setState({users: userlist})
	}
	render() {
		return (
			<div className="login_form_container">
				<form className="login_form" onSubmit={(e) => { this.logIn(e) }}>
					<span className="error_message">
						{this.state.errorMessage}
					</span>
					<input
						type="text"
						name="username"
						placeholder="Identifiant"
						value={this.state.username}
						onChange={(e) => { this.usernameChange(e) }} />
					<input
						type="password"
						name="password"
						placeholder="Mot de passe"
						value={this.state.password}
						onChange={(e) => { this.passwordChange(e) }} />
					<input
						type="submit"
						value="Valider" />
				</form>
			</div>
		);
	}
}

export default LoginForm;
