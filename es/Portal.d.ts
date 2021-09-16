import * as React from 'react';
export declare type PortalRef = {};
export interface PortalProps {
    didUpdate?: (prevProps: PortalProps) => void;
    getContainer: () => HTMLElement;
    children?: React.ReactNode;
    innerRef?: PortalRef;
}
export declare class Portal extends React.Component<PortalProps> {
    containerRef: HTMLElement;
    initRef: boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): () => void;
    render(): JSX.Element;
}
