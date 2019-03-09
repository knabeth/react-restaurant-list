import React, { Component } from 'react';
import '../css/Singlerestaurant.css'
import right_arrow from "../assets/images/right_arrow.png"

class SingleRestaurant extends Component {

    render() {

        return (
            <div
             className="single_restaurant"
            >
                <div className="img_container">
                    <img src={ this.props.image } />
                </div>
                <div className="title_container">
                    <h3 className="title">
                        {this.props.title}
                    </h3>
                    <h3 className="rate">
                        {this.props.rate}/5
                    </h3>
                </div>
                <div className="arrow_container">
                    <img src={right_arrow} />
                </div>
            </div>
        );
    }
}

export default SingleRestaurant;
