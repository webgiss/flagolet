import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './QuizzResultPanel.css'
import Flag from '../Flag';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

export default createComponent(({ lang, country, answer, isCorrect, onNext }) => {
    console.log('QuizzResultPanel', { lang, country, answer, isCorrect, onNext })
    const name = country.name[lang]
    const longName = country.longName ? country.longName[lang] : ''
    console.log({ name, longName, answer, isCorrect })

    return (
        <div className='QuizzResultPanel Panel'>
            <div className='QuizzResultPanelInfos PanelInfos'>
                <Flag
                    filename={country.flag.file}
                    big={true}
                />
                <p
                    className={classNames(
                        'QuizzResultPanelName', 
                        'QuizzResultPanelText',
                        'PanelText',
                    )}
                >{name}</p>
                <p
                    className={classNames(
                        'QuizzResultPanelLongName', 
                        'QuizzResultPanelText',
                        'PanelText',
                    )}
                >{longName}</p>
                <p
                    className={classNames(
                        'QuizzResultPanelAnswer', 
                        'QuizzResultPanelText',
                        'PanelText',
                        isCorrect ? 'QuizzResultCorrect' : 'QuizzResultIncorrect',
                    )}
                >{answer}</p>
            </div>
            <form className='QuizzResultPanelForm PanelForm' onSubmit={() => onNext(country.code)}>
                <Button autoFocus className={classNames('QuizzResultPanelButton', 'PanelButton')} type="submit" primary>Next</Button>
            </form>
        </div>
    )
})
