import * as actions from './actions';

const initialState = {
	ticketCount: 0,
	choreList: [ { text: 'Clean your room', isActive: true }, { text: 'Brush your teeth', isActive: true } ],
	addingChore: false,
	choreText: '',
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
				choreList: state.choreList.concat({text: action.payload, isActive: true})
			});

		case actions.ADD_CHORE_TEXT:
			return Object.assign({}, state, {
				choreText: action.payload
			});

		case actions.SET_CHORE_INACTIVE:
			//if we're at the start of the list
			if(action.payload === 0) {
				let startList = [{text: state.choreList[action.payload].text, isActive: !state.choreList[action.payload].isActive}];
				let endList = state.choreList.slice(1, state.choreList.length);
				return Object.assign({}, state, {
					choreList: startList.concat(endList)
				});
			}

			//if we are at the end of the list
			if(action.payload === state.choreList.length - 1) {
				let startList = state.choreList.slice(0, action.payload);
				let endList = [{text: state.choreList[action.payload].text, isActive: !state.choreList[action.payload].isActive}];
				return Object.assign({}, state, {
					choreList: startList.concat(endList)
				});
			}

			//if we are somewhere in the middle of the list
			let startList = state.choreList.slice(0, action.payload);
			let endList = state.choreList.slice(action.payload + 1, state.choreList.length);
			let startAndMiddleList = startList.concat({text: state.choreList[action.payload].text, isActive: !state.choreList[action.payload].isActive});
			let completeList = startAndMiddleList.concat(endList);
			console.log("-=-=-=-=-=-=", action.payload);
			return Object.assign({}, state, {
				choreList: completeList
			});

		default:
			return state;
	}
};