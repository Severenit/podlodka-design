import s from './Checkbox.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  label,
  checked,
  id
}) => {
  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <div className={s.root}>
      <input id={id} type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} />
      <label className={s.label} htmlFor={id}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
