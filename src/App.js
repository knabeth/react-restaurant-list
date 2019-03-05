import React, { Component } from 'react';
import restaurantList from './mock-restaurant-list.json';
import SingleRestaurant from './singleRestaurant';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  state = {
    restaurant: []
  }
  componentDidMount() {
    this.setState({ restaurant: restaurantList })
  }
  goToDetailPage(restaurant) {
    console.log(restaurant)    
  }
  render() {
    return (
      <div className="App">
        <ul>
          {
          this.state.restaurant.map((item,index) => 
          <div
            onClick={() => {this.goToDetailPage(item)}}
          >
          <SingleRestaurant
            title={item.name}
            image={item.image}
            rate={item.rate}
            key={index}
          />
          </div>
            
          )}
        </ul>

      </div>
    );
  }
}

export default App;
