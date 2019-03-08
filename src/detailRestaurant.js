import React from "react";
import './css/DetailRestaurant.css'

class DetailRestaurant extends React.Component {
    render() {
        return (
            <div
                className="detail_restaurant"
            >
             <div
             className="top"
            >
                <div className="img_container">
                    <img src={ this.props.image } />
                </div>
                <div className="title_container">
                    <h2 className="title">
                        {this.props.title}
                    </h2>
                    <h3 className="rate">
                        {this.props.rate}/5
                    </h3>
                </div>
            </div>
            <div className="bottom">
                <div className="description_container">
                    <p>{this.props.description}</p>
                </div>
                <div className="menu_container">
                    <h2>Menu</h2>
                </div>
            </div>
            </div>
        );
    }
}



export default DetailRestaurant;