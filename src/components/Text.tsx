import React, { memo } from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

export enum TextType {
  BIG = 'big',
  MEDIUM = 'medium',
}

interface Props extends TextProps {
  children: string | string[];
  type?: TextType;
  dark?: boolean;
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  text_big: {
    fontSize: 48,
  },
  text_medium: {
    fontSize: 24,
  },
  text_dark: {
    color: 'black',
  },
});

export const Text = memo(function Text({
  type,
  children,
  style,
  dark,
  ...rest
}: Props) {
  // @ts-ignore todo: figure out typings
  const typeStyles = styles[`text_${type}`];

  return (
    <RNText
      style={[styles.text, typeStyles, dark && styles.text_dark, style]}
      {...rest}
    >
      {children}
    </RNText>
  );
});
