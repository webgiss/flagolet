import { combineReducers } from 'redux';
// plop-import-slice

export const sliceList = [
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
