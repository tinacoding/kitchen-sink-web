// React [Essentials]
import React, { ReactElement } from 'react';
// SCSS [Styles]
import './Button.styles.scss';

interface IProps {
  text: string;
}
function Button({ text }: IProps): ReactElement {
  return <button className="button">{text}</button>;
}

export default Button;
