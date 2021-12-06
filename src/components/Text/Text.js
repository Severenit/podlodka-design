import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Text.module.css';


const Text = ({
  type = 'typography-4',
  element = 'p',
  children,
}) => {
  return React.createElement(`${element}`, {
    className: cn(s.root, s[type])
  }, children);
};

Text.propTypes = {
  type: PropTypes.oneOf(['typography-1', 'typography-2', 'typography-3', 'typography-4']),
  element: PropTypes.oneOf(['p', 'div', 'span']),
  children: PropTypes.string,
};

Text.defaultProps = {
  type: 'typography-4',
  element: 'p',
};


export default Text;
