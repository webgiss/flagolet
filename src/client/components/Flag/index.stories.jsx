import { fn } from '@storybook/test';

import Flag from './index';

export default {
    title: 'App/Flag',
    component: Flag,
    tags: ['autodocs'],
    parameters: {
    },
};

export const France = {
    args: {
        filename: 'Flag_of_France.svg',
        big: true,
    },
}

export const Nepal = {
    args: {
        filename: 'Flag_of_Nepal.svg',
        big: true,
    },
}

export const Qatar = {
    args: {
        filename: 'Flag_of_Qatar.svg',
        big: true,
    },
}

export const FranceSmall = {
    args: {
        filename: 'Flag_of_France.svg',
        big: false,
    },
}

export const NepalSmall = {
    args: {
        filename: 'Flag_of_Nepal.svg',
        big: false,
    },
}

export const QatarSmall = {
    args: {
        filename: 'Flag_of_Qatar.svg',
        big: false,
    },
}