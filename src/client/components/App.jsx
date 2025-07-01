import 'semantic-ui-css/semantic.min.css'
import './App.css'
import './Panel.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import LearningScreens from './LearningScreens'
import ScreenCourse from './ScreenCourse'
import { useLearningScreen } from '@/redux/selectors/learning'
import { useCourseScreen } from '@/redux/selectors/course'
import { Helmet } from 'react-helmet'
// import MainPage from '@/components/MainPage'

export default () => {
    const isLearningScreen = useLearningScreen()
    const isCourseScreen = useCourseScreen()
    return (
        <div className="App">
            <Helmet>
                <title>Flag-o-let : Learn the flags</title>
                <meta name="description" content="Learn the flags" />
                <link rel="icon" href={`${__BASE_PATH__}favicon.ico`} />
            </Helmet>
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
