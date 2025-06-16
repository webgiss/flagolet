
export const filterCountriesByTags = (countries, tagsIncluded, tagsExcluded) => {
    return countries.filter((country) => {
        const hasIncludedTags = tagsIncluded.every(tag => country.flag.tags.includes(tag));
        const hasExcludedTags = tagsExcluded.some(tag => country.flag.tags.includes(tag));
        return hasIncludedTags && !hasExcludedTags;
    });
}

export const createCourse = (countries, courseDef) => {
    const { id, name, lessons } = courseDef;
    const otherCodes = new Set(countries.map(country => country.code))
    const course = {
        id,
        name,
        lessons: lessons.map(lesson => {
            const { id: lessonId, name: lessonName, description, includedTags, excludedTags } = lesson;
            const countriesDefined = lesson.countries || [];
            const countriesFiltered = filterCountriesByTags(countries, includedTags, excludedTags);
            const countriesResult = Object.values(
                Object.fromEntries(
                    [...countriesFiltered, ...countriesDefined].map((country) => ([country.code, country]))
                )
            )
            countriesResult.forEach((country) => {
                if (otherCodes.has(country.code)) {
                    otherCodes.delete(country.code);
                }
            })
            return {
                id: lessonId,
                name: lessonName,
                description,
                countries: countriesResult,
            };
        }),
    };
    if (otherCodes.size > 0) {
        course.lessons.push({
            id: 'other',
            name: { en: 'Other Flags', fr: 'Autres Drapeaux' },
            description: {
                en: 'Flags that do not fit in the other categories.',
                fr: 'Drapeaux qui ne rentrent pas dans les autres catégories.',
            },
            countries: countries.filter(country => otherCodes.has(country.code)),
        });
    }

    return course;
}

export const sortCountries = (countries, lang) => {
    return [...countries].sort((a, b) => {
        if (a.name[lang] < b.name[lang]) return -1;
        if (a.name[lang] > b.name[lang]) return 1;
        return 0;
    });
}