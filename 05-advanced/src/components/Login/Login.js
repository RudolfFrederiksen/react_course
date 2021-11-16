import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.value,
            isValid: action.value.includes("@"),
        };
    }
    if (action.type === "BLUR") {
        return {
            value: state.value,
            isValid: state.value.includes("@"),
        };
    }
    return {
        value: "",
        isValid: false,
    };
};

const pwdReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.value,
            isValid: action.value.trim().length > 6,
        };
    }
    if (action.type === "BLUR") {
        return {
            value: state.value,
            isValid: state.value.trim().length > 6,
        };
    }
    return {
        value: "",
        isValid: false,
    };
};

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: null });
    const [pwdState, dispatchPwd] = useReducer(pwdReducer, { value: "", isValid: null });

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", value: event.target.value });

        setFormIsValid(event.target.value.includes("@") && pwdState.isValid);
    };

    const passwordChangeHandler = (event) => {
        dispatchPwd({ type: "USER_INPUT", value: event.target.value });

        setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPwd({ type: "BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, pwdState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div className={`${classes.control} ${pwdState.isValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={pwdState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
