import React from "react";

export type BaseProps = {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
};

export type BasePropsWithChildren<T = {} & BaseProps> = T & { children?: React.ReactNode };
