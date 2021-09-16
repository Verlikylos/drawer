import * as React from 'react';
import ReactDOM from 'react-dom';
import canUseDom from './utils/canUseDom';

export type PortalRef = {};
export interface PortalProps {
  didUpdate?: (prevProps: PortalProps) => void;
  getContainer: () => HTMLElement;
  children?: React.ReactNode;
  innerRef?: PortalRef;
}

export class Portal extends React.Component<PortalProps> {
    containerRef: HTMLElement
    initRef = false

    componentDidMount() {
        // @ts-ignore
        this.props.innerRef({})
        this.props.didUpdate?.(this.props)
    }

    componentDidUpdate() {
        this.props.didUpdate?.(this.props)
    }

    componentWillUnmount() {
        return () => {
            this.containerRef.parentNode.removeChild(this.containerRef)
        }
    }

    render() {
        
        if (!this.initRef && canUseDom()) {
            this.containerRef = this.props.getContainer();
            this.initRef = true;
        }

        this.containerRef
            ? ReactDOM.unstable_renderSubtreeIntoContainer(this, React.Children.only(this.props.children), this.containerRef)
            : null

        return null as JSX.Element
    }
}