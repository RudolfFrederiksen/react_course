import classes from "./Input.module.scss";
import React from "react";

interface IInputProps {
    label: string;
    input: {
        id: string;
        name: string;
        type: string;
        min?: number;
        max?: number;
        step?: number;
        defaultValue: string | number;
    };
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props: IInputProps, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;
