import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import { Button } from '@rneui/themed';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Text>AccountScreen</Text>
      <Spacer>
        <Button title='Sign out' onPress={signout} />
      </Spacer>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
