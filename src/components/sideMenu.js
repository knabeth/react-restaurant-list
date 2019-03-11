import React, { Component } from 'react';
import '../css/SideMenu.css';
import "../css/Header.css";
import LoginForm from "./LoginForm";
import Filter from "./filter"

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
        let button;
        let content;

        if (this.props.buttonType == "burger") {
            button =
                <div>
                    <div className="burger_top bar"></div>
                    <div className="burger_mid bar"></div>
                    <div className="burger_bot bar"></div>
                </div>
        }
        else if (this.props.buttonType == "icon") {
            button =
                <div>
                    <img className="button_icon" src={this.props.imageSrc} />
                </div>
        }
        if (this.props.contentType == "form") {
           content =
            <LoginForm isLoged={this.props.isLoged}/>
        }
        else if (this.props.contentType == "filter") {
            content =
            <Filter/>
        }
        return (
            <div className={"side_menu " + this.props.side}>
                <div
                    onClick={() => { this.toggleMenu() }}
                    className={this.state.isOpen ? "open button_container" : "close button_container"}>
                    {button}
                </div>
                <div className={this.state.isOpen ? "open menu_container" : "close menu_container"}>
                    {content}
                </div>
            </div>
        );
    }
}

export default SideMenu;
