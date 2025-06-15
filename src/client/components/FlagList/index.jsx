import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './FlagList.css'
import Flag from '../Flag';
import classNames from 'classnames';

export default createComponent(({ flags, onFlagSelect }) => {
    return (
        <div className='FlagList'>
            {flags.map((flag, index) => (
                <div 
                    key={index} 
                    className={classNames({FlagItem:true, Selectable: !!onFlagSelect})} 
                    onClick={() => onFlagSelect && onFlagSelect(flag)}
                >
                    <Flag filename={flag.filename} big={false}/>
                    {
                        flag.name ? <div className='FlagName'>{flag.name}</div> : null
                    }
                </div>
            ))}
        </div>
    )
})
