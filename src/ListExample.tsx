import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

const styles = StyleSheet.create({
  container: {},
});

export const ListExample = memo(function ListExample(props: Props) {
  return (
    <View style={styles.container}>
      <Text>List Example</Text>
    </View>
  );
});
