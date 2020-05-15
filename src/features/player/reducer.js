// Reducers map state to props and map dispatch to props, meaning whatever state is in the reducer it will get mapped to props.
// To access state in the redux store it's props dot whatever key you wanna get

const initialState = {
	position: [0, 0],
	spriteLocation: '0px 0px',
	direction: 'east',
	walkIndex: 0,
}

const playerReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'MOVE_PLAYER':
			return {
				...action.payload
			}
		default:
			return state
	}
}

export default playerReducer