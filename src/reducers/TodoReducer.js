export function todoReducer(state, action) {
    switch (action.type) {
        case "LOAD_TODOS":
            return action.payload;
        case "UPDATE_TODO":
            const newState = [...state];
            const id = action.payload.id;
            return newState.map((value) => {
                if (value.id === id) {
                    return {
                        id,
                        text: value.text,
                        done: !value.done
                    };
                }
                return value
            })
        case "UPDATE_TEXT_TODO":
            const State = [...state];
            const newId = action.payload.id;
            return State.map((value) => {
                if (value.id === newId) {
                    return {
                        ...value,
                        text: action.payload.text,
                    };
                }
                return value
            })
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}