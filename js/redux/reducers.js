import * as actions from './actions';

const initialState = {
	ticketCount: 0,
	choreList: [ { text: 'Clean your room', isActive: true }, { text: 'Brush your teeth', isActive: true } ],
	addingChore: false,
	choreText: '',

	rewardList: [ 
		{text: 'candy', cost: 2, amount: 0},
		{text: 'extra video game time', cost: 5, amount: 0},
		{text: 'extended bed time', cost: 10, amount: 0},
		{text: 'pizza party', cost: 25, amount: 0},
		{text: 'trip to the zoo', cost: 100, amount: 0},
	],
	isBuyable: false,
	isInsufficient: false,
};

export default function choreReducer(state = initialState, action = {}) {
	switch(action.type) {
		// case actions.INCREASE_TICKET_COUNT:
		// 	return Object.assign({}, state, {
		// 		ticketCount: state.ticketCount += action.payload
		// 	});

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
			//if we are at the start of the list
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
			let startChoreList = state.choreList.slice(0, action.payload);
			let endChoreList = state.choreList.slice(action.payload + 1, state.choreList.length);
			let startAndMiddleChoreList = startChoreList.concat({text: state.choreList[action.payload].text, isActive: !state.choreList[action.payload].isActive});
			let completeChoreList = startAndMiddleChoreList.concat(endChoreList);
			return Object.assign({}, state, {
				choreList: completeChoreList
			});

		case actions.INCREASE_ITEM_AMOUNT:
			//if we are at the start of the list
			if(action.payload === 0) {
				let startList = [{text: state.rewardList[action.payload].text, cost: state.rewardList[action.payload].cost, amount: state.rewardList[action.payload].amount += 1}];
				let endList = state.rewardList.slice(1, state.rewardList.length);
				return Object.assign({}, state, {
					rewardList: startList.concat(endList)
				});
			}

			//if we are at the end of the list
			if(action.payload === state.rewardList.length - 1) {
				let startList = state.rewardList.slice(0, action.payload);
				let endList = [{text: state.rewardList[action.payload].text, cost: state.rewardList[action.payload].cost, amount: state.rewardList[action.payload].amount += 1}];
				return Object.assign({}, state, {
					rewardList: startList.concat(endList)
				});
			}

			//if we are somewhere in the middle of the list
			let startRewardList = state.rewardList.slice(0, action.payload);
			let endRewardList = state.rewardList.slice(action.payload + 1, state.rewardList.length);
			let startAndMiddleRewardList = startRewardList.concat({text: state.rewardList[action.payload].text, cost: state.rewardList[action.payload].cost, amount: state.rewardList[action.payload].amount += 1});
			let completeRewardList = startAndMiddleRewardList.concat(endRewardList);
			return Object.assign({}, state, {
				rewardList: completeRewardList
			});

		case actions.CAN_I_BUY_IT:
			return Object.assign({}, state, {
				isBuyable: action.payload
			});

		case actions.INSUFFICIENT_FUNDS:
			return Object.assign({}, state, {
				isInsufficient: action.payload
			});

		case actions.GATHER_DATA:
			return Object.assign({}, state, {
				ticketCount: action.payload
			});

		default:
			return state;
	}
};