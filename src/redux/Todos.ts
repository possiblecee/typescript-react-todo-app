import { createReducer } from 'redux-create-reducer';
import { StoreInterface, ActionInterface, TodoInterface } from '../types';

enum Actions {
    ADD_TODO = 'APP/ADD_TODO',
    REMOVE_TODO = 'APP/REMOVE_TODO',
}

export const getTodoItems = (state: StoreInterface): Array<TodoInterface> => state.todos.items;

export const addTodo = (todo: string): ActionInterface => ({ 
    type: Actions.ADD_TODO, 
    payload: { todo },
});

export const removeTodo = (id: number): ActionInterface => ({ 
    type: Actions.REMOVE_TODO, 
    payload: { id }
});

const initialState: Object = {
    items: [
        { title: 'hello', id: 1 }
    ],
};

const createTodo = (title: string): TodoInterface => ({ title, id: new Date().getTime() });

export default createReducer(initialState, {
    [Actions.ADD_TODO]: (state: any, { payload }: ActionInterface) => ({
        ...state,
        items: [createTodo(payload.todo), ...state.items],
    }),
    [Actions.REMOVE_TODO]: (state: any, { payload }: ActionInterface) => ({
        ...state,
        items: [...state.items].filter(({ id }) => id !== payload.id), 
    }),
});