import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
  const { class1, children } = props;

  return (
    <section className={class1}>
      <div className="container-xxl">{children}</div>
    </section>
  );
};

Container.propTypes = {
  class1: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  class1: '',
};

export default Container;
