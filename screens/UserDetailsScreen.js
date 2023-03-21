import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const UserDetailsScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
    <View className="h=30 w-90 flex-row pt-6 pb-6 px-6 bg-white">
        <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H0n5nPYrtJdKeuEQnxeHDTwThraPE7UEJcsx92_Oqgp3u4QC-kC1I0hNak-EltSxW5M&usqp=CAU"}}
        className="h-20 w-20 rounded-full"/>
      <Text className="pt-6 font-bold text-xl px-6">Vishesh</Text>
      <Text className="text-sm pl-32 absolute bottom-6">User since: 18 January, 2023</Text>
    </View>
    

<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-6 bg-white">
 BIO: Happy to be healthier now!
    </Text>
</View>

<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-10 bg-white">
 Basic Information:
    </Text>
    <Text className="text-gray-500 text-sm absolute bottom-4 px-10">Height, Weight, Age, Gender, Activity</Text>
</View>

<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-10 bg-white">
 Primary Goal:
    </Text>
    <Text className="text-gray-500 text-sm absolute bottom-4 px-10">Weight Loss</Text>
</View>

<TouchableOpacity>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-8 bg-white">
 Connect Devices
    </Text>
</View>
</TouchableOpacity>

<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-10 bg-white">
 Food Preferences
    </Text>
    <Text className="text-gray-500 text-sm absolute bottom-4 px-10">Vegetarian Diet</Text>
</View>

<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-10 bg-white">
 Medical Symptoms Record:
    </Text>
    <Text className="text-gray-500 text-sm absolute bottom-4 px-10">Pain in calf muscle</Text>
</View>

<TouchableOpacity onPress={()=>{
    navigation.navigate("Login")
}}>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-8 text-red-500 bg-white">
 Log Out
    </Text>
</View>
</TouchableOpacity>
    
    </SafeAreaView>
  )
}

export default UserDetailsScreen