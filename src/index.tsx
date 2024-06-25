import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import App from './App';
import packageJson from '../package.json';

const appName = packageJson.name;

// Register the main application component for React Native (iOS/Android)
AppRegistry.registerComponent(appName, () => App);

// Conditionally render the app for the web
if (Platform.OS === 'web') {
  import('react-dom').then(ReactDOM => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
