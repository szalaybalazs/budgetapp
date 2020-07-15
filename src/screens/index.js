import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { colors } from '@/config';

const Stack = createNativeStackNavigator();
const Modal = createNativeStackNavigator();

import Home from './Home';
import NewEntry from './NewEntry';

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.background,
        }
      }}
    >
      <Stack.Screen 
        name='Home'
        component={Home}
      />
    </Stack.Navigator>
  )
}

export default App = () => {
  return (
    <NavigationContainer>
      <Modal.Navigator
        mode='modal'
        screenOptions={{
          headerShown: false,
          stackPresentation: 'modal',
          contentStyle: {
            backgroundColor: colors.background,
          }
        }}
      >
        <Modal.Screen 
          name='Main'
          component={MainStack}
        />
        <Modal.Screen 
          name='NewEntry'
          component={NewEntry}
        />
      </Modal.Navigator>
    </NavigationContainer>
  );
}