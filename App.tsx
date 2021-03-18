import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ListExample } from './src/ListExample';

enum SELECTED_VIEW {
  NONE,
  LIST,
  FORM,
}

const App = () => {
  const [selectedView, setSelectedView] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text testID="stepOne" style={styles.text}>
        Hello world!
      </Text>

      <ListExample />
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
});

export default App;
