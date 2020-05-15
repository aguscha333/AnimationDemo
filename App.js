// In App.js in a new project

import * as React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MAIN_SCREEN, SETTINGS_SCREEN} from './constants/screens';

import MainScreen from './screens/MainScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={MAIN_SCREEN}
          component={MainScreen}
          options={({navigation}) => ({
            title: 'Animation Demo',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate(SETTINGS_SCREEN)}
                title="Settings"
                color="#000"
              />
            ),
          })}
        />
        <Stack.Screen
          name={SETTINGS_SCREEN}
          options={{
            title: 'Settings',
            headerBackTitle: '',
          }}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
