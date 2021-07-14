import React from 'react';

import Footer from './Footer';

export default {
    component: Footer,
    title: 'Footer',
};

const Template = args => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
    footer: {
        id: 1,
        title: 'Test Footer',
        published_version: 'v0.0.0 published env'
    }
};

