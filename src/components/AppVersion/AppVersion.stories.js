import React from 'react';

import AppVersion from './AppVersion';

export default {
    title: 'AppVersion',
    component: AppVersion,
};

const Template = args => <AppVersion {...args} />;

export const Default = Template.bind({});
Default.args = {
  version: 'v0.0.98',
  publishDate: 'Tues 13 2021',
};
