import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './ScreenResults.css'

import { useDispatch } from 'react-redux'
import { actions } from '@/redux/slices'
import { useStats } from '@/redux/selectors/learning';
import QuizzResults from '../QuizzResults';
// import { useXXYY } from '@/redux/selectors/learning.js'
// import { getOnClick } from '@/tools/components/helper';

export default createComponent(() => {
    const dispatch = useDispatch()

    const stats = useStats()

    const onExit = () => dispatch(actions.learning.acknowledgeResults())

    return (
        <div className='ScreenResults'>
            <QuizzResults
                stats={stats}
                onExit={onExit}
                />
        </div>
    )
})
