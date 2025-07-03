import { View, Text, SectionList } from 'react-native';
import React from 'react';

export default function MySectionList() {
  const listItem = [
    {
      title: 'Fruits',
      data: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Mango' },
      ],
    },
    {
      title: 'Vegetables',
      data: [
        { id: 1, name: 'Carrot' },
        { id: 2, name: 'Potato' },
        { id: 3, name: 'Tomato' },
        { id: 4, name: 'Onion' },
      ],
    },
  ];

  const renderItem = ({item}) => (
    <View>
        <Text>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({section}) => (
    <View>
        <Text>{section.title}</Text>
    </View>
  );
  
  return (
    <View>
      <SectionList
        sections={listItem}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item)=> item.id}
      />
    </View>
  );
}
