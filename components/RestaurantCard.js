import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'

export default function RestaurantCard(props) {
  return (

    <TouchableOpacity className=" bg-slate-800 ml-2 rounded-md w-72  flex flex-row justify-between items-center">
      <View className=" pt-0 px-2">
        <Text className=" text-white font-medium">{props.name}</Text>
        <Text className=" text-sm text-gray-400 pt-2">{props.description}</Text>
        <View className="flex flex-row">
          <View className="flex flex-row pt-4 items-center">
            <Icon.MapPin width={15} height={15} color="white"/>
            <Text className="text-white font-light"> {props.address}</Text>
          </View>
          <View className="flex flex-row">
            
          </View>
        </View>
      </View>
      <View className="">
        <Image source={props.image} className=" w-20 h-20 rounded-sm"/>
      </View>
    </TouchableOpacity>
  )
}