import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './FlagList.css'
import Flag from '../Flag';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
// 
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
                        flag.name ? <div className='FlagName'>{flag.name} {
                            flag.wikipedia ? <a href={flag.wikipedia} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWikipediaW} fontSize="0.8em" /></a> : null
                        }{
                            flag.wikipediaFlag ? <a href={flag.wikipediaFlag} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFlag} fontSize="0.8em" /></a> : null
                        }</div> : null
                    }
                </div>
            ))}
        </div>
    )
})
