import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './ScreenShowingAnswer.css'
import QuizzResultPanel from '../QuizzResultPanel';

import { useDispatch } from 'react-redux'
import { actions } from '@/redux/slices'
import { useCurrent, useGuessedAnswer, useLang, useStatusAnswer } from '@/redux/selectors/learning.js'

export default createComponent(() => {
    const dispatch = useDispatch()

    const country = useCurrent()
    const lang = useLang()
    const answer = useGuessedAnswer()
    const isCorrect = useStatusAnswer()
    const onNext = () => dispatch(actions.learning.nextGuessing({code: country.code}))

    return (
        <div className='ScreenShowingAnswer'>
            <QuizzResultPanel
                lang={lang}
                country={country}
                answer={answer}
                isCorrect={isCorrect}
                onNext={onNext}
            />
        </div>
    )
})
