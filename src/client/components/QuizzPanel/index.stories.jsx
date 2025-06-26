import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import QuizzPanel from './index';
import { countries } from '@/utils/data/countries';

export default {
    title: 'App/QuizzPanel',
    component: QuizzPanel,
    tags: ['autodocs'],
    args: {
        onValidate: fn(),
    },
    parameters: {
    },
};

export const Default = {
    args: {
        lang: 'fr',
        country: countries.filter(country => country.code === 'fr')[0],
        name: '',
    },
}
