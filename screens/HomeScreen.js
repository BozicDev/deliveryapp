import { View, Text, TextInput, ScrollView } from 'react-native'
import * as Icon from 'react-native-feather'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Categories, RestaurantCard } from '../components'
import { restaurants } from '../data/restaurants'


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white pt-7">
        <StatusBar barStyle = "dark-content"/>
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
            {/* <View className="p-3 bg-orange-400 rounded-full" >
                <Icon.Sliders height="25" width="25" strokeWidth={2.5} stroke="white"/>
            </View> */}
        </View>

    {/* main content */}

    <Categories/>

    { /* Predlozeni restorani */}

    <View className="mt-5">
        <View className="bg-white h-40 px-4 mb-5">
            <Text className="text-black-300 font-medium mb-5"> Top Rated Restaurants </Text>
                <ScrollView horizontal
                className=" bg-white"
                 showsHorizontalScrollIndicator = {false}
                >
                
                {
                    restaurants.map((restaurant, index) => {
                        try {
                            if (restaurant.toprated == true) {
                                return (
                                    <RestaurantCard className= "mx-5"
                                    key={index}
                                    name={restaurant.name}
                                    description={restaurant.description}
                                    address={restaurant.address}
                                    image={restaurant.image}
                                    />
                                )
                            } 
                        } catch (err) {
                            console.log(err)
                        }
                    })
                }

            </ScrollView>
        </View>

         {/* Pokusati rjesiti slucaj renderovanja po kategorijama koriscenjem "case" ili "if" */}

        <View className="bg-white h-40 px-4">
            <Text className="text-black-300 font-medium"> Closest to you </Text>
            <ScrollView horizontal
                className=" bg-white"
                 showsHorizontalScrollIndicator = {false}
                 contentContainerStyle = {
                 {paddingHorizontal: 15}
                }
                >
                    
                 {
                    restaurants.map((restaurant, index) => {
                        try {
                            if (restaurant.ctu == true) {
                                return (
                                    <RestaurantCard className= "mx-5"
                                    key={index}
                                    name={restaurant.name}
                                    description={restaurant.description}
                                    address={restaurant.address}
                                    image={restaurant.image}
                                    />
                                )
                            } 
                        } catch (err) {
                            console.log(err)
                        }
                    })
                 }

            </ScrollView>        
        </View>
        
        <View className="bg-white px-4  min-h-full">
            <Text className="text-black-300 font-medium"> Other Restaurants </Text>
            <ScrollView horizontal
                className=" bg-white"
                 showsHorizontalScrollIndicator = {false}
                 contentContainerStyle = {
                 {paddingHorizontal: 15}
                }
                >

                 {
                    restaurants.map((restaurant, index) => {
                        try {
                            if (restaurant.ctu == false && restaurant.toprated == false) {
                                return (
                                    <RestaurantCard className= "mx-5"
                                    key={index}
                                    name={restaurant.name}
                                    description={restaurant.description}
                                    address={restaurant.address}
                                    image={restaurant.image}
                                    />
                                )
                            } 
                        } catch (err) {
                            console.log(err)
                        }
                    })
                 }
                
                    
            </ScrollView>  
        </View>

    </View>

    </SafeAreaView>
  )
}