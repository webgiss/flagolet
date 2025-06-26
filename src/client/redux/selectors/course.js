import { useSelector } from "react-redux";

export const useCourseScreen = () => useSelector((state) => state.course.courseScreen);
export const useCourse = () => useSelector((state) => state.course.course);
export const useLang = () => useSelector((state) => state.course.lang);
