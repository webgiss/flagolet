import 'semantic-ui-css/semantic.min.css'
import './App.css'
import './Panel.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import LearningScreens from './LearningScreens'
import ScreenCourse from './ScreenCourse'
import { useLearningScreen } from '@/redux/selectors/learning'
import { useCourseScreen } from '@/redux/selectors/course'
// import MainPage from '@/components/MainPage'

export default () => {
    const isLearningScreen = useLearningScreen()
    const isCourseScreen = useCourseScreen()
    return (
        <div className="App">
            {
                isCourseScreen
                    ? <ScreenCourse />
                    : null
            }
            {
                isLearningScreen
                    ? <LearningScreens />
                    : null
            }
            
        </div>
    )
}
