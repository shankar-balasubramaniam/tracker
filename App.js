import { Provider as AuthProvider } from './src/context/AuthContext';
import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
