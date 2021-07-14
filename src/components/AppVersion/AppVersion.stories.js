import React from 'react';

import AppVersion from './AppVersion';

export default {
    component: AppVersion,
    title: 'AppVersion',
};

const Template = args => <AppVersion {...args} />;

export const Default = Template.bind({});

Default.args = {
    appVersion: {
        title: 'App Version Component',
        published_version: 'v0.0.0'
    }
};

