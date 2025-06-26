import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import QuizzResultPanel from './index';
import { countries } from '@/utils/data/countries';

export default {
    title: 'App/QuizzResultPanel',
    component: QuizzResultPanel,
    tags: ['autodocs'],
    parameters: {
    },
};

export const FranceCorrect = {
    args: {
        lang: 'fr',
        country: countries.filter(country => country.code === 'fr')[0],
        answer: 'France',
        isCorrect: true,
        onNext: fn(),
    },
}

export const NepalIncorrect = {
    args: {
        lang: 'fr',
        country: countries.filter(country => country.code === 'np')[0],
        answer: 'Nepol',
        isCorrect: false,
        onNext: fn(),
    },
}

export const UsaIncorrect = {
    args: {
        lang: 'fr',
        country: countries.filter(country => country.code === 'us')[0],
        answer: 'Etat unis',
        isCorrect: false,
        onNext: fn(),
    },
}
