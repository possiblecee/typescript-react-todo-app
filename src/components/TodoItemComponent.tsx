import * as React from 'react';
import { TodoInterface } from '../types';
import s from '../style';
import SubmitButton, { clickType } from './SubmitButton';

interface Props extends TodoInterface {
    remove?: clickType;
}

const TodoItem = ({ title, remove }: Props) => (
    <div style={s.todoItem}>
        <h2 children={title} style={s.todoItemText} />
        <SubmitButton 
            style={s.todoItemDelete} 
            onClick={remove}
            label="remove" 
        />
    </div>
);

export default TodoItem;