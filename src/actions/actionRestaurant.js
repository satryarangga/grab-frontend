import data from '../data/resto.js';
import _ from 'lodash';
import { API_URL } from '../config/api';
import axios from 'axios';

export const FETCH_RESTO_LIST = 'fetch_resto_list';
export const FETCH_RESTO_DETAIL = 'fetch_resto_detail';
export const CREATE_RESERVATION = 'create_reservation';

export function fetchListResto() {
	return {
		type: FETCH_RESTO_LIST,
		payload: data
	}
}

export function fetchDetailResto(id) {
	let detail = _.find(data, 'id', id - 1);
	return {
		type: FETCH_RESTO_DETAIL,
		payload: (detail) ? detail : {}
	}
}

export function createReservation(values, callback) {
	let resto_id = values.resto_id;
	let name = values.name;
	let phone = values.phone_number;
	let coming_date = values.date;
	let total_pax = values.total_pax;

	let request = axios.post(`${API_URL}/resto`, {
					name, phone, coming_date, total_pax, resto_id
				})
				.then((response) => callback(response));
	return {
		type: CREATE_RESERVATION,
		payload:request
	}
}
