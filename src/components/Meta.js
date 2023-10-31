import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Meta = (props) => {
  const { title } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ title }</title>
    </Helmet>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Meta;
