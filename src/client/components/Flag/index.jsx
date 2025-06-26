import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './Flag.css'
import classNames from 'classnames';
import { Flag } from 'semantic-ui-react';

// import { useDispatch } from 'react-redux'
// import { actions } from '@/redux/slices'
// import { useXXYY } from '@/redux/selectors/none.js'
// import { getOnClick } from '@/tools/components/helper';

export default createComponent(({filename, big}) => {
    // const dispatch = useDispatch()

    // const xxyy = useXXYY()

    // const onAction = () => dispatch(actions.none.doSomething({...}))
    // const onClick = getOnClick(dispatch, actions.none.doSomething)

    return (
        <div className={classNames({Flag: true, Big: big})}>
            <div className='FlagInner'>
                <img
                    className='FlagImage'
                    src={`${__BASE_PATH__}flags/${filename}`}
                />
            </div>
        </div>
    )
})
