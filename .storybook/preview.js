import 'semantic-ui-css/semantic.min.css'
import '@/components/App.css'
import '@/components/Panel.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

// import { withRedux } from '@/tools/components/storybook/withReduxDecorator'
// import store from '@/tools/components/storybook/store';

/** @type { import('@storybook/react').Preview } */
const preview = {
  // decorators: [withRedux],
  decorators: [],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;