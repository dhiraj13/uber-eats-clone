import React from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const items = [
  {
    id: '0',
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    id: '1',
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    id: '2',
    image: require('../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    id: '3',
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    id: '4',
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    id: '5',
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    id: '6',
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
]

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <FlatList
        data={items}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const renderItem = ({ item }) => (
  <View key={item.id} style={{ alignItems: 'center', marginRight: 30 }}>
    <Image
      source={item.image}
      style={{
        width: 50,
        height: 40,
        resizeMode: 'contain',
      }}
    />
    <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text>
  </View>
)
