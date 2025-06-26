import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import QuizzResults from './index';

export default {
    title: 'App/QuizzResults',
    component: QuizzResults,
    tags: ['autodocs'],
    parameters: {
    },
};

export const Default = {
    decorators: [withReduxState({
        none: {
        },
    })],
    args: {
    },
}
