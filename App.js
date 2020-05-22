// In App.js in a new project

import * as React from 'react';

import MainScreen from './src/screens/MainScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <MainScreen />
  </SafeAreaProvider>
);

export default App;
