import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgUri from 'react-native-svg';

const propTypes = {
  fileName: PropTypes.string
}

const SvgImage = ({
  className,
  fileName,
  ...props
}) => {

  const classes = classNames(
    'svgImage',
    className
  );

  return (
    <>
      {(fileName) &&
        <SvgUri
          {...props}
          className={classes}
          width="50"
          height="50"
          source={require('./../../../assets/images/' + fileName)}
        />
      }
    </>
  );
}

SvgImage.propTypes = propTypes;

export default SvgImage;