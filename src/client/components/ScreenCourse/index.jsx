import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './ScreenCourse.css'

import { useDispatch } from 'react-redux'
import { actions } from '@/redux/slices'
import { useCourse, useCourseScreen, useLang } from '@/redux/selectors/course.js'
import CourseDescription from '../CourseDescription';

export default createComponent(() => {
    const dispatch = useDispatch()

    const course = useCourse()
    const lang = useLang()

    // const onAction = () => dispatch(actions.course.doSomething({...}))

    return (
        <div className='ScreenCourse'>
            <CourseDescription 
                lang={lang}
                course={course}
                onStart={(lang, data) => dispatch(actions.learning.startLearning({lang, data}))}
            />
        </div>
    )
})
