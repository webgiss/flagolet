import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './ScreenLearningTitle.css'

import { useDispatch } from 'react-redux'
// import { actions } from '@/redux/slices'
import { useLearningRemaining, useLearningTotal, useLessonDescription, useLessonTitle } from '@/redux/selectors/learning.js'
// import { getOnClick } from '@/tools/components/helper';

export default createComponent(() => {
    // const dispatch = useDispatch()


    const learningTotal = useLearningTotal()
    const learningRemaining = useLearningRemaining()

    // const onAction = () => dispatch(actions.learning.doSomething({...}))
    // const onClick = getOnClick(dispatch, actions.learning.doSomething)

    const lessonTitle = useLessonTitle() || 'Lesson'
    const lessonDescription = useLessonDescription()

    return (
        <div className='ScreenLearningTitle'>
            <h1 className='ScreenLearningTitleText'>{lessonTitle}</h1>
            {
                lessonDescription ?
                <p className='ScreenLearningTitleDescription'>{lessonDescription}</p>
                : null
            }
            <div className='ScreenLearningTitleStats'>
                <span className='ScreenLearningTitleStatsText'>Remaining: {learningRemaining} / {learningTotal}</span>
            </div>
        </div>
    )
})
