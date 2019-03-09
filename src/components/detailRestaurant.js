import React, { Component } from 'react';
import '../css/DetailRestaurant.css'

class DetailRestaurant extends Component {
    render() {
        return (
            <div
                className="detail_restaurant"
            >
                <div
                    className="left"
                >
                    <div className="img_container">
                        <img src={this.props.image} />
                    </div>
                    <div className="description_container">
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className="right">
                    <div className="title_container">
                        <h2 className="title">
                            {this.props.title}
                        </h2>
                        <h3 className="rate">
                            {this.props.rate}/5
                    </h3>
                    </div>
                    <div className="menu_container">
                        <h2>Menu</h2>
                        {
                            this.props.menu.map((item, index) =>
                                <div className="menu_items">

                                    <div className="items">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="price">
                                        <p>{item.price}€</p>
                                    </div>
                                </div>

                            )}

                    </div>
                </div>
            </div>
        );
    }
}



export default DetailRestaurant;