import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import ScreenGuessing from './index';

export default {
    title: 'Screen/ScreenGuessing',
    component: ScreenGuessing,
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
