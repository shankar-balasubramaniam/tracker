import React, { useContext, useEffect, useState } from 'react';

import { Context as AuthContext } from '../context/AuthContext';
import AuthStackNavigator from './AuthStackNavigator';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  const { state } = useContext(AuthContext);

  useEffect(() => {
    console.log(state.token);
  }, [state.token]);

  return (
    <NavigationContainer>
      {state.token ? <MainBottomTabNavigator /> : <AuthStackNavigator />}
      {/* <RootStack.Navigator>
        <RootStack.Screen
          name='AuthStack'
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='MainBottomTab'
          component={MainBottomTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator> */}
    </NavigationContainer>
  );
};

export default RootNavigator;
