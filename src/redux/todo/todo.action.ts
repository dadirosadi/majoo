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

        return results;
    } catch (e) {
        dispatch({
            type: "GET_ALL_TODO_FAILED",
        });
    }
};