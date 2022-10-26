import React from 'react'
import { Divider } from '@rneui/base'
import { ScrollView } from 'react-native-gesture-handler'

import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'

export default function RestaurantDetail() {
  return (
    <>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MenuItems />
      </ScrollView>
    </>
  )
}
