import * as React from 'react';
export interface PortalProps {
    didUpdate?: (prevProps: PortalProps) => void;
    getContainer: () => HTMLElement;
    children?: React.ReactNode;
}
export declare class Portal extends React.Component<PortalProps> {
    containerRef: HTMLElement;
    initRef: boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): () => void;
    render(): any;
}
