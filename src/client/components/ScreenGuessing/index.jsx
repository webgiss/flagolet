import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './ScreenGuessing.css'
import QuizzPanel from '../QuizzPanel';

import { useDispatch } from 'react-redux'
import { useAnswer, useCurrent } from '@/redux/selectors/learning';
import { actions } from '@/redux/slices'

export default createComponent(() => {
    const dispatch = useDispatch()

    const country = useCurrent()
    const answer = useAnswer()

    const onInputChange = (answer) => dispatch(actions.learning.inputAnswerChanged({ answer }))
    const onValidate = (answer) => dispatch(actions.learning.applyAnswer({ answer }))

    return (
        <div className='ScreenGuessing'>
            <QuizzPanel
                country={country}
                name={answer}
                onInputChange={onInputChange}
                onValidate={onValidate}
            />
        </div>
    )
})
