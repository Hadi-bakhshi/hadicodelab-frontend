import type { MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  // text: string;
  icon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'filled' | 'outlined' | 'text' | 'elevated';
  children: ReactNode | string;
};
