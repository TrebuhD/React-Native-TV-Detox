import React, { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '../components/Button';
import { Text, TextType } from '../components/Text';
import { Input } from './Input';
import { useForm } from './useForm';

interface Props {
  navigateToHome: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0.2,0.2,0.2,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 48,
  },
  errorText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
  },
  successText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'lightgreen',
  },
});

export const FormExample = memo(function FormExample({
  navigateToHome,
}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { submitForm, error, success, loading } = useForm({ email, password });

  return (
    <>
      <View style={styles.container}>
        <Text type={TextType.BIG} testID="page_title">
          Form
        </Text>

        <View>
          <Text type={TextType.MEDIUM}>email</Text>
          <Input
            testID="email_input"
            autoCompleteType="email"
            textContentType="emailAddress"
            value={email}
            onChange={(value) => setEmail(value.nativeEvent.text)}
          />

          <Text type={TextType.MEDIUM}>password</Text>
          <Input
            testID="email_input"
            secureTextEntry={true}
            autoCompleteType="password"
            textContentType="password"
            value={password}
            onChange={(value) => setPassword(value.nativeEvent.text)}
          />

          {error && <Text style={styles.errorText}>{error}</Text>}

          {success && <Text style={styles.successText}>Success! 🎉</Text>}

          <Button
            testID="submit_form_button"
            shouldFocus
            title="Submit"
            onPress={submitForm}
          />
        </View>

        <Button
          testID="home_button"
          shouldFocus
          title="Home"
          onPress={navigateToHome}
        />
      </View>

      {loading && (
        <View style={styles.fullScreenContainer}>
          <Text style={styles.loadingText} testID="loading_text">
            Loading...
          </Text>
        </View>
      )}
    </>
  );
});
