import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

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

export const FormExample = memo(function FormExample({
  navigateToHome,
}: Props) {
  return (
    <View style={styles.container}>
      <Text type={TextType.BIG}>Form</Text>
      <Button shouldFocus title="Home" onPress={navigateToHome} />
    </View>
  );
});
