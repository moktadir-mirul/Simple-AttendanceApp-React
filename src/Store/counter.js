
export const CounterReducer = (state = 0, action) => {
    switch(action.type) {
        case "Increse": {
            return state + action.payload
        }
        case "Decrese": {
            return state - action.payload
        }
        default: {
            return state;
        }
    }
}