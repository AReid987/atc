import type { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

/**
 * @description Receives a set of props, specifically a `children` prop, and returns
 * an HTML element with its content set to the value of `children`. The returned
 * element is wrapped within a `<div>` tag.
 * 
 * @param {object} obj - Destructured from an imported interface or type called
 * `ButtonProps`. It expects an object with at least one property named `children`,
 * which is expected to be passed as a prop to this component.
 * 
 * @param {ButtonProps} obj.children - Used to hold any content inside the button.
 * 
 * @returns {ReactNode} Wrapped in a div element. The returned value represents an
 * HTML element that contains the children passed to it.
 */
export function Button({ children }: ButtonProps) {
  return (
    <div>
      {children}
    </div>
  );
}
