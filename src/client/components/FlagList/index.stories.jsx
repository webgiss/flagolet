import { fn } from '@storybook/test';
import { withReduxState } from '@/tools/components/storybook/withReduxDecorator'

import FlagList from './index';
import { countries } from '@/utils/data/countries';
import { BACKDIAGONAL, CROSS, DECORATION, DIAGONAL, EMBLEM, HORIZONTAL_STRIPES, MOON, NORDIC_CROSS, PAN_ARAB_COLORS, PANAFRICAN_COLORS, STAR, TRIANGLE, UNION_JACK, VERTICAL_STRIPES } from '@/utils/constants/flagTags';

const filterByTags = (countries, tagsIncluded, tagsExcluded) => {
    return countries.filter((country) => {
        const hasIncludedTags = tagsIncluded.every(tag => country.flag.tags.includes(tag));
        const hasExcludedTags = tagsExcluded.some(tag => country.flag.tags.includes(tag));
        return hasIncludedTags && !hasExcludedTags;
    });
}

const getFlags = (lang, countries) => {
    return countries.map((country) => ({
        filename: country.flag.file,
        name: country.name[lang],
        code: country.code,
        tags: country.flag.tags,
    })).sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
}

const getSubsetFlags = (tagsIncluded, tagsExcluded) => getFlags('fr', filterByTags(countries, tagsIncluded, tagsExcluded));

window.getSubsetFlags = getSubsetFlags;

export default {
    title: 'App/FlagList',
    component: FlagList,
    tags: ['autodocs'],
    parameters: {
    },
};

export const Default = {
    args: {
        flags: getFlags('fr', countries),
    },
}

export const Selectable = {
    args: {
        flags: getFlags('fr', countries),
        onFlagSelect: fn(),
    },
}

export const English = {
    args: {
        flags: getFlags('en', countries),
    },
}

export const Triangles = {
    args: {
        flags: getSubsetFlags([TRIANGLE], [])
    },
}

export const PanafricanColors = {
    args: {
        flags: getSubsetFlags([PANAFRICAN_COLORS], [])
    },
}

export const PanArabColors = {
    args: {
        flags: getSubsetFlags([PAN_ARAB_COLORS], [])
    },
}

export const HorizontalStripesWithoutDecoration = {
    args: {
        flags: getSubsetFlags([HORIZONTAL_STRIPES], [TRIANGLE, DECORATION])
    },
}

export const HorizontalStripesWithDecoration = {
    args: {
        flags: getSubsetFlags([HORIZONTAL_STRIPES, DECORATION], [TRIANGLE, PANAFRICAN_COLORS, PAN_ARAB_COLORS])
    },
}

export const VerticalStripes = {
    args: {
        flags: getSubsetFlags([VERTICAL_STRIPES], []),
    },
}

export const UnionJack = {
    args: {
        flags: getSubsetFlags([UNION_JACK], []),
    },
}

export const Crosses = {
    args: {
        flags: getSubsetFlags([CROSS], []),
    },
}

export const Moons = {
    args: {
        flags: getSubsetFlags([MOON], []),
    },
}

export const Star = {
    args: {
        flags: getSubsetFlags([STAR], []),
    },
}

export const StarWithoutMoon = {
    args: {
        flags: getSubsetFlags([STAR], [MOON, UNION_JACK, TRIANGLE, PANAFRICAN_COLORS]),
    },
}

export const Diagonal = {
    args: {
        flags: getSubsetFlags([DIAGONAL], []),
    },
}

export const BackDiagonal = {
    args: {
        flags: getSubsetFlags([BACKDIAGONAL], []),
    },
}

export const OtherTags = {
    args: {
        flags: getSubsetFlags([], [
            TRIANGLE, 
            HORIZONTAL_STRIPES, 
            VERTICAL_STRIPES, 
            PANAFRICAN_COLORS, 
            PAN_ARAB_COLORS, 
            CROSS, 
            NORDIC_CROSS, 
            MOON, 
            STAR, 
            DIAGONAL, 
            BACKDIAGONAL, 
            UNION_JACK
        ]),
    },
}

export const Decoration = {
    args: {
        flags: getSubsetFlags([DECORATION], []),
    },
}

export const WithoutDecoration = {
    args: {
        flags: getSubsetFlags([], [DECORATION]),
    },
}