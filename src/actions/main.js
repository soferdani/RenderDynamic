
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
		case "SET_INPUT_TO_DISPLAY":
			return {
				...state,
				inputToDisplay: action.payload
			}
		default:
			return state
	}
}


export function setUserInput(userInput) {
	return {
		type: "SET_USER_INPUT",
		payload: userInput
	}
}

export function setInputToDisplay(inputToDisplay) {
	return {
		type: "SET_INPUT_TO_DISPLAY",
		payload: inputToDisplay
	}
}