import React, { memo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Button } from '../components/Button';
import { Text, TextType } from '../components/Text';

interface Props {
  navigateToHome: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const ListExample = memo(function ListExample({
  navigateToHome,
}: Props) {
  return (
    <View style={styles.container}>
      <Text testID="page_title" type={TextType.BIG}>
        List
      </Text>

      <Button
        testID="button_home"
        shouldFocus
        title="Home"
        onPress={navigateToHome}
      />
    </View>
  );
});