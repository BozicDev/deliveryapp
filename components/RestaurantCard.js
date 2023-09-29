import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function RestaurantCard(props) {
  return (
    <TouchableOpacity className= "ml-1  px-4 flex flex-row rounded-xl bg-slate-900" >
      <View className=" bg-black-200 py-3">
        <Text className="text-white py-2">{props.name}</Text>
        <Text className="text-white text-xs pr-4 pb-5">{props.description}</Text>
        <Text className="text-white">{props.address}</Text>
      </View>
      <View className="flex justify-center items-center">
        <Image source={props.image} className=" h-20 w-20 flex"/>
      </View>

      {/* Pokusati rijesiti prikaz restaurantscreena isto sa uvjetnim renderovanjem */}
    </TouchableOpacity>
  )
}