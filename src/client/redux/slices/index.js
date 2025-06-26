import { combineReducers } from 'redux';
import learning from './slice/learning';
import course from './slice/course';
// plop-import-slice

export const sliceList = [
    learning,
    course,
    // plop-insert-slice
]

export const slices = sliceList.reduce((acc, slice) => {
    acc[slice.name] = slice;
    return acc;
}, {});

export const reducer = sliceList.reduce((acc, slice) => {
    acc[slice.name] = slice.reducer;
    return acc;
}, {});

export const actions = sliceList.reduce((acc, slice) => {
    acc[slice.name] = slice.actions;
    return acc;
}, {});
