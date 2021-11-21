
const initialState = {
	userInput: "dani test",
	inputToDisplay: "",
}

export function reducer (state = initialState, action) {
	switch (action.type) {
		case "SET_USER_INPUT":
			return {
				...state,
				userInput: action.payload
			}
		default:
			return state
	}
}
