import React from 'react';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TrackStack = createNativeStackNavigator();

const TrackStackNavigator = () => {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen name='TrackList' component={TrackListScreen} />
      <TrackStack.Screen name='TrackDetail' component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
};

export default TrackStackNavigator;
