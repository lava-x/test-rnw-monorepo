import { AppRegistry } from 'react-native'

import { App } from '@components/shared/src/App'

AppRegistry.registerComponent('myprojectname', () => App)
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})
