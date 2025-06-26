import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './ScreenLearning.css'

import { useDispatch } from 'react-redux'
import { actions } from '@/redux/slices'
import { useCurrent, useLang } from '@/redux/selectors/learning.js'
import LearningPanel from '../LearningPanel';

export default createComponent(() => {
    const dispatch = useDispatch()

    const country = useCurrent()
    const lang = useLang()

    const onNext = (code) => dispatch(actions.learning.nextLearning({code}))

    return (
        <div className='ScreenLearning'>
            <LearningPanel 
                lang={lang}
                country={country}
                onNext={onNext}
            />
        </div>
    )
})
