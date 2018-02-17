import React, { Component } from 'react';
import { Header, Footer } from './layout';
import { connect } from 'react-redux';
import { fetchListResto } from '../actions/actionRestaurant';
import { Link } from 'react-router-dom';
import { renderStarRating } from './util';
import _ from 'lodash';

class Home extends Component {
	componentDidMount() {
		this.props.fetchListResto();
	}

	listResto() {
		return _.map(this.props.resto.list, (resto, a) => {
			if(a > 0) {
				return (
					<li className="list-group-item col-sm-4">
					<Link
						to={`resto/${resto.id}`}
					>
					<img 
						className="img-responsive" 
						src={`${resto.image_thumb}`} 
					/>
					</Link>
						<div className="list-desc">
							<Link
								className="link"
								to={`resto/${resto.id}`}
							>
							<h2>{resto.name}</h2>
							</Link>
							<div className="rating">
								{renderStarRating(resto.rating)}
							</div>
							<h4 className="attributes">
								<i className="fa fa-map-marker"></i> {resto.location}
							</h4>
							<h4 className="attributes">Chinese Food</h4>
						</div>
					</li>
					);
			}
		});
	}

	render() {
		let resto = this.props.resto.list[0];
		return (
			<div>
				<Header />
				<div className="top-resto">
					<Link
						to={`resto/${resto.id}`}
					>
					<img 
						className="img-responsive" 
						src={`${resto.image_large}`} 
					/>
					</Link>
					<Link
						className="link"
						to={`resto/${resto.id}`}
					>
					<h2>{resto.name}</h2>
					</Link>
					<div className="rating">
						{renderStarRating(resto.rating)}
					</div>
					<h4 className="attributes">
						<i className="fa fa-map-marker"></i> {resto.location}
					</h4>
					<h4 className="attributes">{resto.cuisine}</h4>
				</div>
				<div className="list-resto">
					<ul className="list-inline">
					{this.listResto()}
					</ul>
				</div>
				<div className="clear"></div>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps (state) {
  return { resto: state.resto }
}

export default connect(mapStateToProps, { fetchListResto })(Home);