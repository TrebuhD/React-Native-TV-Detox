import React, { memo } from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

export enum TextType {
  BIG = 'big',
}

interface Props extends TextProps {
  type?: TextType;
  children: string;
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  text_big: {
    fontSize: 48,
  },
});

export const Text = memo(function Text({
  type,
  children,
  style,
  ...rest
}: Props) {
  // @ts-ignore todo: figure out typings
  const typeStyles = styles[`text_${type}`];

  return (
    <RNText style={[styles.text, typeStyles, style]} {...rest}>
      {children}
    </RNText>
  );
});
