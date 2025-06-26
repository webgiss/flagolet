import { createSlice } from "@/redux/tools/createSlice";

const slice = createSlice({
    name: "course",
    initialState: {
        courseScreen: false,
        lang: 'fr',
        course: null,
    },
    reducers: {
        basicAction(state, action) {
            console.log("Basic action called with payload:", action.payload);
        },
        startCourse(state, action) {
            action = action || {};
            action.payload = action.payload || {};
            let { lang, course } = action.payload;
            lang = lang || 'fr';

            state.lang = lang;
            state.courseScreen = true;
            state.course = course;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase('learning/startLearning', (state, action) => {
                state.courseScreen = false;
            })
            .addCase('learning/acknowledgeResults', (state, action) => {
                state.courseScreen = true;
            });
    },
})

export const {
    basicAction,
} = slice.actions;

export default slice