import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import ScreenResults from './index';

export default {
    title: 'Screen/ScreenResults',
    component: ScreenResults,
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
