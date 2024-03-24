import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Launch } from '../services/types';

export type RootStackParamList = {
  Home: undefined;
  Detail: { launch: Launch };
};

const HomeStack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'SpaceX 🚀 Launches' }}
        />
        <HomeStack.Screen name="Detail" component={DetailScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
