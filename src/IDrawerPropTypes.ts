// Type definitions for rc-drawer 1.9
// Project: https://github.com/react-component/drawer
// Definitions by: jljsj33 <https://github.com/jljsj33>
// Definitions: https://github.com/react-component/drawer
import * as React from 'react';
import type ScrollLocker from './utils/scrollLocker';

export type IPlacement = 'left' | 'top' | 'right' | 'bottom';

type ILevelMove = number | [number, number];

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface IProps extends Omit<React.HTMLAttributes<any>, 'onChange'> {
  prefixCls?: string;
  width?: string | number;
  height?: string | number;
  open?: boolean;
  defaultOpen?: boolean;
  handler?: React.ReactElement | null | false;
  placement?: IPlacement;
  level?: null | string | string[];
  levelMove?:
    | ILevelMove
    | ((e: { target: HTMLElement; open: boolean }) => ILevelMove);
  duration?: string;
  ease?: string;
  showMask?: boolean;
  maskClosable?: boolean;
  maskStyle?: React.CSSProperties;
  onChange?: (open?: boolean) => void;
  afterVisibleChange?: (open: boolean) => void;
  onHandleClick?: (e: React.MouseEvent<any> | React.KeyboardEvent<any>) => void;
  onClose?: (e: React.MouseEvent<any> | React.KeyboardEvent<any>) => void;
  keyboard?: boolean;
  contentWrapperStyle?: React.CSSProperties;
  autoFocus?: boolean;
}

export interface IDrawerProps extends IProps {
  wrapperClassName?: string;
  forceRender?: boolean;
  getContainer?: string | HTMLElement | (() => HTMLElement);
}

export interface IDrawerChildProps extends IProps {
  getContainer?: () => HTMLElement;
  getOpenCount?: () => number;
  scrollLocker?: ScrollLocker;
  switchScrollingEffect?: () => void;
}
