import { FETCH_RESTO_LIST, FETCH_RESTO_DETAIL, CREATE_RESERVATION } from '../actions/actionRestaurant';

export default function (state = { list:[], reservation:{} }, action) {
	switch(action.type) {
		case FETCH_RESTO_LIST:
			return {
				...state,
					list:action.payload
			}
		case FETCH_RESTO_DETAIL:
			return {
				...state,
			list:action.payload
		}
		case CREATE_RESERVATION:
			return {
				...state,
				reservation:action.payload
			}
		default:
			return state;
	}
}