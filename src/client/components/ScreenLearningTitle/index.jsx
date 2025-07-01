import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './ScreenLearningTitle.css'

import { useDispatch } from 'react-redux'
import { actions } from '@/redux/slices'
import { useLearningRemaining, useLearningTotal, useLessonDescription, useLessonTitle, useScreen } from '@/redux/selectors/learning.js'
import { Icon, Step, StepContent, StepDescription, StepGroup, StepTitle } from 'semantic-ui-react';
import classNames from 'classnames';
import { GUESSING, LEARNING, RESULTS, SHOWING_ANSWER } from '@/utils/constants/learningScreens';
// import { getOnClick } from '@/tools/components/helper';

export default createComponent(() => {
    const dispatch = useDispatch()


    const learningTotal = useLearningTotal()
    const learningRemaining = useLearningRemaining()
    const screen = useScreen()

    // const onAction = () => dispatch(actions.learning.doSomething({...}))
    // const onClick = getOnClick(dispatch, actions.learning.doSomething)

    const lessonTitle = useLessonTitle() || 'Lesson'
    const lessonDescription = useLessonDescription()

    const isLearning = screen == LEARNING
    const isGuessing = screen == GUESSING
    const isShowingAnswer = screen == SHOWING_ANSWER
    const isGuessingOrShowingAnswer = isGuessing || isShowingAnswer
    const isResults = screen == RESULTS

    const onSkipLearning = () => dispatch(actions.learning.skipLearning({}))


    return (
        <div className='ScreenLearningTitle'>
            <h1 className='ScreenLearningTitleText'>{lessonTitle}</h1>
            {
                lessonDescription ?
                    <p className='ScreenLearningTitleDescription'>{lessonDescription}</p>
                    : null
            }
            <StepGroup
                className='unstackable ScreenLearningTitleStepGroup'
                size='small'
            >
                <Step className={classNames('ScreenLearningTitleStep',{ active: isLearning })} >
                    <Icon name='eye' />
                    <StepContent>
                        <StepTitle className='ScreenLearningTitleStepTitle'>Learning</StepTitle>
                        {
                            isLearning ?
                                <StepDescription className='ScreenLearningTitleStepDescription'>Remaining: {learningRemaining} / {learningTotal}</StepDescription>
                                : null
                        }
                    </StepContent>
                </Step>
                <Step className={classNames('ScreenLearningTitleStep',{ active: isGuessingOrShowingAnswer })} link={isLearning} onClick={onSkipLearning}>
                    <Icon name='question' />
                    <StepContent>
                        <StepTitle className='ScreenLearningTitleStepTitle'>{isGuessing ? "Guessing" : "Answer"}</StepTitle>
                        {
                            isGuessingOrShowingAnswer ?
                                <StepDescription className='ScreenLearningTitleStepDescription'>Remaining: {learningRemaining} / {learningTotal}</StepDescription>
                                : null
                        }
                    </StepContent>
                </Step>
                <Step className={classNames('ScreenLearningTitleStep',{ active: isResults })} >
                    <Icon name='checkmark' />
                    <StepContent>
                        <StepTitle className='ScreenLearningTitleStepTitle'>Results</StepTitle>
                    </StepContent>
                </Step>
            </StepGroup>
        </div>
    )
})
