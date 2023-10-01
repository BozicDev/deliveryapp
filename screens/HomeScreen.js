import { View, Text, TextInput, ScrollView } from 'react-native'
import * as Icon from 'react-native-feather'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Categories, RestaurantCard, TopRated } from '../components'
import { restaurants } from '../data/restaurants'


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white pt-7">
        <StatusBar/>
        <View className=" flex-row items-center space-x-2 px-4 pb-2">
            <View className=" flex-row flex-1 items-center px-3 py-2 rounded-full border border-gray-500">
                <Icon.Search height="20" width="20" stroke="gray"/>
                <TextInput placeholder="Search" className=" ml-2 flex-1"/>
                <View className="flex-row items-center space-x-1 border-0 border-l-2, pl-2 border-l-gray-300">
                <View className="p-3 bg-orange-400 rounded-full" >
                <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>
                </View>
                </View>
            </View>
        </View>
    <Categories/>
    <TopRated/>


         {/* Pokusati rjesiti slucaj renderovanja po kategorijama koriscenjem "case" ili "if" */}

    </SafeAreaView>
  )
}