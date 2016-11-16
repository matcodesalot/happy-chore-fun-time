export const INCREASE_TICKET_COUNT = 'INCREASE_TICKET_COUNT';
export function increaseTicketCount(count) {
    return {
        type: INCREASE_TICKET_COUNT,
        payload: count,
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

export const IS_CHORE_ACTIVE = 'IS_CHORE_ACTIVE';
export function isChoreActive(bool) {
	return {
		type: IS_CHORE_ACTIVE,
		payload: bool,
	};
}