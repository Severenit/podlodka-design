import React, { useMemo } from 'react';
import cn from 'classnames';

import s from './Heading.module.css';
import PropTypes from 'prop-types';
import Button from '../Button';

const Heading = ({
  size = 'xl',
  children,
}) => {
  const el = useMemo(() => {
    switch (size) {
      case 'xl':
        return 1;
      case 'l':
        return 2;
      case 'm':
        return 3;
      case 's':
        return 4;
      default:
        return 1;
    }
  }, [size]);
  return React.createElement(`h${el}`, {
    className: cn(s.root)
  }, children);
};

Heading.propTypes = {
  size: PropTypes.oneOf(['xl', 'l', 'm', 's']),
  children: PropTypes.string,
};


export default Heading;
