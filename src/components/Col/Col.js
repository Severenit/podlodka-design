import PropTypes from 'prop-types';
import { useMemo } from 'react';
import cn from 'classnames';

import s from './Col.module.css';

const Col = ({children, className, gridArea, justifyContent, alignItems}) => {
  const style = useMemo(() => {
    let result = {};

    if (gridArea) {
      result = {
        ...result,
        gridArea,
      }
    }

    if (justifyContent) {
      result = {
        ...result,
        justifyContent,
      }
    }

    if (alignItems) {
      result = {
        ...result,
        alignItems
      }
    }

    return result;
  }, [gridArea]);

  return (
    <div className={cn(s.root, className)} style={style}>
      {children}
    </div>
  );
};

Col.propTypes = {
  gridArea: PropTypes.string,
  justifyContent: PropTypes.oneOf(['flex-end', 'flex-start', 'space-around', 'center', 'space-between']),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'stretch', 'flex-end', 'flex-start']),
};

export default Col;
