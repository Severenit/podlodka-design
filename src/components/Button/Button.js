import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Button.module.css';

const Button = ({
  size = 'large',
  type = 'primary',
  colors = 'brand',
  children,
  full = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={
      cn(
        s.root,
        s[type],
        s[colors],
        s[size], {
          [s.full]: full,
        })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  colors: PropTypes.oneOf(['brand', 'gray']),
  size: PropTypes.oneOf(['medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  full: PropTypes.bool,
};

Button.defaultProps = {
  colors: 'brand',
  size: 'large',
  type: 'primary',
};

export default Button;
