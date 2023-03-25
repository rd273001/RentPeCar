import React from 'react';
export declare type IconShapeType = 'square' | 'round' | 'circle';
export declare type Props = React.HTMLAttributes<HTMLElement> & {
    className?: string;
    children?: React.ReactNode;
    iconShape?: IconShapeType;
    popperArrow?: boolean;
};
declare const _default: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & {
    className?: string;
    children?: React.ReactNode;
    iconShape?: IconShapeType;
    popperArrow?: boolean;
} & React.RefAttributes<unknown>>;
export default _default;
