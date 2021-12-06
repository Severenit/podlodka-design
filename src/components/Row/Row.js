import { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Row.module.css';


const Row = ({size = 0, grid = false, gridColumns, gridTemplate, children, className}) => {
  const style = useMemo(() => {
    let result = {}
    if (gridColumns) {
      result = {
        ...result,
        gridTemplateColumns: gridColumns,
      }
    }

    if (gridTemplate) {
      result = {
        ...result,
        gridTemplateAreas: gridTemplate
      }
    }

    return result;
  }, [gridColumns, gridTemplate]);

  return (
    <div
      style={style}
      className={
        cn(
          s.root,
          s[`m${size}`],
          className, {
            [s.grid]: grid
          })}>
      {children}
    </div>
  );
};

Row.propTypes = {
  size: PropTypes.oneOf([0, 100, 200, 300, 400]),
  grid: PropTypes.bool,
  gridColumns: PropTypes.string,
  gridTemplate: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element
};

export default Row;
