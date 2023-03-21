import { View, Text, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const OatScreen = () => {
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
            className="w-full h-80"
            source={{uri:"https://i0.wp.com/ahintofrosemary.com/wp-content/uploads/2017/06/DSC_0048.jpg?fit=3479%2C2329&ssl=1"}}/>
        </View>
        <Text className="text-2xl font-bold pt-3 pl-3">Oatmeal and Fruit</Text>
        <Text className="pt-1 pl-3 text-md text-bold text-gray-500">Serves 1</Text>

        <View className="pt-4 pl-3  w-32 h-12">
            <View className="w-32 h-8 rounded-l-full rounded-r-full bg-white border-2 border-[#BFEAF5]">
                <Text className="text-center pt-1 text-md">Post-Workout</Text>
            </View>

        </View>

        <View className="flex-row pl-11 space-x-12 pt-4 items-center">
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">110</Text>
                <Text>cal</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">22 g</Text>
                <Text>Carbs</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">1.5 g</Text>
                <Text>Fat</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">2.5</Text>
                <Text>Protein</Text>
            </View>
        </View>

        <View className="pl-3 pt-6 ">
            <Text className="text-2xl font-bold">Ingredients:</Text>
            <Text className="text-lg pl-2 pt-2">1/2 cup oatmeal</Text>
            <Text className="text-lg pl-2 pt-2">1/2 cup fruit</Text>

        </View>
        <View className="pl-3 pt-6 ">
            <Text className="text-2xl font-bold">Directions:</Text>
            <Text className="text-lg pl-2 pt-2 pr-5">Use: Small snack 1-2 hours before a 30-45 minute strength workout. You can also try it before a short cardio session, but the fiber might make it sit in your stomach longer than you'd like. If you have a sensitive stomach or you're going to be bouncing around a lot, try something with less fiber.</Text>


        </View>


    </View>
    </ScrollView>
  )
}

export default OatScreen