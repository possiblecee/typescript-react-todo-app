export interface TodoInterface {
    title: string;
    id: Number;
}

export interface ActionInterface {
    type: string;
    payload: any;
}

export interface StoreInterface {
    todos: {
        items: Array<TodoInterface>;
    }
}

export type FunctionType<T> = (arg: T) => void;