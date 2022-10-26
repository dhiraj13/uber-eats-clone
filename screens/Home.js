import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'
import { localRestaurants } from '../db/localRestaurants'
import config from '../config'

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)

  const getRestaurantsFromYelp = () => {
    const yelpUrl =
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles'

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${config.YELP_API_KEY}`,
      },
    }

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses))
  }

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <RestaurantItems restaurantData={restaurantData} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}
