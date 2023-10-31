import React from 'react';
import PropTypes from 'prop-types';
import ReactImageZoom from 'react-image-zoom';

const CustomImageZoom = ({
  width, height, zoomWidth, img,
}) => (
  <ReactImageZoom width={width} height={height} zoomWidth={zoomWidth} img={img} />
);

CustomImageZoom.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  zoomWidth: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CustomImageZoom;
