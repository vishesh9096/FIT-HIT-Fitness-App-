import { View, Text, Touchable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/mini';

const CalendarScreen = () => {
    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  
  )
  
  const route = useRoute();
  return (
    <SafeAreaView className="flex items-center">
        <View>
            <Text className="text-center pt-3 text-2xl">FIT HIIT </Text>
        </View>
        <View className="px-2 pt-4 ">
        <View className="flex-row gap-x-16 py-6 rounded-xl   bg-[#BFEAF5]  ">
            <View className="flex items-center">
            <Text className="text-3xl">
                5  
            </Text>
            <Text>Workouts</Text>
            </View>
            <View className="flex items-center">
            <Text className="text-3xl">
                69
            </Text>
            <Text>Minutes</Text>
            </View>
            <View className="flex items-center">
            <Text className="text-3xl">
                84 
            </Text>
            <Text>Calories</Text>
            </View>
        </View>
        </View>
        <View className="w-96  pt-6">
        <TouchableOpacity className="bg-[#144272] rounded-r-full rounded-l-full  h-16  ">
            <Text className="text-center pt-4 font-bold text-white text-2xl">Add Activity</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} className="absolute top-16 pt-2 left-4">
            <ArrowLeftIcon size={35} color={"#144272"}/>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CalendarScreen