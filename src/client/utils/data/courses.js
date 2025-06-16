import { BACKDIAGONAL, CROSS, DECORATION, DIAGONAL, EMBLEM, HORIZONTAL_STRIPES, MOON, NORDIC_CROSS, PAN_ARAB_COLORS, PANAFRICAN_COLORS, STAR, TRIANGLE, UNION_JACK, VERTICAL_STRIPES } from '@/utils/constants/flagTags';
import { countries } from './countries';
import { createCourse } from './countrieTools';

export const mainCourseDef = {
    id: 'main',
    name: { en: 'Main Course', fr: 'Cours Principal' },
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
            name: { en: 'Backdiagonal', fr: 'Arrière-diagonale' },
            description: {
                en: 'Learn flags with backdiagonal stripes.',
                fr: 'Apprenez les drapeaux avec des bandes arrière-diagonales.',
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

export const mainCourse = createCourse(countries, mainCourseDef)
