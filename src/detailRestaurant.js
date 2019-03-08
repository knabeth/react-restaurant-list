import React from "react";
import './css/DetailRestaurant.css'

class DetailRestaurant extends React.Component {
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
                        <div className="menu_items">
                            <div className="items">
                                 <p>Cerises du chef</p>
                            </div>
                            <div className ="price">
                                <p>1000 €</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default DetailRestaurant;