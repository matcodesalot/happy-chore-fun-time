import * as actions from './actions';

const initialState = {
	ticketCount: 0,
	choreList: [],
	showChore: true,
};

export default function choreReducer(state = initialState, action = {}) {
	switch(action.type) {
		case actions.INCREASE_TICKET_COUNT:
			return Object.assign({}, state, {
				ticketCount: state.ticketCount += action.payload
			});

		case actions.REMOVE_CHORE:
			return Object.assign({}, state, {
				showChore: false
			})

		default:
			return state;
	}
};