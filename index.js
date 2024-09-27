import { AppRegistry } from 'react-native';
import App from './App';  // Assuming your App component is in App.js
import { name as appName } from './app.json';  // Assuming app.json is in your project root

AppRegistry.registerComponent(appName, () => App);
