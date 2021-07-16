import React from 'react';

import './AppVersion.scss';

const AppVersion = props => {
    const { published_version } = props.appVersion;

    return (
        <div className="app-version-container">
            <p>
                {published_version}
            </p>
        </div>
    );
};

export default AppVersion;
