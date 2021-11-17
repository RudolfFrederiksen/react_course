import React, { useState, useReducer, useEffect, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

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

    const emailInputRef = useRef();
    const pwdInputRef = useRef();

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
        if (formIsValid) {
            authCtx.onLogin(emailState.value, pwdState.value);
        } else if (!emailState.isValid) {
            emailInputRef.current.focus();
        } else {
            pwdInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="email"
                    label="E-Mail"
                    type="email"
                    value={emailState.value}
                    isValid={emailState.isValid}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                ></Input>
                <Input
                    ref={pwdInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    value={pwdState.value}
                    isValid={pwdState.isValid}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                ></Input>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
