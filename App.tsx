import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ROUTE } from './src/constants';
import { Button } from './src/Button';
import { FormExample } from './src/FormExample';
import { ListExample } from './src/ListExample';

const App = () => {
  const [selectedView, setSelectedView] = useState<ROUTE>(ROUTE.HOME);

  return (
    <SafeAreaView style={styles.container}>
      {selectedView === ROUTE.HOME && (
        <>
          <Text testID="stepOne" style={styles.text}>
            Hello world!
          </Text>
          <Button
            shouldFocus
            title="Go to List example"
            onPress={() => setSelectedView(ROUTE.LIST)}
          />
          <Button
            title={'Go to Form example'}
            onPress={() => setSelectedView(ROUTE.FORM)}
          />
        </>
      )}

      {selectedView === ROUTE.LIST && (
        <ListExample navigateToHome={() => setSelectedView(ROUTE.HOME)} />
      )}

      {selectedView === ROUTE.FORM && (
        <FormExample navigateToHome={() => setSelectedView(ROUTE.HOME)} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    color: 'white',
  },
  button: {
    margin: 16,
  },
});

export default App;
