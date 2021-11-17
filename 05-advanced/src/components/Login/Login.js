import React, { useState, useReducer, useEffect, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

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

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log("check validity");
            setFormIsValid(emailState.isValid && pwdState.isValid);
        }, 500);

        return () => {
            console.log("useEffect cleanup");
            clearTimeout(timerId);
        };
    }, [emailState.isValid, pwdState.isValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", value: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPwd({ type: "USER_INPUT", value: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPwd({ type: "BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(emailState.value, pwdState.value);
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
