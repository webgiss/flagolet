import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import FlagList from './index';
import { countries } from '@/utils/data/countries';

const getFlags = (lang) => {
    return countries.map((country) => ({
        filename: country.flag.file,
        name: country.name[lang],
    }));
}

const flags_fr = getFlags('fr');
const flags_en = getFlags('en');

export default {
    title: 'App/FlagList',
    component: FlagList,
    tags: ['autodocs'],
    parameters: {
    },
};

export const Default = {
    args: {
        flags: flags_fr,
    },
}

export const Selectable = {
    args: {
        flags: flags_fr,
        onFlagSelect: fn(),
    },
}

export const English = {
    args: {
        flags: flags_en,
    },
}