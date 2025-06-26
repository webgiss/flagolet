import { actions, slices } from "@/redux/slices";
import { init_debug } from "@/tools/debug";
import { mainCourse } from "@/utils/data/courses";

export const init = (store) => {
  init_debug(store, actions, slices);
  store.dispatch(actions.course.startCourse({ lang: "fr", course: mainCourse }));
}