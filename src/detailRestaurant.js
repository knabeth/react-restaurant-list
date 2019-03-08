import React from "react";

class DetailRestaurant extends React.Component {
    render() {
        return (
            <div
                className="detail_restaurant"
            >
            {this.props.name}
            {this.props.description}
            {this.props.menu}
            {this.props.rate}
            {this.props.image}
            </div>
        );
    }
}



export default DetailRestaurant;