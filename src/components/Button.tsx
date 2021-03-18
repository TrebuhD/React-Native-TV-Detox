import React, { memo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Text } from './Text';

interface Props {
  title: string;
  onPress: () => void;
  shouldFocus?: boolean;
  testID?: string;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    margin: 16,
    backgroundColor: Colors.light,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  focusedContainer: {
    backgroundColor: 'gray',
    borderColor: 'lightblue',
  },
  text: {
    color: 'black',
  },
  focusedText: {
    fontWeight: 'bold',
  },
});

export const Button = memo(function Button({
  title,
  onPress,
  shouldFocus,
  testID,
}: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, focused && styles.focusedContainer]}
      onPress={onPress}
      activeOpacity={1}
      hasTVPreferredFocus={shouldFocus}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      testID={testID}
    >
      <View>
        <Text style={[styles.text, focused && styles.focusedText]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});
