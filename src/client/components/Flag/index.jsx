import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './Flag.css'
import classNames from 'classnames';
import { Flag } from 'semantic-ui-react';

export default createComponent(({filename, big}) => {
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
