import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
  const {
    type, name, placeholder, classname, class1,
  } = props;
  return (
    <div className={class1}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classname: PropTypes.string,
  class1: PropTypes.string,
};

CustomInput.defaultProps = {
  classname: '',
  class1: '',
};

export default CustomInput;
