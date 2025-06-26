import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './QuizzResults.css'
import { Button } from 'semantic-ui-react';

export default createComponent(({ stats, onExit }) => {
    return (
        <div className='QuizzResults'>
            <h1>Quizz Results</h1>
            <p>Here you can see the results of your quizz.</p>
            <ul>
                <li>
                    <strong>Total Questions:</strong> {stats.total}
                </li>
                <li>
                    <strong>Correct Answers:</strong> {stats.correct}
                </li>
                <li>
                    <strong>Incorrect Answers:</strong> {stats.incorrect}
                </li>
            </ul>
            <Button primary onClick={onExit}>Exit</Button>
        </div >
    )
})
