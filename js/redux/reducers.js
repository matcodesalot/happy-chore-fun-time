import * as actions from './actions';

const initialState = {
	ticketCount: 0,
	choreList: [ { text: 'Clean your room' } ],
	addingChore: false
};

export default function choreReducer(state = initialState, action = {}) {
	switch(action.type) {
		case actions.INCREASE_TICKET_COUNT:
			return Object.assign({}, state, {
				ticketCount: state.ticketCount += action.payload
			});

		case actions.REMOVE_CHORE:
			console.log('called remove chore with', action.payload);
			return Object.assign({}, state, {
				choreList: [ ...state.choreList.slice(0, action.payload), ...state.choreList.slice(action.payload + 1) ]
			});

		case actions.ADDING_CHORE:
			return Object.assign({}, state, {
				addingChore: action.payload
			});

		default:
			return state;
	}
};