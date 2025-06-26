import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import LearningScreens from './index';

export default {
    title: 'Screen/LearningScreens',
    component: LearningScreens,
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
