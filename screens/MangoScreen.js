import { View, Text, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const MangoScreen = () => {
    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  )
  return (
    <ScrollView>
    <View>
        <View>
            <Image 
            className="w-full h-96 "
            source={{uri:"https://www.funfoodfrolic.com/wp-content/uploads/2020/05/Mango-Smoothie-Thumbnail.jpg"}}/>
        </View>
        <Text className="text-2xl font-bold pt-3 pl-3">Mango Smoothie</Text>
        <Text className="pt-1 pl-3 text-md text-bold text-gray-500">Serves 2</Text>

        <View className="pt-4 pl-3  w-32 h-12">
            <View className="w-32 h-8 rounded-l-full rounded-r-full bg-white border-2 border-[#BFEAF5]">
                <Text className="text-center pt-1 text-md">Post-Workout</Text>
            </View>

        </View>

        <View className="flex-row pl-11 space-x-12 pt-4 items-center">
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">228</Text>
                <Text>cal</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">44.8 g</Text>
                <Text>Carbs</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">1.2 g</Text>
                <Text>Fat</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">17.1 g</Text>
                <Text>Protein</Text>
            </View>
        </View>

        <View className="pl-3 pt-6 ">
            <Text className="text-2xl font-bold">Ingredients:</Text>
            <Text className="text-lg pl-2 pt-2">1 medium mango, peeled, cubed and frozen</Text>
            <Text className="text-lg pl-2 pt-2">1/4 cup 0% Greek yogurt</Text>
            <Text className="text-lg pl-2 pt-2">1 tablespoon turmeric, fresh, chopped</Text>
            <Text className="text-lg pl-2 pt-2">1 cup mandarin section, save 8 sections for garnish</Text>

        </View>
        <View className="pl-3 pt-6 ">
            <Text className="text-2xl font-bold">Directions:</Text>
            <Text className="text-lg pl-2 pt-2 pr-5">Use: Meal 1-2 hours before 1+ hour cardio or strength workout.</Text>
            <Text className="text-lg pl-2 pt-2 pr-5">The day before, prep the mango, place on a sheet pan and freeze until solid, then transfer to a freezer-safe container.</Text>
            <Text className="text-lg pl-2 pt-2 pr-5">Place the yogurt, turmeric, mandarin sections (reserving 8) and frozen mango in a powerful blender.
Blend until smooth and creamy.</Text>
            <Text className="text-lg pl-2 pt-2 pr-5">Divide the smoothie between two glasses. Garnish with mandarin sections, either skewered on 5-inch skewers or placed on top of the smoothie.</Text>


        </View>


    </View>
    </ScrollView>
  )
}

export default MangoScreen