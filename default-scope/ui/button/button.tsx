import type { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

/**
 * @description Takes a `children` prop, which can be any JSX element or text, and
 * returns a `div` container with that content. This allows developers to create
 * reusable button components with varying content.
 * 
 * @param {object} obj - Destructured to extract its key-value pair, where the value
 * is assigned to the variable `children`.
 * 
 * @param {ButtonProps} obj.children - Intended to hold content within the button.
 * 
 * @returns {ReactNode} Wrapped inside a `<div>` element.
 */
export function Button({ children }: ButtonProps) {
  return (
    <div>
      {children}
    </div>
  );
}
