import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, TextType } from '../components/Text';
import { ListMockItem } from './types';

interface Props {
  item?: ListMockItem;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 8,
  },
});

export const ListDetails = memo(function ListDetails({ item }: Props) {
  if (!item) {
    return (
      <View style={styles.container}>
        <Text type={TextType.MEDIUM} dark testID="empty_list_message">
          {'<--   Select an item in the list'}
        </Text>
      </View>
    );
  }

  const { firstName, lastName, country, email, favPlant, language } = item;

  return (
    <View style={styles.container} testID="list_details">
      <Text testID="list_details__first_name" style={styles.text} dark>
        First name: {firstName}
      </Text>
      <Text testID="list_details__last_name" style={styles.text} dark>
        Last name: {lastName}
      </Text>
      <Text testID="list_details__country" style={styles.text} dark>
        Country: {country}
      </Text>
      <Text testID="list_details__language" style={styles.text} dark>
        Language: {language}
      </Text>
      <Text testID="list_details__email" style={styles.text} dark>
        Email: {email}
      </Text>
      <Text testID="list_details__plant" style={styles.text} dark>
        Favorite plant name: {favPlant}
      </Text>
    </View>
  );
});
