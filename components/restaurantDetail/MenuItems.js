import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Divider } from '@rneui/base'

import { windowWidth } from '../../utils/constants'

const foods = [
  {
    id: '0',
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    id: '1',
    title: 'Tandoori Chicken',
    description: 'Amazing Indian dish with tenderloin chicken off the sizzles',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    id: '2',
    title: 'Chilaquiles',
    description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    id: '3',
    title: 'Chilaquiles',
    description: 'Chilaquiles with cheese and sauce. A delicious mexican dish',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
]

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
})

export default function MenuItems() {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={foods}
      renderItem={({ item }) => (
        <View key={item.id}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={item} />
            <FoodImage food={item} />
          </View>
          <Divider
            width={0.5}
            orientation='vertical'
            style={{ marginHorizontal: 20 }}
          />
        </View>
      )}
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
      scrollEnabled
    />
  )
}

const FoodInfo = ({ food }) => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
)

const FoodImage = ({ food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
)
