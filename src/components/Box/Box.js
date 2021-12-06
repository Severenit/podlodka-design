import cn from 'classnames';

import s from './Box.module.css';

const Box = ({
  className,
  children
}) => {
  return (
    <div className={cn(s.root, className)}>
      { children }
    </div>
  );
};

export default Box;
