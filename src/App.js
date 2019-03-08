import React, { Component } from 'react';
import Popup from "reactjs-popup";


import restaurantList from './mock-restaurant-list.json';

import SideMenu from './sideMenu';
import SingleRestaurant from './singleRestaurant';
import DetailRestaurant from './detailRestaurant';



class App extends Component {
  state = {
    restaurant: [],
    isOpenModal: false,
    focusedRestaurant: {}
  }
  componentDidMount() {
    this.setState({ restaurant: restaurantList })
  }

  openDetailModal(restaurant) {
    console.log(restaurant)
    this.setState({ focusedRestaurant: restaurant })
    this.setState({ isOpenModal: true })
    console.log(this.state.isOpenModal)
  }

  closeDetailModal() {
    this.setState({ isOpenModal: false })
  }

  render() {
    return (
      <div className="App">
      <SideMenu/>
        <ul>
          {
            this.state.restaurant.map((item, index) =>
              <div
                className="single_restaurant_container"
                onClick={() => { this.openDetailModal(item) }}
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
        <Popup
          open={this.state.isOpenModal}
          onClose={() => { this.closeDetailModal() }}
          modal
        >
          <DetailRestaurant
            title={this.state.focusedRestaurant.name}
            description={this.state.focusedRestaurant.description}
            menu={this.state.focusedRestaurant.menu}
            rate={this.state.focusedRestaurant.rate}
            image={this.state.focusedRestaurant.image}
          />
        </Popup>
      </div>
    );
  }
}

export default App;
