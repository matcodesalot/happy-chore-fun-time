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