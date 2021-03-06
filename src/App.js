import React, { Component } from 'react';
import Popup from "reactjs-popup";
import restaurantList from './datas/mock-restaurant-list.json';
import SideMenu from './components/sideMenu';
import SingleRestaurant from './components/singleRestaurant';
import DetailRestaurant from './components/detailRestaurant';
import './css/App.css'
import filter_icon from "./assets/images/filter_icon.png"

class App extends Component {
  state = {
    restaurant: [],
    isOpenModal: false,
    focusedRestaurant: {},
    isUserLoged: false,
    categoryList: []
  }

  componentDidMount() {
    this.setState({ restaurant: restaurantList })
    this.isUserLoged()
  }

  openDetailModal(restaurant) {
    this.setState({ focusedRestaurant: restaurant })
    this.setState({ isOpenModal: true })
  }

  closeDetailModal() {
    this.setState({ isOpenModal: false })
  }

  isUserLoged() {
    let userState = localStorage.getItem("username")
    if (userState != null) {
      return true;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="main_header">
          <SideMenu
            isLoged={this.isUserLoged()}
            side="left"
            buttonType="burger"
            contentType="form"
          />
          <SideMenu
            side="right"
            buttonType="icon"
            imageSrc={filter_icon}
            contentType="filter"
          />
        </header>
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
                category={item.category}
              />
            </div>

          )}
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
            category={this.state.focusedRestaurant.category}
          />
        </Popup>
      </div>
    );
  }
}

export default App;
