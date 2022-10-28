import React from 'react'
import { Easing } from 'react-native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

export default function RootNavigation() {
  const Stack = createStackNavigator()

  const config = {
    animation: '',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  }

  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 500,
      easing: Easing.linear,
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
