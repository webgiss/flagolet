import { BACKDIAGONAL, CROSS, DECORATION, DIAGONAL, EMBLEM, HORIZONTAL_STRIPES, MOON, NORDIC_CROSS, PAN_ARAB_COLORS, PANAFRICAN_COLORS, STAR, TRIANGLE, UNION_JACK, VERTICAL_STRIPES } from '@/utils/constants/flagTags';
import { countries } from './countries';
import { createCourse } from './countrieTools';
import { AFRICA, ASIA, CARIBBEAN, CENTRAL_AMERICA, EUROPE, NORTH_AMERICA, OCEANIA, SOUTH_AMERICA } from '../constants/countryTags';

export const mainCourseDef = {
    id: 'main',
    name: { en: 'Main Course', fr: 'Cours Principal' },
    description: {
        en: '',
        fr: '',
    },
    lessons: [
        {
            id: 'triangle',
            name: { en: 'Triangles', fr: 'Triangles' },
            description: {
                en: 'Learn flags with triangular shape on the left.',
                fr: 'Apprenez les drapeaux avec une forme triangulaire sur le coté gauche.',
            },
            includedTags: [TRIANGLE],
            excludedTags: [],
        },
        {
            id: 'panafrican-colors',
            name: { en: 'Panafrican Colors', fr: 'Couleurs panafricaines' },
            description: {
                en: 'Learn flags with panafrican colors.',
                fr: 'Apprenez les drapeaux avec des couleurs panafricaines.',
            },
            includedTags: [PANAFRICAN_COLORS],
            excludedTags: [],
        },
        {
            id: 'pan-arab-colors',
            name: { en: 'Pan-Arab Colors', fr: 'Couleurs panarabes' },
            description: {
                en: 'Learn flags with pan-arab colors.',
                fr: 'Apprenez les drapeaux avec des couleurs panarabes.',
            },
            includedTags: [PAN_ARAB_COLORS],
            excludedTags: [],
        },
        {
            id: 'horizontal-stripes-without-decoration',
            name: { en: 'Horizontal Stripes without Decoration', fr: 'Bandes horizontales sans décorations' },
            description: {
                en: 'Learn flags with horizontal stripes without decoration.',
                fr: 'Apprenez les drapeaux avec des bandes horizontales sans décorations.',
            },
            includedTags: [HORIZONTAL_STRIPES],
            excludedTags: [TRIANGLE, DECORATION],
        },
        {
            id: 'horizontal-stripes-with-decoration',
            name: { en: 'Horizontal Stripes with Decoration', fr: 'Bandes horizontales avec décorations' },
            description: {
                en: 'Learn flags with horizontal stripes with decoration.',
                fr: 'Apprenez les drapeaux avec des bandes horizontales avec décorations.',
            },
            includedTags: [HORIZONTAL_STRIPES, DECORATION],
            excludedTags: [TRIANGLE, PANAFRICAN_COLORS, PAN_ARAB_COLORS],
        },
        {
            id: 'vertical-stripes',
            name: { en: 'Vertical Stripes', fr: 'Bandes verticales' },
            description: {
                en: 'Learn flags with vertical stripes.',
                fr: 'Apprenez les drapeaux avec des bandes verticales.',
            },
            includedTags: [VERTICAL_STRIPES],
            excludedTags: [],
        },
        {
            id: 'diagonal',
            name: { en: 'Diagonal', fr: 'Diagonale' },
            description: {
                en: 'Learn flags with diagonal stripes.',
                fr: 'Apprenez les drapeaux avec des bandes diagonales.',
            },
            includedTags: [DIAGONAL],
            excludedTags: [],
        },
        {
            id: 'backdiagonal',
            name: { en: 'Backdiagonal', fr: 'Contre-diagonale' },
            description: {
                en: 'Learn flags with backdiagonal stripes.',
                fr: 'Apprenez les drapeaux avec des bandes contre-diagonales.',
            },
            includedTags: [BACKDIAGONAL],
            excludedTags: [],
        },
        {
            id: 'cross',
            name: { en: 'Crosses', fr: 'Croix' },
            description: {
                en: 'Learn flags with a cross.',
                fr: "Apprenez les drapeaux avec une croix.",
            },
            includedTags: [CROSS],
            excludedTags: [],
        },
        {
            id: 'union-jack',
            name: { en: 'Union Jack', fr: 'Union Jack' },
            description: {
                en: 'Learn flags with the Union Jack.',
                fr: 'Apprenez les drapeaux incluant celui de l\'Union Jack.',
            },
            includedTags: [UNION_JACK],
            excludedTags: [],
        },
        {
            id: 'moon',
            name: { en: 'Moons', fr: 'Lunes' },
            description: {
                en: 'Learn flags with a moon.',
                fr: 'Apprenez les drapeaux avec une lune.',
            },
            includedTags: [MOON],
            excludedTags: [],
        },
        {
            id: 'star',
            name: { en: 'Stars without moon', fr: 'Étoiles sans lune' },
            description: {
                en: 'Learn flags with a star but without a moon.',
                fr: 'Apprenez les drapeaux avec une étoile mais sans lune.',
            },
            includedTags: [STAR],
            excludedTags: [MOON, UNION_JACK, TRIANGLE, PANAFRICAN_COLORS],
        },
    ]
}

