import React, { Component } from 'react';
import './css/SideMenu.css';

class SideMenu extends Component {
    state = {
        isOpen: true,
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
        var isOpen = false;
        return (
            <div
                className="side_menu"
            >
                <button
                    onClick={() => { this.toggleMenu() }}
                > toggle </button>
                <div
                    className={this.state.isOpen ? "open" : "close"}
                >
                    YEAH
                </div>
            </div>
        );
    }
}

export default SideMenu;
