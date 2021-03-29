import React, { memo, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  TextInput,
} from 'react-native';

interface Props extends TextInputProps {}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: '#dddddd',
    borderWidth: 3,
  },
  containerFocused: {
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  input: {
    minHeight: 40,
    minWidth: 200,
    color: 'black',
    fontWeight: 'bold',
  },
});

export const Input = memo(function Input({ ...rest }: Props) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, focused && styles.containerFocused]}
      onPress={() => inputRef.current?.focus()}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <TextInput
        ref={inputRef}
        onFocus={() => console.log('hello')}
        style={styles.input}
        {...rest}
      />
    </TouchableOpacity>
  );
});
