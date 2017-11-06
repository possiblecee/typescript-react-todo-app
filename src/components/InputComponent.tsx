import * as React from 'react';

export type InputEventType = React.FormEvent<HTMLInputElement>;

export interface InputProps {
    value: string;
    onChange: (evt: InputEventType) => void;
    type?: 'text'|'password';
    style?: Object;
}

const Input = ({ type = 'text', value, onChange, style }: InputProps) => (
    <input type={type} value={value} onChange={onChange} style={style} />
);


export default Input;