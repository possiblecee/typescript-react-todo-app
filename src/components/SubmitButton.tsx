import * as React from 'react';

export type clickType = (e: React.FormEvent<HTMLButtonElement>) => void;

interface SubmitButtonInterface {
    label: string;
    onClick?: clickType;
    style?: Object;
}

const SubmitButton = ({ label, onClick, style }: SubmitButtonInterface) => (
    <button type="button" onClick={onClick} children={label} style={style} />
)

export default SubmitButton;