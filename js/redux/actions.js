export const INCREASE_TICKET_COUNT = 'INCREASE_TICKET_COUNT';
export function increaseTicketCount(count) {
    return {
        type: INCREASE_TICKET_COUNT,
        payload: count,
    };
}

export const REMOVE_CHORE = 'REMOVE_CHORE';
export function removeChore() {
	return {
		type: REMOVE_CHORE,
	}
}