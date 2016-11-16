import * as actions from './actions';

const initialState = {
	ticketCount: 0,
	choreList: [ { text: 'Clean your room' }, { text: 'Brush your teeth' } ],
	addingChore: false,
	choreText: '',
	isActive: true,
};

export default function choreReducer(state = initialState, action = {}) {
	switch(action.type) {
		case actions.INCREASE_TICKET_COUNT:
			return Object.assign({}, state, {
				ticketCount: state.ticketCount += action.payload
			});

		case actions.REMOVE_CHORE:
			return Object.assign({}, state, {
				choreList: [ ...state.choreList.slice(0, action.payload), ...state.choreList.slice(action.payload + 1) ]
			});

		case actions.ADDING_CHORE:
			return Object.assign({}, state, {
				addingChore: action.payload
			});

		case actions.SUBMIT_CHORE:
			return Object.assign({}, state, {
				choreList: state.choreList.concat({text: action.payload})
			});

		case actions.ADD_CHORE_TEXT:
			return Object.assign({}, state, {
				choreText: action.payload
			});

		case actions.IS_CHORE_ACTIVE:
			return Object.assign({}, state, {
				isActive: action.payload
			});

		default:
			return state;
	}
};