import AccountScreen from '../screens/AccountScreen';
import React from 'react';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import TrackStackNavigator from './TrackStackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name='TrackStack'
        component={TrackStackNavigator}
      />
      <Tab.Screen name='Account' component={AccountScreen} />
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
