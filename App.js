/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    color: 'white',
  },
});

export default App;
