import React, { memo, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props {
  title: string;
  onPress: () => void;
  shouldFocus?: boolean;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
  focusedText: {
    fontWeight: 'bold',
  },
});

export const Button = memo(function Button({
  title,
  onPress,
  shouldFocus,
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
    >
      <View>
        <Text style={focused && styles.focusedText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
});
