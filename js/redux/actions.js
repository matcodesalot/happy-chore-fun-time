export const INCREASE_TICKET_COUNT = 'INCREASE_TICKET_COUNT';
export function increaseTicketCount(amount) {
    return {
        type: INCREASE_TICKET_COUNT,
        payload: amount,
    };
}

export const REMOVE_CHORE = 'REMOVE_CHORE';
export function removeChore(index) {
	return {
		type: REMOVE_CHORE,
		payload: index,
	};
}

export const ADDING_CHORE = 'ADDING_CHORE';
export function addingChore(bool) {
	return {
		type: ADDING_CHORE,
		payload: bool,
	};
}

export const SUBMIT_CHORE = 'SUBMIT_CHORE';
export function submitChore(newChore) {
	return {
		type: SUBMIT_CHORE,
		payload: newChore,
	};
}

export const ADD_CHORE_TEXT = 'ADD_CHORE_TEXT';
export function addChoreText(text) {
	return {
		type: ADD_CHORE_TEXT,
		payload: text,
	};
}

export const SET_CHORE_INACTIVE = 'SET_CHORE_INACTIVE';
export function setChoreInactive(index) {
	return {
		type: SET_CHORE_INACTIVE,
		payload: index,
	};
}

export const INCREASE_ITEM_AMOUNT = 'INCREASE_ITEM_AMOUNT';
export function increaseItemAmount(index) {
	return {
		type: INCREASE_ITEM_AMOUNT,
		payload: index,
	};
}

export const CAN_I_BUY_IT = 'CAN_I_BUY_IT';
export function canIBuyIt(bool) {
	return {
		type: CAN_I_BUY_IT,
		payload: bool,
	};
}

export const INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS';
export function insufficientFunds(bool) {
	return {
		type: INSUFFICIENT_FUNDS,
		payload: bool,
	}
}