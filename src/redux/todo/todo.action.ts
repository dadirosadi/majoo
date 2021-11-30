import { getAllTodo } from "./todo.service";

export const getTodo = () => async (dispatch: any) => {
    try {
        dispatch({
            type: "GET_ALL_TODO",
        });

        const results = await getAllTodo();

        dispatch({
            type: "GET_ALL_TODO_SUCCESS",
            payload: results,
        });

    } catch (e) {
        dispatch({
            type: "GET_ALL_TODO_FAILED",
        });
    }
};

export const createTodo = (data: Object) => async (dispatch: any) => {
    try {
        dispatch({
            type: "CREATE_TODO",
        });
        dispatch({
            type: "CREATE_TODO_SUCCESS",
            payload: data
        });

    } catch (e) {
        dispatch({
            type: "CREATE_TODO_FAILED",
        });
    }
};


export const updateTodo = (id: Number, data: Object) => async (dispatch: any) => {
    try {
        dispatch({
            type: "UPDATE_TODO",
        });

        dispatch({
            type: "UPDATE_TODO_SUCCESS",
            payload: {
                id,
                data
            },
        });

    } catch (e) {
        dispatch({
            type: "UPDATE_TODO_FAILED",
        });
    }
};

export const deleteTodo = (id: Number) => async (dispatch: any) => {
    try {
        dispatch({
            type: "DELETE_TODO",
        });

        dispatch({
            type: "DELETE_TODO_SUCCESS",
            payload: id
        });

    } catch (e) {
        dispatch({
            type: "DELETE_TODO_FAILED",
        });
    }
};