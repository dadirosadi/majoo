import { updateData } from "./todo.utils";

const defaultState: any = {
    loading: false,
    create: true,
    data: []
};

const todoReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case "GET_ALL_TODO":
            return {
                ...state,
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
                ...state,
                loading: false,
            }

        case "CREATE_TODO":
            return {
                ...state,
                create: true,
            };

        case "CREATE_TODO_SUCCESS":
            console.log("Action ", action.payload);
            return {
                ...state,
                create: false,
                data: [...state.data, {
                    ...action.payload,
                    createdAt: new Date(),
                    id: state.data.length + 1
                }],
            };
        case "CREATE_TODO_FAILED":
            return {
                ...state,
                create: false,
            }

        case "UPDATE_TODO":
            return {
                ...state,
                update: true,
            };

        case "UPDATE_TODO_SUCCESS":
            console.log("Action ", action.payload);
            return {
                ...state,
                create: false,
                data: updateData(state.data, action.payload)
            };
        case "UPDATE_TODO_FAILED":
            return {
                ...state,
                update: false,
            }
        default:
            return state;
    }
};

export default todoReducer;
