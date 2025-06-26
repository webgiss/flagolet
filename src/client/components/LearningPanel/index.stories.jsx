import { fn } from '@storybook/test';

import LearningPanel from './index';
import { countries } from '@/utils/data/countries';

export default {
    title: 'App/LearningPanel',
    component: LearningPanel,
    tags: ['autodocs'],
    args: {
        onNext: fn(),
    },
};

export const France = {
    args: {
        lang: 'fr',
        country: countries.filter(country => country.code === 'fr')[0],
    },
}

export const Nepal = {
    args: {
        lang: 'fr',
        country: countries.filter(country => country.code === 'np')[0],
    },
}

export const Quatar = {
    args: {
        lang: 'fr',
        country: countries.filter(country => country.code === 'qa')[0],
    },
}
