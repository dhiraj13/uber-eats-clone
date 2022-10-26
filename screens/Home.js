import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Divider } from '@rneui/base'

import config from '../config'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'
import BottomTabs from '../components/home/BottomTabs'
import { localRestaurants } from '../db/localRestaurants'

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState('San Francisco')
  const [activeTab, setActiveTab] = useState('Delivery')

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${config.YELP_API_KEY}`,
      },
    }

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
  }

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [city, activeTab])

  return (
    <>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <RestaurantItems restaurantData={restaurantData} />
        </ScrollView>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </>
  )
}
