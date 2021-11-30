

const defaultState: any = {
    loading: false,
    data: []
};

const todoReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case "GET_ALL_TODO":
            return {
                loading: true,
            };
        case "GET_ALL_TODO_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case "GET_ALL_TODO_FAILED":
            return {
                loading: false,
            }
        default:
            return state;
    }
};

export default todoReducer;
