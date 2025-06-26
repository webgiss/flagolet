import React from 'react'
import createComponent from '@/tools/components/createComponent';
import './CourseDescription.css'
import FlagList from '../FlagList';
import { sortCountries } from '@/utils/data/countrieTools';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default createComponent(({ course, lang, onStart }) => {
    const onStartGenerator = (lang, lesson) => {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            onStart(lang, lesson.countries, lesson.name[lang], lesson.description[lang]);
        }
    }
    return (
        <div className='CourseDescription'>
            <h1>{course.name[lang]}</h1>
            <div className='CourseDescriptionContent'>
                {
                    course.lessons.map((lesson) => (
                        <div key={lesson.id} className='CourseDescriptionLesson'>
                            <h2 className='CourseDescriptionLessonTitle'>{lesson.name[lang]} <a href='#' onClick={onStartGenerator(lang,lesson)}><FontAwesomeIcon icon={faCirclePlay} /></a></h2>
                            <div className='CourseDescriptionLessonContent'>
                                <p className='CourseDescriptionLessonDescription'>{lesson.description[lang]}</p>
                                <FlagList
                                    flags={sortCountries(lesson.countries, lang).map((country) => ({
                                        filename: country.flag.file,
                                        name: country.name[lang],
                                        code: country.code,
                                        wikipedia: country.wikipedia[lang],
                                        wikipediaFlag: country.flag.wikipedia[lang],
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
