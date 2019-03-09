import React, { Component } from 'react';
import "./css/LoginForm.css";

class LoginForm extends Component {
logIn() {
	alert("login")
}
	render() {

		return (
			<div className="login_form_container">
				<form className="login_form" onSubmit={()=> {this.logIn()}}>
					<input type="text" name="username" placeholder="Identifiant" />
					<input type="password" name="password" placeholder="Mot de passe" />
					<input type="submit" value="Valider" />
				</form>
			</div>
		);
	}
}

export default LoginForm;
