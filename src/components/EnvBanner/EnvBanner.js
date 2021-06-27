import React from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const EnvBanner = (props) => {
  const classes = classnames(
    'bg-secondary-darker',
    'padding-y-1',
    'text-center',
    'text-gold',
  );

  return (
    <div className={classes}>
      EPA {props.label} environment: The content on this page is not production data and this site is being used for <b>development</b> and/or <b>testing</b> purposes only.
    </div>
  );
};

EnvBanner.propTypes = {
  label: PropTypes.string
};

export default EnvBanner;