import { actions, slices } from "@/redux/slices";
import { init_debug } from "@/tools/debug";
import { mainCourse, byContinentCourse } from "@/utils/data/courses";

window.mainCourse = mainCourse;
window.byContinentCourse = byContinentCourse;
window.startMainCourse = () => {
  window.store.dispatch(actions.course.startCourse({ lang: "fr", course: mainCourse }));
}
window.startByContinentCourse = () => {
  window.store.dispatch(actions.course.startCourse({ lang: "fr", course: byContinentCourse }));
}

export const init = (store) => {
  init_debug(store, actions, slices);
  store.dispatch(actions.course.startCourse({ lang: "fr", course: mainCourse }));
}