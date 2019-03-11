import React, { Component } from 'react';
import restaurantList from '../datas/mock-restaurant-list.json';
import "../css/Filter.css"

class Filter extends Component {

	state = {
		categoryList: []
	}

	componentDidMount() {
		this.getCategorys(restaurantList)
	}

	getCategorys(array) {
		let list = []
		array.map((item) => {
			if (!list.includes(item.category)) {
				list.push(item.category)
			}
		})
		this.setState({ categoryList: list })
	}

	filterByNote(event) {

	}

	filterByCategory(event) {

	}

	render() {

		return (
			<div className="filters_container">
				<div className="categorys_container">
					<h3>Catégories</h3>
					{
						this.state.categoryList.map((categoryName, index) =>
							<div className="input_container">
								<input type="checkbox" id={categoryName} />
								<label for={categoryName}>{categoryName}</label>
							</div>
						)
					}
				</div>
				<div className="rates_container">
				<h3>Notes</h3>
					<div className="input_container">
						<input type="checkbox" id="zero" />
						<label for="zero">0/5</label>
					</div>
					<div className="input_container">
						<input type="checkbox" id="one" />
						<label for="one">1/5</label>
					</div>
					<div className="input_container">
						<input type="checkbox" id="two" />
						<label for="two">2/5</label>
					</div>
					<div className="input_container">
						<input type="checkbox" id="three" />
						<label for="three">3/5</label>
					</div>
					<div className="input_container">
						<input type="checkbox" id="four" />
						<label for="four">4/5</label>
					</div>
					<div className="input_container">
						<input type="checkbox" id="five" />
						<label for="five">5/5</label>
					</div>
				</div>
			</div>
		)
	}
}

export default Filter;
