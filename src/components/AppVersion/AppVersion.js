import React from "react";
import PropTypes from 'prop-types';

import './AppVersion.scss';

export const AppVersion = ({
  version,
  publishDate,
}) => {
  return (
    <div className="app-version-container">
      <p>
        {`${version} published ${publishDate}`}
      </p>
    </div>
  );
};

AppVersion.propTypes = {
  version: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
};

export default AppVersion;
