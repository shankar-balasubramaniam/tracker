import React, { useContext, useEffect, useState } from 'react';

import { Context as AuthContext } from '../context/AuthContext';
import AuthStackNavigator from './AuthStackNavigator';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const RootNavigator = () => {
  const { state, tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  if (state.loading) {
    return null;
  }

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
