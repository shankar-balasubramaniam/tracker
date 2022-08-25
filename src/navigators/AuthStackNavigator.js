import { Text, View } from 'react-native';

import React from 'react';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName='Signup'>
      <AuthStack.Screen
        name='Signup'
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name='Signin' component={SigninScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
