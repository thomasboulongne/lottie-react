import './Styles.css';
import * as React from 'react';
interface ISeekerProps {
    className?: string;
    disabled?: boolean;
    max: number;
    min: number;
    onChange: (e: any) => void;
    onChangeStart?: (v: number) => void;
    onChangeEnd?: (v: number) => void;
    showMaxLabel?: boolean;
    showMinLabel?: boolean;
    step: number;
    value: number;
}
export declare class Seeker extends React.Component<ISeekerProps> {
    inputRef: any;
    constructor(props: ISeekerProps);
    handleChange: () => (event: any) => void;
    render(): JSX.Element;
}
export {};
