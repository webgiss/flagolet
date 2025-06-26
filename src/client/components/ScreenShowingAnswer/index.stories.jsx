import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import ScreenShowingAnswer from './index';

export default {
    title: 'Screen/ScreenShowingAnswer',
    component: ScreenShowingAnswer,
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
