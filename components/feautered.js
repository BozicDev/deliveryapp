import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { restaurants } from '../data/restaurants'
import RestaurantCard from './RestaurantCard'

export default function Feautered(props) {
  return (
    <View>
      <View className= " flex-row items-center justify-between p-4">
        <View>
          <Text>{props.title}</Text>
        </View>
      </View>
      <View>
        <ScrollView className="bg-cyan-300"
          showsVerticalScrollIndicator={false}
          contentContainerStyle = {
            {paddingVertical: 15}
          }
        >
          { 
          

            restaurants.map((restaurant, index) => {
              return (
                <RestaurantCard
                key={index}
                name={restaurant.name}
                description={restaurant.description}
                address={restaurant.address}
                image={restaurant.image}
                />
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}