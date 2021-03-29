import React, { memo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Button } from '../components/Button';
import { Text, TextType } from '../components/Text';
import { ListDetails } from './ListDetails';
import { ListItem } from './ListItem';

import mockData from './listMockData.json';
import { ListMockItem } from './types';

interface Props {
  navigateToHome: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  list: {
    backgroundColor: '#333333',
    padding: 32,
    flex: 1,
  },
});

export const ListExample = memo(function ListExample({
  navigateToHome,
}: Props) {
  const [selectedItem, setSelectedItem] = useState<ListMockItem>();

  return (
    <View style={styles.container}>
      <Text testID="page_title" type={TextType.BIG}>
        List
      </Text>

      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={mockData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              id={item.id}
              title={`${item.firstName}  ${item.lastName}`}
              shouldFocus={item.id === 1}
              onPress={() => setSelectedItem(item)}
            />
          )}
        />

        <ListDetails item={selectedItem} />
      </View>

      <Button testID="button_home" title="Home" onPress={navigateToHome} />
    </View>
  );
});
