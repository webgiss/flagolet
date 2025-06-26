import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import ScreenLearning from './index';

export default {
    title: 'Screen/ScreenLearning',
    component: ScreenLearning,
    tags: ['autodocs'],
    parameters: {
    },
};

export const Default = {
    decorators: [withReduxState({
        learning: {
        },
    })],
    args: {
    },
}
