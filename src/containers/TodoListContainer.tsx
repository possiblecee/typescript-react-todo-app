import * as React from 'react';
import { StoreInterface, FunctionType } from '../types';
import { connect } from 'react-redux';
import { TodoInterface } from '../types';
import { getTodoItems, removeTodo } from '../redux/Todos';
import TodoItem from '../components/TodoItemComponent';

interface Props {
    items: Array<TodoInterface>;
    removeTodo: FunctionType<Number>;
}


const TodoList = ({ items, removeTodo }: Props) => (
    <div>
        {items.map((item: TodoInterface) => (
            <TodoItem 
                key={`todo-${item.id}`} 
                {...item} 
                remove={() => removeTodo(item.id)}
            />
        ))}
    </div>
);

const mapSateToProps = (state: StoreInterface): Object => ({
    items: getTodoItems(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    removeTodo: (id: number) => dispatch(removeTodo(id)),
});

export default connect(mapSateToProps, mapDispatchToProps)(TodoList);

