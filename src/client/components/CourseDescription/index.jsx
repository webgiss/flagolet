import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './CourseDescription.css'
import FlagList from '../FlagList';
import { sortCountries } from '@/utils/data/countrieTools';

export default createComponent(({ course, lang }) => {
    return (
        <div className='CourseDescription'>
            <h1>{course.name[lang]}</h1>
            <div className='CourseDescriptionContent'>
                {
                    course.lessons.map((lesson) => (
                        <div key={lesson.id} className='CourseDescriptionLesson'>
                            <h2 className='CourseDescriptionLessonTitle'>{lesson.name[lang]}</h2>
                            <div className='CourseDescriptionLessonContent'>
                                <p className='CourseDescriptionLessonDescription'>{lesson.description[lang]}</p>
                                <FlagList
                                    flags={sortCountries(lesson.countries, lang).map((country) => ({
                                        filename: country.flag.file,
                                        name: country.name[lang],
                                        code: country.code,
                                    }))}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
})
