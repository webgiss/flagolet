import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './LearningScreens.css'

// import { useDispatch } from 'react-redux'
// import { actions } from '@/redux/slices'
import { useScreen } from '@/redux/selectors/learning.js'
import { LEARNING, GUESSING, RESULTS, SHOWING_ANSWER } from '@/utils/constants/learningScreens';
import ScreenLearning from '../ScreenLearning';
import ScreenGuessing from '../ScreenGuessing';
import ScreenShowingAnswer from '../ScreenShowingAnswer';
import ScreenResults from '../ScreenResults';
import ScreenLearningTitle from '../ScreenLearningTitle';
// import { getOnClick } from '@/tools/components/helper';

export default createComponent(() => {
    // const dispatch = useDispatch()

    const screen = useScreen()

    // const onAction = () => dispatch(actions.learning.doSomething({...}))
    // const onClick = getOnClick(dispatch, actions.learning.doSomething)


    return (
        <div className='LearningScreens'>
            <ScreenLearningTitle />
            {screen === LEARNING && <ScreenLearning />}
            {screen === GUESSING && <ScreenGuessing />}
            {screen === SHOWING_ANSWER && <ScreenShowingAnswer />}
            {screen === RESULTS && <ScreenResults />}
        </div>
    )
})
