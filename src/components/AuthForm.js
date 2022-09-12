import { Button, Input, Text } from '@rneui/themed';
import React, { useState } from 'react';

import Spacer from './Spacer';
import { StyleSheet } from 'react-native';

const AuthForm = ({ headerText, errorMessage, buttonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button
        title={buttonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 10,
  },
});
