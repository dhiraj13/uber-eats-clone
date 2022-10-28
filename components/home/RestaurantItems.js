import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { windowWidth } from '../../utils/constants'

export default function RestaurantItems({ navigation, restaurantData }) {
  return (
    <View style={{ width: windowWidth }}>
      <FlatList
        data={restaurantData}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                name: item.name,
                image: item.image_url,
                price: item.price,
                reviews: item.review_count,
                rating: item.rating,
                categories: item.categories,
              })
            }
          >
            <View
              style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: 'white',
              }}
            >
              <RestaurantImage image={item.image_url} />
              <RestaurantInfo name={item.name} rating={item.rating} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: `${image}`,
      }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
    </TouchableOpacity>
  </>
)

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-45 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
)
