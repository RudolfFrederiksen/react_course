import { BasePropsWithChildren } from "../../../types/propsUtils";
import { Card } from "../Card/Card";
import React from "react";
import "./ListRenderer.scss";

interface IListRendererProps {
    list: Array<any>;
}

const ListRenderer = (props: BasePropsWithChildren & IListRendererProps) => {
    const classes = "list-renderer " + (props.className ?? "");

    return (
        <div className={classes}>
            {props.list.length ? (
                props.children
            ) : (
                <Card className="empty">
                    <span>Nothing to show !</span>
                </Card>
            )}
        </div>
    );
};

export default ListRenderer;
