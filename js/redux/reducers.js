//reducers
import * as actions from './actions';

const initialState = {
	ticketCount: 0,
	choreList: [],
};

export default function choreReducer(state = initialState, action = {}) {
	switch(action.type) {
		case actions.INCREASE_TICKET_COUNT:
			return Object.assign({}, state, {
				ticketCount: state.ticketCount += action.payload
			});

		default:
			return state;
	}
};