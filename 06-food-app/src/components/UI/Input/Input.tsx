import classes from "./Input.module.scss";

interface IInputProps {
    label: string;
    input: {
        id: string;
        type: string;
        min?: number;
        max?: number;
        step?: number;
        defaultValue: string | number;
    };
}

const Input = (props: IInputProps) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
};

export default Input;
