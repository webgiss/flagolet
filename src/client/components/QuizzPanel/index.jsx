import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './QuizzPanel.css'
import { Button, Input } from 'semantic-ui-react';
import Flag from '../Flag';

export default createComponent(({lang, country, name, onInputChange, onValidate}) => {

    const onChange = (e, { value }) => {
        console.log("onChange", value);
        onInputChange(value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onValidate(name);
    }

    return (
        <div className='QuizzPanel Panel'>
            <div className='QuizzPanelInfos PanelInfos'>
                <Flag
                    filename={country.flag.file}
                    big={true}
                />
            </div>
            <form className='QuizzPanelQuestion PanelQuestion QuizzPanelForm PanelForm' onSubmit={onSubmit}>
                <Input autoFocus className='QuizzPanelInput PanelInput' input={name} type='text' focus={true} onChange={onChange} />
                <Button className='QuizzPanelButton PanelButton' type='submit' primary>Validate</Button>
            </form>
        </div>
    )
})
