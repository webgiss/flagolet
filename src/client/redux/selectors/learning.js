import { useSelector } from "react-redux";

// export const useXXX = () => useSelector((state) => state.learning.XXX)
export const useLearningScreen = () => useSelector((state) => state.learning.learningScreen);
export const useStats = () => useSelector((state) => state.learning.stats);
export const useCurrent = () => useSelector((state) => state.learning.current);
export const useLang = () => useSelector((state) => state.learning.lang);
export const useScreen = () => useSelector((state) => state.learning.screen);
export const useAnswer = () => useSelector((state) => state.learning.answer);
export const useGuessedAnswer = () => useSelector((state) => state.learning.guessedAnswer);
export const useStatusAnswer = () => useSelector((state) => state.learning.statusAnswer);
export const useLearningTotal = () => useSelector((state) => Object.keys(state.learning.learningData).length);
export const useLearningRemaining = () => useSelector((state) => state.learning.remainingCodes.length);
export const useLessonTitle = () => useSelector((state) => state.learning.lessonTitle);
export const useLessonDescription = () => useSelector((state) => state.learning.lessonDescription);

