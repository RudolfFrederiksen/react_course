import React from "react";
import { BasePropsWithChildren } from "../../../types/propsUtils";
import classes from "./Card.module.scss";

export function Card(props: BasePropsWithChildren) {
    return <div className={classes.card}>{props.children}</div>;
}
