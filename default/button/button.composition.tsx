import { Button } from './button.js';

/**
 * @description Returns a React element that represents a button with the text "hello
 * world!". When rendered, it will display a clickable button with the specified text
 * to the user.
 * 
 * @returns {JSX.Element} A React element representing a Button component with the
 * text "hello world!".
 */
export const BasicButton = () => {
  return (
    <Button>hello world!</Button>
  );
}