export const byContinentCourseDef = {
    id: 'byContinent',
    name: { en: 'By Continent', fr: 'Par Continent' },
    description: {
        en: 'Learn flags by continent.',
        fr: 'Apprenez les drapeaux par continent.',
    },
    lessons: [
        {
            id: 'north-america',
            name: { en: 'North America', fr: 'Amérique du Nord' },
            description: {
                en: 'Learn flags of North American countries.',
                fr: 'Apprenez les drapeaux des pays d\'Amérique du Nord.',
            },
            includedTags: [NORTH_AMERICA],
            excludedTags: [],
        },
        {
            id: 'central-america',
            name: { en: 'Central America', fr: 'Amérique Centrale' },
            description: {
                en: 'Learn flags of Central American countries.',
                fr: 'Apprenez les drapeaux des pays d\'Amérique Centrale.',
            },
            includedTags: [CENTRAL_AMERICA],
            excludedTags: [],
        },
        {
            id: 'south-america',
            name: { en: 'South America', fr: 'Amérique du Sud' },
            description: {
                en: 'Learn flags of South American countries.',
                fr: 'Apprenez les drapeaux des pays d\'Amérique du Sud.',
            },
            includedTags: [SOUTH_AMERICA],
            excludedTags: [],
        },
        {
            id: 'caribbean',
            name: { en: 'Caribbean', fr: 'Caraïbes' },
            description: {
                en: 'Learn flags of Caribbean countries.',
                fr: 'Apprenez les drapeaux des pays des Caraïbes.',
            },
            includedTags: [CARIBBEAN],
            excludedTags: [],
        },
        {
            id: 'europe',
            name: { en: 'Europe', fr: 'Europe' },
            description: {
                en: 'Learn flags of European countries.',
                fr: 'Apprenez les drapeaux des pays d\'Europe.',
            },
            includedTags: [EUROPE],
            excludedTags: [],
        },
        {
            id: 'africa',
            name: { en: 'Africa', fr: 'Afrique' },
            description: {
                en: 'Learn flags of African countries.',
                fr: 'Apprenez les drapeaux des pays d\'Afrique.',
            },
            includedTags: [AFRICA],
            excludedTags: [],
        },
        {
            id: 'asia',
            name: { en: 'Asia', fr: 'Asie' },
            description: {
                en: 'Learn flags of Asian countries.',
                fr: 'Apprenez les drapeaux des pays d\'Asie.',
            },
            includedTags: [ASIA],
            excludedTags: [],
        },
        {
            id: 'oceania',
            name: { en: 'Oceania', fr: 'Océanie' },
            description: {
                en: 'Learn flags of Oceanian countries.',
                fr: 'Apprenez les drapeaux des pays d\'Océanie.',
            },
            includedTags: [OCEANIA],
            excludedTags: [],
        },
    ]
}


export const mainCourse = createCourse(countries, mainCourseDef)
export const byContinentCourse = createCourse(countries, byContinentCourseDef)
