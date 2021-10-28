import React from "react";
import { BasePropsWithChildren } from "../../../types/propsUtils";
import "./Card.scss";

interface ICard {
    children: React.ReactNode;
}

export function Card(props: BasePropsWithChildren & ICard) {
    const classes = "card " + props.className;

    return <div className={classes}>{props.children}</div>;
}
