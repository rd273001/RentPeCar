import React from 'react';
export declare type Props = React.LiHTMLAttributes<HTMLLIElement> & {
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    firstchild?: boolean;
    popperarrow?: boolean;
    onOpenChange?: (open: boolean) => void;
};
declare const _default: React.ForwardRefExoticComponent<React.LiHTMLAttributes<HTMLLIElement> & {
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    firstchild?: boolean;
    popperarrow?: boolean;
    onOpenChange?: (open: boolean) => void;
} & React.RefAttributes<unknown>>;
export default _default;
