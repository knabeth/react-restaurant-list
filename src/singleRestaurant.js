import React, { Component } from 'react';
import './css/Singlerestaurant.css'
import right_arrow from "./assets/images/right_arrow.png"

class SingleRestaurant extends Component {
  render() {
    return (
      <div className="single_restaurant">
          <div className="img_container">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"/>
          </div>
          <div className="title_container">
            <h3 className="title">
              Restaurant & co.
            </h3>
            <h3 className="rate">
              4.2/5
            </h3>
          </div>
          <div className="arrow_container">
            <img src={right_arrow}/>
          </div>
      </div>
    );
  }
}

export default SingleRestaurant;
