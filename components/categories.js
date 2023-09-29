import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../data/categories'

export default function Categories() {
    const [activeCategory, setActiveCategory] =useState(null)

  return (
    <View className="mt-3 bg-white">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            className = "overflow-visible"
            contentContainerStyle = {
                {paddingHorizontal: 15}

            }
        >

            {
                categories.map((category, index)=> {
                    let isActive = category.id == activeCategory
                    let btnClass = isActive? "bg-orange-400" : "bg-gray-200"
                    let txtClass = isActive? "font-semibold text-white" : "text-gray-500"


                    return (
                        <View key={index} className = "flex justify-center items-center pt-1 pr-2 pb-4" >
                            <TouchableOpacity 
                            onPress={() => setActiveCategory(category.id)}
                            className={"p-2 rounded-full shadow "+ btnClass}>
                                <Text className = {" " + txtClass}> {category.name} </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }

        </ScrollView>
    </View>
  )
}