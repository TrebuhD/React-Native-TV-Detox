import React, { memo, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../components/Text';

interface Props {
  id: number;
  title: string;
  shouldFocus?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888888',
  },
  focusedContainer: {
    backgroundColor: 'white',
  },
  focusedText: {
    fontWeight: 'bold',
  },
});

export const ListItem = memo(function ListItem({
  id,
  title,
  shouldFocus,
  onPress,
}: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <TouchableOpacity
      testID={`listItem_${id}`}
      hasTVPreferredFocus={shouldFocus}
      activeOpacity={1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onPress={onPress}
      style={[styles.container, focused && styles.focusedContainer]}
    >
      <Text dark style={focused && styles.focusedText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});
