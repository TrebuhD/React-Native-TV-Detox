import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from './Button';

interface Props {
  navigateToHome: () => void;
}

const styles = StyleSheet.create({
  container: {},
});

export const ListExample = memo(function ListExample({
  navigateToHome,
}: Props) {
  return (
    <View style={styles.container}>
      <Text>List</Text>
      <Button shouldFocus title="Home" onPress={navigateToHome} />
    </View>
  );
});
