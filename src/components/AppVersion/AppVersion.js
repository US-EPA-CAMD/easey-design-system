import React from 'react';

const AppVersion = props => {
    const { published_version } = props.appVersion;

    return (
        <div>Version {published_version}</div>
    );
};

export default AppVersion;
