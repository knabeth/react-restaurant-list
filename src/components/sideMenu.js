import React, { Component } from 'react';
import '../css/SideMenu.css';
import "../css/Header.css";
import LoginForm from "./LoginForm";

class SideMenu extends Component {
    state = {
        isOpen: false,
    }

    toggleMenu() {
        if (this.state.isOpen) {
            this.setState({ isOpen: false })
        } else {
            this.setState({ isOpen: true })
        }
        console.log(this.state.isOpen)
    }

    render() {
        return (
            <div
                className="side_menu"
            >
                <div
                    onClick={() => { this.toggleMenu() }}
                    className={this.state.isOpen ? "open burger_menu_container" : "close burger_menu_container"}>
                    <div className="burger_top"></div>
                    <div className="burger_mid"></div>
                    <div className="burger_bot"></div>
                </div>
                <div className={this.state.isOpen ? "open menu_container" : "close menu_container"}>
                    <LoginForm/>
                </div>
            </div>
        );
    }
}

export default SideMenu;
