import React, { Component } from 'react';
import _ from 'lodash';
import { Header, Footer } from './layout';
import { NotFound, renderStarRating } from './util';
import ReservationForm from './reservationForm';
import { connect } from 'react-redux';
import { fetchDetailResto } from '../actions/actionRestaurant';

class Detail extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let param = this.props.match.params;
		this.props.fetchDetailResto(param.id);
	}

	element() {
		let resto = this.props.resto.list;
		if(_.isEmpty(resto)) {
			return (
				<NotFound />
			);
		}
		let param = this.props.match.params;
		return (
			<div>
				<div className="col-md-7 top-resto">
					<img 
						className="img-responsive" 
						src={`${resto.image_large}`} 
					/>
				</div>
				<div className="col-md-5">
					<h2>{resto.name}</h2>
					<div className="rating">{renderStarRating(resto.rating)}</div>
					<h4 className="attribute col-md-6">
						<i className="fa fa-map-marker"></i> {resto.location}, {resto.address}
					</h4>
					<h4 className="attribute col-md-6">
						<i className="fa fa-cutlery"></i> {resto.cuisine}
					</h4>
					<h4 className="attribute col-md-6">
						<i className="fa fa-clock-o"></i> {resto.open_hour}
					</h4>
					<h4 className="attribute col-md-6">
						<i className="fa fa-money"></i> {resto.price_est}
					</h4>
				</div>
			<div className="clear"></div>
			<ReservationForm resto={param.id} />
		</div>
		);
	}

	render() {
		return (
			<div>
				<Header />
				{this.element()}
				<div className="clear"></div>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps (state) {
  return { resto: state.resto }
}

export default connect(mapStateToProps, { fetchDetailResto })(Detail);