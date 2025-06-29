import { createSlice } from "@/redux/tools/createSlice";
import { TRIANGLE } from "@/utils/constants/flagTags";
import { GUESSING, LEARNING, RESULTS, SHOWING_ANSWER } from "@/utils/constants/learningScreens";
import { countries } from "@/utils/data/countries";

const getRandomNumber = (count) => {
    return Math.floor(Math.random() * count);
}

const selectCode = (state) => {
    const index = getRandomNumber(state.remainingCodes.length);
    const code = state.remainingCodes[index];
    state.current = state.learningData[code];
}

const slice = createSlice({
    name: "learning",
    initialState: {
        learningScreen: false,
        learningData: {},
        remainingCodes: [],
        stats: {
            total: 0,
            correct: 0,
            incorrect: 0,
            byCode: {},
        },
        current: null,
        lang: 'fr',
        screen: null,
        answer: '',
        lessonTitle: '',
        lessonDescription: '',
        guessedAnswer: null,
        statusAnswer: null,
    },
    reducers: {
        basicAction(state, action) {
            console.log("Basic action called with payload:", action.payload);
        },
        startLearning(state, action) {
            action = action || {};
            action.payload = action.payload || {};
            let { lang, data, title, description } = action.payload;
            lang = lang || 'fr';

            state.lang = lang;
            state.lessonTitle = title;
            state.lessonDescription = description;
            state.stats.total = 0
            state.stats.correct = 0;
            state.stats.incorrect = 0;
            Object.keys(state.stats.byCode).forEach(k => delete state.stats.byCode[k])
            Object.keys(state.learningData).forEach(k => state.stats.byCode[k] = 0)
            Object.keys(state.learningData).forEach(k => delete state.learningData[k])

            state.learningScreen = true;
            if (data && data.length > 0) {
                data.forEach(item => {
                    const code = item.code;
                    const country = countries.filter(country => country.code === code)[0]
                    if (!state.learningData[code] && country) {
                        state.learningData[code] = country;
                    }
                })
            } else {
                countries.filter(country => country.flag.tags.includes(TRIANGLE)).forEach(country => {
                    if (!state.learningData[country.code]) {
                        state.learningData[country.code] = country;
                    }
                })
            }
            state.remainingCodes.splice(0)
            state.remainingCodes.splice(0, 0, ...Object.keys(state.learningData))
            state.current = null;
            selectCode(state)
            state.screen = LEARNING;
        },
        nextLearning(state, action) {
            if (state.current && state.remainingCodes.indexOf(state.current.code) > -1) {
                state.remainingCodes.splice(state.remainingCodes.indexOf(state.current.code), 1);
            }
            state.current = null;
            if (state.remainingCodes.length === 0) {
                state.screen = GUESSING;
                state.answer = '';
                state.guessedAnswer = null;
                state.statusAnswer = null;
                state.remainingCodes.splice(0, 0, ...Object.keys(state.learningData))
                selectCode(state)
                return;
            } else {
                selectCode(state)
            }
        },
        inputAnswerChanged(state, action) {
            action = action || {};
            action.payload = action.payload || {};
            const { answer } = action.payload;
            if (!state.current) return;

            state.answer = answer;
        },
        applyAnswer(state, action) {
            action = action || {};
            action.payload = action.payload || {};
            let { answer } = action.payload;
            if (!state.current) return;

            answer = answer.trim()

            state.guessedAnswer = answer;
            state.stats.total += 1;
            if (state.current.name[state.lang] === answer) {
                state.statusAnswer = true;
                state.stats.correct += 1;
                if (state.current && state.remainingCodes.indexOf(state.current.code) > -1) {
                    state.remainingCodes.splice(state.remainingCodes.indexOf(state.current.code), 1);
                }
            } else {
                state.statusAnswer = false;
                state.stats.incorrect += 1;
            }
            state.screen = SHOWING_ANSWER;
        },
        nextGuessing(state, action) {
            state.current = null;
            if (state.remainingCodes.length === 0) {
                state.screen = RESULTS;
                return;
            } else {
                selectCode(state)
            }
            state.screen = GUESSING;
            state.answer = '';
            state.statusAnswer = null;
            state.guessedAnswer = null;
        },
        acknowledgeResults(state, action) {
            state.learningScreen = false;
            state.screen = null;
            Object.keys(state.learningData).forEach(k => delete state.learningData[k])
            state.remainingCodes.splice(0);
            state.stats.total = 0;
            state.stats.correct = 0;
            state.stats.incorrect = 0;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase('course/startCourse', (state, action) => {
                state.learningScreen = false;
            })
    },
})

export const {
    basicAction,
    startLearning,
    nextLearning,
    inputAnswerChanged,
    applyAnswer,
    nextGuessing,
    acknowledgeResults,
} = slice.actions;

export default slice