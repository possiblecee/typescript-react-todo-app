import * as React from 'react';
import { StoreInterface } from '../types';
import { connect } from 'react-redux';
import Input, { InputEventType } from '../components/InputComponent';
import { addTodo } from '../redux/Todos';
import TodoList from './TodoListContainer';
import SubmitButton from '../components/SubmitButton';
import s from '../style';

interface Props {
    addTodo: Function;
}

class App extends React.Component<Props, {}> {
    state = {
        newTodo: '',
    };

    onTodoChange = (e: InputEventType) => {
        this.setState({ newTodo: e.currentTarget.value });
    };

    addTodo = () => {
        if (this.state.newTodo) {
            this.props.addTodo(this.state.newTodo);
            this.setState({ newTodo: '' });
        }
    }

    render() {
        return (
            <div style={s.root}>
                <div style={s.controls}>
                    <Input style={s.input} value={this.state.newTodo} onChange={this.onTodoChange} />
                    <SubmitButton style={s.submit} label="Add todo" onClick={this.addTodo} />
                </div>
                <TodoList />
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch: Function): Object => ({
    addTodo: (todo: string) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(App);