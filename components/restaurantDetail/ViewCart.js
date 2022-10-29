import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

import { viewCartDistanceFromBottom } from '../../utils/constants'
import OrderItem from './OrderItem'

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false)

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  )

  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0)

  const totalUSD = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
    },
  })

  console.log({ items })

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <FlatList
              keyExtractor={(item) => item.id}
              data={items}
              renderItem={({ item }) => <OrderItem key={item.id} item={item} />}
            />
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View></View>
          </View>
        </View>
      </>
    )
  }

  return (
    <>
      <Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: viewCartDistanceFromBottom,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: 'relative',
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: 'white', fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: 'white', fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  )
}
