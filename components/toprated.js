import { View, ScrollView, Text } from "react-native"
import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../data/restaurants"

export default function TopRated () {
    return (
        <View className="bg-white h-44 pl-4">
        <Text className="text-black-300 font-medium pb-5"> Top Rated Restaurants </Text>
           <ScrollView horizontal
            className=" bg-white"
             showsHorizontalScrollIndicator = {false}
             contentContainerStyle = {
             {paddingHorizontal: 0}
            }
            >

             {
                restaurants.map((restaurant, index) => {
                    try {
                        if (restaurant.rating >= 4) {
                            return (
                                <RestaurantCard className= "mx-5"
                                key={index}
                                name={restaurant.name}
                                description={restaurant.description}
                                address={restaurant.address}
                                image={restaurant.image}
                                rating={restaurant.rating}
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
    )
}