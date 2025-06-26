import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './LearningPanel.css'
import Flag from '../Flag';
import { Button } from 'semantic-ui-react';

export default createComponent(({ lang, country, onNext }) => {
    const name = country.name[lang]
    const longName = country.longName ? country.longName[lang] : ''
    console.log({onNext})
    const onClick = () => {
        onNext(country.code)
    }

    return (
        <div className='LearningPanel Panel'>
            <div className='LearningPanelInfos PanelInfos'>
                <Flag
                    filename={country.flag.file}
                    big={true}
                />
                <p className='LearningPanelName LearningPanelText PanelText'>{name}</p>
                <p className='LearningPanelLongName LearningPanelText PanelText'>{longName}</p>
            </div>
            <Button className='LearningPanelButton PanelButton' onClick={()=>{console.log("poidex",onClick,onNext); onClick();}} primary>Next</Button>
        </div>
    )
})
