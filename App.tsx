import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Button } from './src/components/Button';
import { Text, TextType } from './src/components/Text';
import { ROUTE } from './src/constants';
import { FormExample } from './src/form/FormExample';
import { ListExample } from './src/list/ListExample';

const App = () => {
  const [view, setView] = useState<ROUTE>(ROUTE.HOME);

  return (
    <SafeAreaView style={styles.container}>
      {view === ROUTE.HOME && (
        <>
          <Text type={TextType.BIG} testID="helloText">
            Hello world!
          </Text>
          <Button
            testID="button_list"
            shouldFocus
            title="Go to List example"
            onPress={() => setView(ROUTE.LIST)}
          />
          <Button
            testID="button_form"
            title="Go to Form example"
            onPress={() => setView(ROUTE.FORM)}
          />
        </>
      )}

      {view === ROUTE.LIST && (
        <ListExample navigateToHome={() => setView(ROUTE.HOME)} />
      )}

      {view === ROUTE.FORM && (
        <FormExample navigateToHome={() => setView(ROUTE.HOME)} />
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
  button: {
    margin: 16,
  },
});

export default React.memo(App);
