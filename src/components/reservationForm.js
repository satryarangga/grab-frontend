import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import MonthYearPicker from './datePicker';
import { Loader } from './util';
import { bindActionCreators } from 'redux';
import { createReservation } from '../actions/actionRestaurant';

class ReservationForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			onLoading:false,
			reservationCode:null
		}
	}

	renderTextField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input
					type={field.type}
					name={field.name}
					className="form-control"
					placeholder={field.placeholder}
					{...field.input}
				/>
			</div>
		);
	}

	showBirthField(field) {
		return (
			<MonthYearPicker
				field={field}
				{...field.input}
			/>
		);
	}

	onSubmitReservation(values) {
		this.setState({ onLoading: true });
		values.resto_id = this.props.resto;
		this.props.createReservation(values, (response) => {
			this.setState({ 
				onLoading: false,
				reservationCode:response.data.data.reservation_code
			});
		});
	}

	showReservationCode(code) {
		if(code) {
			return (
				<div className="success-reservation">
					<h3>Success to make reservation. You reservation code is <b>{code}</b></h3>
				</div>
			)
		}
	}

	render() {
		if(this.state.onLoading) {
			return <Loader text="Please wait while we are processing your reservation" />
		}
		const { handleSubmit } = this.props;
		return (
			<div className="reservation container">
				{this.showReservationCode(this.state.reservationCode)}
				<h2 className="center">Make a Reservation</h2>
				<form onSubmit={handleSubmit(this.onSubmitReservation.bind(this))} className="form-horizontal">
					<Field
						label="Name"
						name="name"
						type="text"
						placeholder="Your Name"
						component={this.renderTextField}
					/>
					<Field
						label="Phone Number"
						name="phone_number"
						type="text"
						placeholder="Phone Number"
						component={this.renderTextField}
					/>
					<Field
						label="Coming Date"
						name="date"
						type="text"
						placeholder="Reservation Date"
						component={this.showBirthField}
					/>
					<Field
						label="Total Customer"
						name="total_pax"
						type="number"
						placeholder="Total Customer"
						component={this.renderTextField}
					/>
					<button type="submit" className="btn btn-primary grab-button">Submit</button>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ createReservation }, dispatch);
}

function mapStateToProps (state) {
  return { resto: state.resto }
}

export default reduxForm({
  form: 'Reservation'
}) (
    connect(mapStateToProps, mapDispatchToProps) (ReservationForm)
);