import { fn } from '@storybook/test';

import CourseDescription from './index';
import { mainCourse } from '@/utils/data/courses';

export default {
    title: 'App/CourseDescription',
    component: CourseDescription,
    tags: ['autodocs'],
    parameters: {
    },
};

export const MainCourseFr = {
    args: {
        course: mainCourse,
        lang: 'fr',
        onStart: fn(),
    },
}

export const MainCourseEn = {
    args: {
        course: mainCourse,
        lang: 'en',
        onStart: fn(),
    },
}


