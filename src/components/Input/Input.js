import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Input.module.css';
import { useState } from 'react';
import Button from '../Button';

const Input = ({
  defaultValue,
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  }

  return (
    <input
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      className={cn(s.root)}
      type="text"
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
