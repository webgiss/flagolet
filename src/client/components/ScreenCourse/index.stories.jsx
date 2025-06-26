import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import ScreenCourse from './index';

export default {
    title: 'App/ScreenCourse',
    component: ScreenCourse,
    tags: ['autodocs'],
    parameters: {
    },
};

export const Default = {
    decorators: [withReduxState({
        course: {
        },
    })],
    args: {
    },
}
